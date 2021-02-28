import {request} from "@/network/require";

export function handleMusicDetail(ids){
    return request({
        url:'/song/detail',
        params:{
            ids
        }
    })
}