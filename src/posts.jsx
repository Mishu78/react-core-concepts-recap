import { useEffect, useState } from "react"
export default function Posts(){
    const [posts,setPosts]=useState([])
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => setPosts(data))
   },[])
    return(
        <div className="">
            <h3>Posts: </h3>
        </div>
    )
}



/*create a state to store the data
  create use effect with no dependencies
*/

