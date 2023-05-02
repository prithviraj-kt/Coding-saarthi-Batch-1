import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function SinglePost() {
  const { id } = useParams();

  useEffect(() => {
    getSinglePost();
  }, []);

  const [singlePost, setSinglePost] = useState({});

  const getSinglePost = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setSinglePost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <center>
        <div class="card w-50 my-4">
          User ID: {singlePost.userId}
          <div class="card-body">
            <h5 class="card-title">
              {singlePost.id} - {singlePost.title}
            </h5>
            <p class="card-text">{singlePost.body}</p>
          </div>
        </div>
      </center>
    </div>
  );
}

export default SinglePost;
