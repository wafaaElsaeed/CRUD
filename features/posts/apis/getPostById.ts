import { AxiosCreate } from "@/app/api/AxiosCreate";
import { host_url } from "@/config/config";

export async function getSinglePost(id:number){
    const res = await AxiosCreate.get(`${host_url}posts/${id}`);
    return res;
}