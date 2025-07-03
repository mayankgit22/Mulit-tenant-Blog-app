/* eslint-disable */

import db from '@/db';
import { tables } from '@/db/schema';
import{clerkClient}from '@clerk/nextjs/server'
import Image from 'next/image';
import{eq}from 'drizzle-orm'
type paramsType = {
    subdomain: string
}
export default async function SubdomainLayout({params}: {params: paramsType}){
const { subdomain } = await params;
const client= await clerkClient();
const org = await client.organizations.getOrganization({slug:subdomain});
// console.log(org);
if(!org){alert("please enter correst organization name or create new organization")}
const orgId1=(org).id;
 const blogs1= await db.select().from(tables).where(eq(tables.orgId,orgId1));

    return(<>
    <div className='flex flex-col p-2 justify-center w-full items-center'>   <h1 className=' mb-4  text-4xl text-center'> Blogs from {subdomain}</h1>{blogs1.map((blog)=>
       
<div key={blog.id} className='text-xl p-4 mb-4 border-1 rounded-3xl border-black w-[50%]'><h2 className=' font-bold capitalize text-blue-400 text-xl'>{blog.title}</h2>
<p className='text-sm font-semibold'>{blog.description}</p>

{blog.imgUrl && (
    <div className='w-full h-64 relative'>
        <Image
            src={blog.imgUrl}
            alt={blog.title}
            fill
            className='object-contain rounded-lg border-1 border-gray-100'
        />
    </div>
)}
</div>

    )}
    </div>
    </>
)
}
