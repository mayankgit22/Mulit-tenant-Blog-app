"use server"
import { createBlogType ,tables} from "@/db/schema";
import  db  from "@/db/index";
 async function createBlog(payload:createBlogType) {
   const result= await db.insert(tables).values(payload);
   return JSON.parse(JSON.stringify(result));

}
export { createBlog };