import { axiosServices } from "./axios.services";
import { urls } from "../constants";
import { IBid } from "../interfaces";

export const bidsServises = {
    getAll: ():Promise<{ data: {data:IBid[]} }> => axiosServices.get(urls.bids.bids),
    getById: (id:string):Promise<{ data: {data:IBid} }> => axiosServices.get(`${urls.bids.bids}/${id}`),
};
