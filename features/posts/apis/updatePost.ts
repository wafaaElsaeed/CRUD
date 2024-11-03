import { AxiosCreate } from "@/app/api/AxiosCreate";
import { host_url } from "@/config/config";

export async function updatePost(data, id) {
    return await AxiosCreate.put(`${host_url}posts/${id}`, data);
}