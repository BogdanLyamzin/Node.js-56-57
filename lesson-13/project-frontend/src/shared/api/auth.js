import axios from "axios";

const {REACT_APP_API_URL} = process.env;

const instance = axios.create({
    baseURL: REACT_APP_API_URL,
});

const setToken = token => {
    if(token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = "";
}

export const register = async (data)=> {
    const {data: result} = await instance.post("/auth/register", data);
    setToken(result.token);
    return result;
}

export const login = async (data)=> {
    const {data: result} = await instance.post("/auth/login", data);
    setToken(result.token);
    return result;
}

export const logout = async ()=> {
    const {data} = await instance.post("/auth/logout");
    setToken();
    return data;
}

export const getCurrent = async (token)=> {
    try {
        setToken(token);
        const {data} = await instance.get("/auth/current");
        return data;
    }
    catch(error) {
        setToken();
        throw error;
    }
}

export default instance;