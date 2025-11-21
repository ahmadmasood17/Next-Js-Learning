import { Metadata } from "next"
import Link from "next/link"



export const metadata: Metadata = {
    title: "Metadata Example Page",
    description: "This is an example page to demonstrate metadata in Next.js",
}

const MetaData = () => {

    const exampleData = [{
        id: 1,
        title: "Example Title",
        description: "This is an example description for metadata.",
        keywords: ["example", "metadata", "nextjs", "js"],
    }, {
        id: 2,
        title: "Example Title",
        description: "This is an example description for metadata.",
        keywords: ["example", "metadata", "nextjs"],
    },
    ]

    return (
        <>
            <div>MetaData</div>
            <>
                {exampleData.map((item, index) => (
                    <div key={index} className="">
                        <h2 className="font-bold text-2xl">{item.title}</h2>
                        <p className="mb-2">{item.description}</p>
                        <p className="italic">Keywords: {item.keywords.join(", ")}</p>
                        <Link href={`/metadata-example/${item.id}`}>Click</Link>
                    </div>
                ))}
            </>
        </>
    )
}

export default MetaData