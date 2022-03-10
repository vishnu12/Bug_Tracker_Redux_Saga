import axios from "axios";
import { Data } from "../actions/actionTypes";

const API_URL = 'http://localhost:5000'

export const getData=()=>axios.get(`${API_URL}/bugs`)
export const getDataById=(id:string)=>axios.get(`${API_URL}/bugs/${id}`)
export const addBug=(data:Data)=>axios.post(`${API_URL}/bugs`,data)
export const removeBug=(id:string)=>axios.delete(`${API_URL}/bugs/${id}`)
export const editBug=(data:Data)=>axios.patch(`${API_URL}/bugs/${data.id}`,{description:data.description})
export const changeBugStatus=(data:Data)=>axios.patch(`${API_URL}/bugs/${data.id}`,{resolved:data.resolved})