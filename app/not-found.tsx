"use client"

import { useRouter } from "next/navigation"


const notfound = () => {
    const router = useRouter();
    const handleGoHome = () => {
        router.push('/');
    }

    return (
        <div>
            <h1>This page in not Exist</h1>
            <button className='bg-sky-400 p-2 rounded-e-sm' onClick={handleGoHome}>Go to Home</button>
        </div>
    )
}

export default notfound