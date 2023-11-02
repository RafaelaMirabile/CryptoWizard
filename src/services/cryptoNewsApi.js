import {createApi,fetchBaseQuery } from 'reduxjs/toolkit/query/react'

const cryptoNewsApiHeadres = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '7da9cf8b36msh4527bf1039e2a71p17e7cfjsn2105e5092342',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news/trendingtopics";

const createRequest = (url) => ({
    url,
    headers: cryptoNewsApiHeadres
})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery
} = cryptoNewsApi;