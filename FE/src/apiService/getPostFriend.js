import * as request from "~/utils/request"

export const getPostFriend = async (data) => {
    try{
        const res = await request.post("post", data)
        return res
    }catch (err) {
        console.log(err)
    }
}