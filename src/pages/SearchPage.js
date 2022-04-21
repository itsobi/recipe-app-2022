import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BiFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
    const fetchData = async (name) => {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      setSearchedRecipes(data.results);
    };
    fetchData(params.term);
  }, [params.term]);

  return (
    <div style={{ paddingTop: "50px" }}>
      <h2 className="ui centered header">
        <BiFoodMenu size={30} />
        <div className="content">
          <h1>Recipes</h1>
        </div>
      </h2>
      <div className="ui centered cards">
        {searchedRecipes.map((recipe) => {
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

export default SearchPage;
