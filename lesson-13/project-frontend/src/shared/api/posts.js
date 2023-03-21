import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
})

export const getPosts = ()=> {
    return postsInstance.get("/")
}

export const searchPosts = (q, _page = 1)=> {
    return postsInstance.get("/", {
        params: {
            q,
            _page,
            _limit: 4,
        }
    })
}

export const getPostById = (id) => {
    return postsInstance.get(`/${id}`);
}

export const getPostComments = (id) => {
    return postsInstance.get(`/${id}/comments`);
}