import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetail = () => {
  const [info, setInfo] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setInfo(data);
      console.log(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <div style={{ marginTop: "50px" }} className="ui grid">
      <div className="ui row">
        <div className="eight wide column">
          <h1>{info.title}</h1>
          <img style={{ borderRadius: "5px" }} src={info.image} alt="" />
        </div>
        <div className="eight wide column">
          <h4 dangerouslySetInnerHTML={{ __html: info.instructions }}></h4>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
