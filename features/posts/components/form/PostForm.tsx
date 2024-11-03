
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import TextInput from '@/components/form/TextInput'
import PostFormSchema from './PostFormSchema';
import TextArea from '@/components/form/TextArea';
import MultiSelectInput from '@/components/form/MultiSelectInput';
import { getAllPostTags } from '../../apis/getAllPostTags';
import { getSinglePost } from '../../apis/getPostById';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function PostForm({ submitHandler, id = null }) {
  const router = useRouter()
  const [allTags, setAllTags] = useState([])
  const [loading, setLoading] = useState(false)


  const { register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
    trigger, } = useForm({
      resolver: PostFormSchema,
      mode: "onChange",
    });

  const {
    tags
  } = watch();

  useEffect(() => {
    getTagsOptions()
    if (id) {
      getPostById(id)
    }
  }, [id])

  /* getTags */
  function getTagsOptions() {
    getAllPostTags().then((res) => {
      console.log("🚀 ~ getAllPostTags ~ res:", res.data)
      const response = res?.data;
      const postTags = [...allTags]
      response.map((item) => (
        postTags.push({ value: item?.slug, label: item.name })
      ))
      setAllTags(postTags)
    }).catch((err) => {
      console.log(err);
    })
  }

  /* get single post */
  function getPostById(id) {
    getSinglePost(id).then((res) => {
      console.log(res);
      const data = { ...res?.data };
      [
        "reactions",
        "views",
      ].forEach((key) => delete data[key]);
      console.log(data);
      reset(data);
    })
  }

  /* submit form handler */
  async function onSubmit(data) {
    setLoading(true)
    const submitProps = await submitHandler(data);
    if (submitProps === 'done') {
      setLoading(false)
      router.push('/')
    }
  }

  return (
    <div className='my-32'>
      <Link href='/' className='text-blue-700'>
        Back to all Posts
      </Link>
      <div className='w-[60%] mx-auto  border p-10 rounded-md'>
        <h1 className='capitalize text-center text-2xl font-bold mb-5'>
          {id ? 'update post' : 'create new post'}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col justify-center gap-3 gap-y-5'>
            {/* title input */}
            <TextInput
              type='text'
              label='Post title*'
              name='title'
              placeholder='title'
              error={errors?.["title"] ? errors?.["title"]?.message : " "}
              register={{ ...register("title") }}
            />
            {/* tags select input */}
            <MultiSelectInput
              options={allTags}
              setValue={setValue}
              value={allTags?.filter(option => tags?.includes(option.value))}
              trigger={trigger}
              name='tags'
              placeholder='select...'
              label='post tags*'
              error={errors?.["tags"] ? errors?.["tags"]?.message : " "}
            />
            {/* body */}
            <TextArea
              label='Post body*'
              name='body'
              placeholder='body'
              error={errors?.["body"] ? errors?.["body"]?.message : " "}
              register={{ ...register("body") }}
            />
          </div>
          <button type='submit' className='bg-blue-700 text-white px-4 py-2 mt-8 rounded-md capitalize flex justify-center items-center min-w-48'>

            {!loading ?
              <span >
                {id ? 'save changes' : 'add new'}
              </span>
              :
              <Image src={`/gif/loader.gif`} width={25} height={25} alt='loading' />
            }
          </button>
        </form>
      </div>
    </div>
  )
}
