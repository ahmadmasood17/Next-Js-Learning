// By Default Server Component
// data fetched in server component
// accsess backend resource directly
// keep all the sensitive info in the server side
// not to be exposed on the client side

// not add any event listner or hooks in server component
// if you want to use event listner or hooks
// then you have to make that component as a client component

// to make a component as a client component
// add "use client" on the top of the file

"use client"

import Image from "next/image";
import { useState } from "react";


export default function Home() {
  
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count + 1)}>Plus</button>
    </div>
  );
}
