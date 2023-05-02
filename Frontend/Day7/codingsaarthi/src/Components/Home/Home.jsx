import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
function Home() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* {id} */}
      <Card name="Title 1" />
      <Card name="Title 2" />
      <Card name="Title 3" />
      <Card name="Title 4" />
      {/* {data.map((i) => {
        return <div>{i.title}</div>;
      })} */}
    </div>
  );
}

export default Home;
