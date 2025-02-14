import * as request from "~/utils/request"

export const createUser = async (data) => {
    try{
        const res = await request.post("users", data)
        return res.data;
    }catch (err){
        console.log(err)
    }
}