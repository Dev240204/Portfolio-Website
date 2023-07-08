'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

const Dashboard = () => {

  // *** using useEffect***

  // const [data,setData] = useState([])
  // const [err,setErr] = useState(false)
  // const [isloading,setIsloading] = useState(false)
  
  // useEffect(()=>{
  //   async function getdata(){
  //     setIsloading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  //       // next : {revalidate:10},  // it will re validate data after every 10s
  //       cache : "no-store"   // it will dynamicaly changes data everytime
  //     })
  //     if(!res.ok){                                               
  //       setErr(true)
  //     }
  //     const data = await res.json()
  //     setData(data)
  //     setIsloading(false)
  //   }
  //   getdata()
  // },[])
  
  // *** using SWR 
  const session = useSession();

  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={350} height={200}/>
                  </div>
                  <div className={styles.space}>
                    <Link href={`/blog/${post._id}`} className={styles.postTitle}>{post.title}</Link>
                    <button
                      className={styles.delete}
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;