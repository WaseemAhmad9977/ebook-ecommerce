import { useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import useSWR, { mutate } from "swr";
import http from "../../util/http";
import fetcher from "../../util/fetcher";
import { ClipLoader } from "react-spinners";

const UserLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    data: session,
    isLoading: sessionLoading,
    error: sessionErr,
  } = useSWR("/user/session", fetcher);
  

  const [width, setWidth] = useState(280);
  const menus = [
  
    {
      label: "ebook",
      href: "/app/ebook",
      icon: "ri-bookmark-line",
    },
    
  ];

  const onMobileNavigate = (href) => {
    setWidth(280);
    navigate(href);
  };

  const logout = async () => {
    try {
      const data = await http.get("user/logout");
      mutate('/user/session')
    } catch (err) {
      console.log(err.response ? err.reponse.data.message : err.message);
    }
  };

  const Mobile = () => {
    return (
      <div className="h-[5000px] bg-gray-200 lg:hidden block">
        <aside
          className="fixed top-0 left-0 h-full bg-white overflow-x-hidden space-y-6 z-[10000] shadow-2xl"
          style={{
            width: width === 280 ? 0 : 280,
            transition: "0.3s",
          }}
        >
          <div className="flex flex-col items-center my-2">
            <button className="w-16 h-16 bg-slate-100 rounded-full">
              <i className="ri-user-fill text-4xl"></i>
            </button>
            <h1 className="text-lg font-medium mt-2">Er Saurav</h1>
            <label className="text-gray-500">Admin</label>
          </div>

          <div className="flex flex-col">
            {menus.map((item, index) => (
              <button
                key={index}
                onClick={() => onMobileNavigate(item.href)}
                className="capitalize px-6 w-full text-left py-2.5 text-zinc-600 hover:bg-slate-100 hover:text-zinc-900"
                style={{
                  background:
                    location.pathname === item.href
                      ? "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"
                      : null,
                  color: location.pathname === item.href ? "black" : null,
                }}
              >
                <i className={`mr-2 ${item.icon}`}></i>
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        <section
          className="py-24"
          style={{
            transition: "0.3s",
            width: "100%",
          }} 
        >
          <nav
            className="p-6 fixed top-0"
            style={{
              width: "100%",
              transition: "0.3s",
              background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
            }}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setWidth(width === 0 ? 280 : 0)}
                  className="bg-white w-8 h-8 rounded-full"
                >
                  <i className="ri-align-right"></i>
                </button>
                <h1 className="text-black font-medium text-lg">Ebook</h1>
              </div>
              <div className="space-x-4">
                <button onClick={logout} title="Logout">
                  <i className="ri-logout-circle-r-line cursor-pointer text-white text-xl"></i>
                </button>

                <button onClick={() => setWidth(width === 0 ? 280 : 0)}>
                  <i className="ri-align-right text-white text-xl"></i>
                </button>
              </div>
            </div>
          </nav>
          <div className="w-11/12 bg-white p-8 mx-auto rounded-lg flex flex-col gap-6">
            <div>
              <h1 className="text-gray-500">{location.pathname}</h1>
            </div>
            <Outlet />
          </div>
        </section>
      </div>
    );
  };

  const Desktop = () => {
    return (
      <div className="h-[5000px] bg-gray-200 lg:block hidden">
        <aside
          className="fixed top-0 left-0 h-full bg-white overflow-x-hidden space-y-6"
          style={{
            width: width,
            transition: "0.3s",
          }}
        >
          <div className="flex flex-col items-center my-2">
            <button className="w-16 h-16 bg-slate-100 rounded-full">
              <i className="ri-user-fill text-4xl"></i>
            </button>
            <h1 className="text-lg font-medium mt-2">Er Saurav</h1>
            <label className="text-gray-500">Admin</label>
          </div>

          <div className="flex flex-col">
            {menus.map((item, index) => (
              <Link to={item.href} key={index}>
                <button
                  className="capitalize px-6 w-full text-left py-2.5 text-zinc-600 hover:bg-slate-100 hover:text-zinc-900"
                  style={{
                    background:
                      location.pathname === item.href
                        ? "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"
                        : null,
                    color: location.pathname === item.href ? "black" : null,
                  }}
                >
                  <i className={`mr-2 ${item.icon}`}></i>
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </aside>

        <section
          className="py-24"
          style={{
            marginLeft: width,
            transition: "0.3s",
            width: `calc(100% - ${width}px)`,
          }}
        >
          <nav
            className="p-6 fixed top-0"
            style={{
              left: width,
              width: `calc(100% - ${width}px)`,
              transition: "0.3s",
              background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
            }}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setWidth(width === 0 ? 280 : 0)}
                  className="bg-white w-8 h-8 rounded-full"
                >
                  <i className="ri-align-right"></i>
                </button>
                <h1 className="text-black font-medium text-lg">Ebook</h1>
              </div>
              <div>
                <button onClick={logout} title="Logout">
                  <i className="ri-logout-circle-r-line text-white text-xl"></i>
                </button>
              </div>
            </div>
          </nav>
          <div className="w-11/12 bg-white p-8 mx-auto rounded-lg flex flex-col gap-6">
            <div>
              <h1 className="text-gray-500">{location.pathname}</h1>
            </div>
            <Outlet />
          </div>
        </section>
      </div>
    );
  };

  // if(sessionLoading)
  //     return (
  //        <h1>Loader</h1>
  //     )

  if (sessionLoading) return <ClipLoader />;
 
  if (sessionErr) return <Navigate to="/login" replace />;
  if (!session) return null; 
  if (session.role !== "user") return <Navigate to="/login" replace />;
 
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default UserLayout;
