export default async function Page({params,}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    console.log("slug:",slug);
    
    return <div>My Post: {slug}</div>
}