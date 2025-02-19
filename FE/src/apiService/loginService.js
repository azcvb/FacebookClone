import * as request from "~/utils/request"

const loginService = async (data) => {
    try{
         const res = await request.post("auth/login", data)
         return res
    }catch (err){
    }
}

export default loginService;