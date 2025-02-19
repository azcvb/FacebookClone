import * as request from "~/utils/request"

const logoutService = async () => {
    try{    
        await request.get("auth/logout")
    }catch (err) {
        console.log(err)
    }
}

export default logoutService;