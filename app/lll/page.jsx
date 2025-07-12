import Link from "next/link";

export default async function Home() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",
         {
          cache: "no-store",
          next: { revalidate: 60},
        }
    );
    const data = await response.json();
   console.log(data);
   const posts =data.map((id)=> {
       return (
          <Link key={id.id} style={{ textDecoration: "none",  width: "70%"}} href={`/lll/${id.id}`}>
           <div style={{ padding: "10px", width:"100%", borderRadius: "10px", border: "1px solid #ccc", background: "#f0f0f0", marginTop: "20px"  ,color:"black",}}>
               <h1>{id.title}</h1>
               <p>{id.body}</p>
           </div>
           </Link>
       );
   });
    return (
        <div className="name">
            <h1 style={{ color: "white",}}>all posts</h1>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" ,alignItems: "center"}}>{posts}</div> 
        
        </div>
    );
}