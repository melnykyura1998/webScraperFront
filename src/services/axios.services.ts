import axios from "axios";

import baseURL from "../constants/urls";

export const axiosServices = axios.create({ baseURL });
