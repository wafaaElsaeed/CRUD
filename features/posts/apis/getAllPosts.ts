import { AxiosCreate } from "@/app/api/AxiosCreate";
import { host_url } from "@/config/config";

export async function getAllPosts(skip=0, search=''){
    const res = await AxiosCreate.get(`${host_url}posts/search?q=${search}&limit=10&skip=${skip}`);
    return res;
}