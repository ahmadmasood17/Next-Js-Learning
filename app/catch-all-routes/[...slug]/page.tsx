import Link from "next/link";

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (<><Link href={""}
        className='bg-sky-400 text-center p-2 rounded-xl '>Back</Link>
        <div>My Post: {slug}</div></>

    )
}