import {request} from "@/network/require";

export function handleMusicComments(id){
    return request({
        url:'/comment/music',
        params:{
            id
        }
    })
}