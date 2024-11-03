import { AxiosCreate } from "@/app/api/AxiosCreate";
import { host_url } from "@/config/config";

export async function createPost(data:{}) {
    return await AxiosCreate.post(`${host_url}posts/add`, data);
}