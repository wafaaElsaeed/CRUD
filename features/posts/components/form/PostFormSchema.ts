/* eslint-disable no-useless-escape */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const PostFormSchema = yup.object({
  title: yup.string().required("please enter post title"),
  body: yup.string().required("please enter post body"),
  tags: yup.array().required("please select post tags").min(1),
});

export default yupResolver(PostFormSchema);