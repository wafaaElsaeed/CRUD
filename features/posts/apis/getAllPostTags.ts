import { AxiosCreate } from "@/app/api/AxiosCreate";
import { host_url } from "@/config/config";

export async function getAllPostTags(){
    const res = await AxiosCreate.get(`${host_url}posts/tags`);
    return res;
}