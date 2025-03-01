import * as request from "~/utils/request" 

export const getMyFriend = async () => {
    try{
        const res = await request.get("friend")
        return res.result
    }catch (err) {
        console.log(err)
    }
}