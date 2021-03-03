import {request} from "@/network/require";

export function handleSearchMusic(keywords) {
    return request({
        url:'/cloudsearch',
        params:{
            keywords
        }
    })
}