import {request} from './require';

export function handleSearchMusic(keywords) {
    return request({
        url:'/cloudsearch',
        params:{
            keywords
        }
    })
}

export function handleBanner(type) {
    return request({
        url:'/banner',
        params:{
            type
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

export function handleMusicCover(ids){
    return request({
        url:'/song/detail',
        params:{
            ids
        }
    })
}