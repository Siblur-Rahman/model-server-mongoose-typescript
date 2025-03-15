import { IUser } from "./user.interface";
import user from "./user.model";


const createUser = async(payload: IUser): Promise<IUser>=>{
    const result = await user.create(payload)

    return result
}

const getUser = async () => {
    const result = await user.find()
    return result
  }
  const getSingleUser = async (id: string) => {
    //   const result = await User.findOne({name:"habi jabi"})
    const result = await user.findById(id)
    return result
  }
  
  const updateUser = async (id: string, data: IUser) => {
    const result = await user.findByIdAndUpdate(id, data, {
      new: true,
    })
    return result
  }
  
  const deleteUser = async (id: string) => {
    const result = await user.findByIdAndDelete(id)
    return result
  }
export const userService={
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
}