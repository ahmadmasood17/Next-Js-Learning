

import { Metadata } from "next";


const meta: Record<string, { title: string; description?: string }> = {
    "1": {
        title: "One",
        description: "This is an example description for metadata.",
    },
   "2": {
        title: "Two",
        description: "This is second description",
    },
};

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const { slug } = await params;
    const data = meta[slug as keyof typeof meta];

    console.log("Generating metadata for data:",  data);
    console.log("Generating metadata for slug:",  slug,);
    

    return {
        title: data?.title || "Default Title",
        description: data?.description || "Default Description",
    };
};

export default async function Pages({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const data = meta[slug as keyof typeof meta];

    return (
        <div>
            <h1>Hello {data?.title}</h1>
            <p>{data?.description}</p>
        </div>
    );
}
