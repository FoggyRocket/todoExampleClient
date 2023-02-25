

import _api from './api'



export const getAllTodo = () => _api.get("/todo/list");
export const getbyId = (idTodo)=> _api.get(`/todo/${idTodo}`);
export const createTodo = (payload) => _api.post("/todo/create",payload);
