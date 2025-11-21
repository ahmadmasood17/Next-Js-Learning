

import Link from "next/link";
// import { useRouter } from "next/router"

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    // const route = useRouter();

    return (<><Link href={""}
    //  onClick={() => route.back()} 
     className='bg-sky-400 text-center p-2 rounded-xl '>Back</Link>
        <div>My Post: {slug}</div></>

    )
}