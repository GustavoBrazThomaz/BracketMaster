import axios from "axios";
import { Environment } from "./environment";



export const API = axios.create({
  baseURL: Environment.API_URL,
});
