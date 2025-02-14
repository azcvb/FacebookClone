import * as request from "~/utils/request"

const logoutService = async () => {
    try{    
        await request.get("auth/logout")
        console.log("acv")
    }catch (err) {
        console.log(err)
    }
}

export default logoutService;