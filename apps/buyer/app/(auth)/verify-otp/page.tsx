'use client'

import { Toaster } from "react-hot-toast";
import Form from "./_components/form";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router=useRouter()

  //only allow to access this page if user comes directly from register page
  useLayoutEffect(()=>{
    const userId = sessionStorage.getItem("RegisteredUser");
    if(!userId) router.replace("/register")

    },[])


  return (
    <>
      <div className="h-screen flex flex-col md:flex-row justify-center md:justify-start lg:justify-start">
      <Toaster position="top-center" />
        <Form />
      </div>
    </>
  );
}
