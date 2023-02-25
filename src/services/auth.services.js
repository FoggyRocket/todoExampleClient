
import _api from "./api"


export const loginEp = (data)=> _api.post("/auth/login",data);
export const signupEp = (data)=> _api.post("/auth/signup",data);
export const verifyEp = () => _api.get("/auth/verify");