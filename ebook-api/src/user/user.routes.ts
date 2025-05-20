import { Router } from "express";
import { fetchUser, login, signup } from "./user.controller";

const  UserRouter = Router()

UserRouter.get('/',fetchUser)
UserRouter.post('/signup',signup)
UserRouter.post('/login',login)


export default UserRouter