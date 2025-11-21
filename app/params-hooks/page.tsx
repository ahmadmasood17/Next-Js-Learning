"use client"

import { usePathname, useSearchParams ,useRouter} from "next/navigation"


const params = () => {
    const pathName = usePathname();
    const search = useSearchParams();
    const router = useRouter();
    console.log("pathName:",pathName); // current path
    console.log("search:",search.get("name")); // first value for name param
    console.log("search:",search.getAll("name"));// all values for name param 
    console.log("True or not:", search.has("name")); // true or false
    
    
  return (
    <div>params </div>
  )
}

export default params