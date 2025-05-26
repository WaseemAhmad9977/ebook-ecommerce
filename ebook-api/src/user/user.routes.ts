import { Router } from "express";
import { fetchUser, login, signup,session,logout } from "./user.controller";

const  UserRouter = Router()

UserRouter.get('/',fetchUser)
UserRouter.post('/signup',signup)
UserRouter.post('/login',login)
UserRouter.get('/session',session)
UserRouter.get('/logout',logout)


export default UserRouter