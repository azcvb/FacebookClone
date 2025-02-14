import * as request from "~/utils/request"

const loginTokenService = async () => {
    try{
        const res = await request.get("auth/introspect")
        return res;
    }catch (err){
        return false
    }
}
export default loginTokenService;