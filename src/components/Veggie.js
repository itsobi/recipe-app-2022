import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcApprove } from "react-icons/fc";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const check = localStorage.getItem("veggie");
      // checking if there is something in localStorage
      if (check) {
        // if yes, add to setPopular state. Parse from string to array
        setVeggie(JSON.parse(check));
      } else {
        // else make request to API
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5&tags=vegetarian`
        );
        // add data to localStorage. stringify from array to string.
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ paddingTop: "50px" }}>
      <h2 className="ui centered header">
        <FcApprove size={30} />
        <div className="content">
          <h1>Vegetarian Recipes</h1>
        </div>
      </h2>
      <div className="ui centered cards">
        {veggie.map((recipe) => {
          return (
            <Link
              to={"/recipe/" + recipe.id}
              className="ui green card"
              key={recipe.id}
            >
              <div className="image">
                <img src={recipe.image} alt="" />
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

export default Veggie;
