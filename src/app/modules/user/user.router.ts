import { Router } from "express";
import { userController } from "./userController";

const userRouter = Router()

userRouter.post('/create-user', userController.createUser)
userRouter.get('/', userController.getUser)
userRouter.get('/:userId', userController.getSingleUser)
userRouter.put('/:userId', userController.updateUser)
userRouter.delete('/:userId', userController.deleteUser)

export default userRouter