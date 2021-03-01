import {request} from "@/network/require";

export function handleMusicDetail(ids){
    return request({
        url:'/song/detail',
        params:{
            ids
        }
    })
}

export function handleMusicUrl(id) {
    return request({
        url:'/song/url',
        params:{
            id
        }
    })
}