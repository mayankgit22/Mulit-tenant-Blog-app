"use client";
import Nav from "@/components/nav";
import { useState } from "react";
import { createBlog } from "@/app/action";
import { useOrganization } from "@clerk/nextjs";
// import { on } from "events";mport Image from "next/image";
import { useRef } from "react";

export default function OrginizationPage() {

const fileInputRef = useRef<HTMLInputElement>(null);

const resetFileInput = () => {
  if (fileInputRef.current) {
    fileInputRef.current.value = ""; // ✅ this clears it
  }
};

  const [blogContent, setBlogContent] = useState("");
  const [title, setTitle] = useState("");
  const [done,setDone]=useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const { organization } =   useOrganization(); 

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImgUrl(base64String);
    };
    reader.readAsDataURL(file); 
  }
  const handleCreate = async () => {
 
    if (!organization?.id) return alert("Please select an organization");

   try{
    const result = await createBlog({
      title: title.trim(),
      description: blogContent.trim(),
      orgId: organization.id,
      imgUrl: imgUrl,
      customDomain: "sometjing.jaydeepraj.site/s/"+organization?.slug,
    });

    if (result) {
      setDone(true);
      // alert("Blog created successfully");
      setTitle("");
      setBlogContent("");
      setImgUrl("");
    }
     else {
      alert("Error creating blog");
    }

   }
   catch(err){
    console.log(err)
   } 
  }


  return (
    <div className="w-screen relative">
      <Nav />
      {/* <Link href={`/s/${organization?.slug}`}>Go to My Blog</Link> */}

{organization?.slug && (
  <h3 className="text-center">
    your domain is{" "}
    <a
      className="text-blue-400"
      href={`https://sometjing.jaydeepraj.site/s/${organization.slug}`}
    >
      https://sometjing.jaydeepraj.site/s/{organization.slug}
    </a>
  </h3>
)}

      <form onSubmit={(e)=>{
        e.preventDefault();
        handleCreate();
        
      }}>
      <div className="w-full p-5 justify-center flex flex-col items-center">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[60%] h-12 bg-gray-500/70 rounded-md text-black font-semibold p-2 m-2"
        />
        <textarea
          placeholder="Blog Content"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          className="w-[60%] h-[40vh] bg-gray-500/70 rounded-md text-black font-semibold p-2"
        />
        <input accept="image/*"   ref={fileInputRef} className="bg-blue-500 text-md rounded-3xl p-2 m-1 cursor-pointer" type="file" onChange={handleImg} />
        <p>please upload img of size 0-2 mb</p>
        <button
          type="submit"
          // onClick={handleCreate}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 mb-2"
        >
          Create Blog
        </button>
      </div></form>
  {done && (
  <div className="fixed inset-0 bg-black/80 p-4 text-white rounded z-50 flex flex-col justify-center items-center">
    <button className="bg-red-500 p-2 rounded mb-4" onClick={() => {setDone(false)
    resetFileInput()
      
    }}>
      Close
    </button>
    <p className="text-xl font-semibold">✅ Blog created successfully!</p>
  </div>
)}


    </div>
  );
}
