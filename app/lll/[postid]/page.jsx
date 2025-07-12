import { Suspense } from "react";

export default async function posts({ params }) {
    const postid = params.postid;
    console.log(postid);
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`,
        {
            cache: "no-store",
            next: { revalidate:120 },
            
        }
    );
    const data = await response.json();
  
console.log(data);

    return (
    <div>
        <h1>the post</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </Suspense>

    </div>
    );

}