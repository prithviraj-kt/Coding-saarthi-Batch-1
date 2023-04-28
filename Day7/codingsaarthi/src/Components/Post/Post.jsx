import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
function Post() {
  useEffect(() => {
    getPost();
  }, []);

  const location = useLocation()

  const [data, setData] = useState([]);

  const getPost = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const goToSinglePost = (ID) => {
    location(`./post/${ID}`)
  };

  

  return (
    <div className="container">
      <center>
        <h1>Post page</h1>
      </center>
      {data.map((i) => {
        return (
          <div>
            <center>
              <div className="row w-50">
                <div className="  m-2">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        {i.id} - {i.title}
                      </h5>
                      <button
                        onClick={() => goToSinglePost(i.id)}
                        class="btn btn-primary"
                      >
                        Go to id {i.id}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
