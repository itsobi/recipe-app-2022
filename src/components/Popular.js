import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const check = localStorage.getItem("popular");
      // checking if there is something in localStorage
      if (check) {
        // if yes, add to setPopular state. Parse from string to array
        setPopular(JSON.parse(check));
      } else {
        // else make request to API
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        // add data to localStorage. stringify from array to string.
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ paddingTop: "50px" }}>
      <h2 className="ui centered header">
        <FcApproval size={30} />
        <div className="content">
          <h1>Popular Recipes</h1>
        </div>
      </h2>
      <div className="ui centered cards">
        {popular.map((recipe) => {
          return (
            <Link
              to={"/recipe/" + recipe.id}
              className="ui card"
              key={recipe.id}
            >
              <div className="image">
                <img src={recipe.image} alt="image" />
              </div>
              <div className="content">
                <p className="header">{recipe.title}</p>
                <div className="meta">
                  <span className="date">
                    {recipe.vegetarian ? "Vegetarian" : null}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      );
    </div>
  );
};

export default Popular;
