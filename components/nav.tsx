
"use client";
import {UserButton,OrganizationSwitcher} from "@clerk/nextjs"
import * as React from "react";
// import { useParams } from "next/navigation";
const Nav:React.FC=()=>{
  // const {slug} = useParams();
  // console.log("slug",slug);
  return(<>
  <nav className="flex justify-between p-5 border-2 border-gray-400/50 rounded-2xl m-2 ">
    <div className=" font-poppins text-xl font-bold"><span>Blog Application</span></div>
    <div className=" flex items-center justify-center text-2xl font-semibold gap-2">
  <OrganizationSwitcher afterSelectOrganizationUrl={(org) => `/org/${org.slug}`} />

        <UserButton/>
        </div></nav>
  </>)
}
export default Nav