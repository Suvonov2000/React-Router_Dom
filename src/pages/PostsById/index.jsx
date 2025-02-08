import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostsById = () => {
  const [data, setData] = useState({});
  const { idPost } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>POST ID: {idPost}</h1>
      <h2>{data.title}</h2>
      <h3> {data.body}</h3>
    </div>
  );
};

export default PostsById;
