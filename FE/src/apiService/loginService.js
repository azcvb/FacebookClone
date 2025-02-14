import * as request from "~/utils/request"

const loginService = async (data) => {
    try{
        console.log(data)
         const res = await request.post("auth/login", data)
         console.log(res)   
         return res
    }catch (err){
        console.log(err)
    }
}

export default loginService;