import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { mutate } from "swr";

axios.defaults.withCredentials = true;

const Login = () => {
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    try {
      e.preventDefault();
      const user = {
        email: "waseemahmad9977@gmail.com",
        password: "12345",
      };
      const { data } = await axios.post(
        "http://localhost:8080/user/login",
        user
      );
      console.log(data);
      if (data.role === "admin") {
        mutate("/user/session", data, false); // false = don't revalidate right now
        navigate("/admin/dashboard");
        return
      }
     
     navigate("/app/ebook");
    
    } catch (err) {
      console.log(err.reponse ? err.response.data.message : err.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center nimate__animated animate__fadeIn ">
      <div className="bg-white w-[480px]     rounded shadow p-5 animate__animated animate__pulse">
        <h1 className="text-center text-2xl font-semibold mb-4">Hi User!</h1>
        <form
          action=""
          className="flex flex-col gap-5"
          onSubmit={(e) => handlelogin(e)}
        >
          <div className="flex flex-col gap-2">
            <label className="font-medium text-base">email</label>
            <input
              className="border  border-gray-300 rounded p-2"
              name="email"
              type="email"
              placeholder="mail@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="font-medium text-base">password</label>
            <input
              className="border  border-gray-300 rounded p-2 pr-12"
              name="password"
              type={type}
              placeholder="******"
            />

            <button
              onClick={() => setType(type === "password" ? "text" : "password")}
              type="button"
              className="absolute top-9 right-2 bg-gray-100 w-8 h-8 rounded-full hover:bg-gray-200"
            >
              {type === "password" ? (
                <i class="ri-eye-line"></i>
              ) : (
                <i class="ri-eye-off-line"></i>
              )}
            </button>
          </div>
          <button className="bg-indigo-500  p-2 rounded font-medium text-white">
            login
          </button>
        </form>
        <div className="flex gap-2 mt-4 ">
          <label className="text-gray-500">I don't have an account?</label>
          <Link to="/signup" className="text-blue-600 hover:underline">
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
