import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>This is Posts Page</h1>

      {data.map((value) => (
        <div>
          <Link to={`/posts/${value.id}`}>{value.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
