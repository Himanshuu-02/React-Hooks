//In which we fetch the date from fake api in the function component with the help of hook react components[useState][useEffect].fetch with the help of axios
import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [post, setPost] = useState({});
  const[id,setId]=useState(1)
  const[idFromButtonClick, setIdFromButtonClick]=useState(1)
  const handleClick=()=>{
    setIdFromButtonClick(id)
  }
  useEffect(() => {
   axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[idFromButtonClick]);
  return (
    <div>
        <input type="text" value={id}onChange={(e)=>setId(e.target.value)} />
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
      {/* <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>

        ))} */}
      {/* </ul> */}
    </div>
  );
}
export default DataFetching;
