import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/photos";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post)

  return (
    <div>
      {
        post.map((da)=>{

          return (
            <>            
            <p>{da.title}</p>
            <p><strong>{da.body}</strong></p>
            <img src={da.url}/>
            </>
          )
         
        })
      }
  
    </div>
  );
}