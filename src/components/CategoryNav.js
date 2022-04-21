import React from "react";
import {
  GiNoodles,
  GiChopsticks,
  GiPizzaSlice,
  GiHamburger,
} from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="ui five item menu">
      <Link activestyle={{ color: "red" }} to={"/"} className="item">
        <GoHome /> Home
      </Link>
      <Link
        activestyle={{ color: "red" }}
        to={"cuisine/american"}
        className="item"
      >
        <GiHamburger /> American
      </Link>
      <Link
        activestyle={{ color: "red" }}
        to={"cuisine/italian"}
        className="item"
      >
        <GiPizzaSlice /> Italian
      </Link>
      <Link
        activestyle={{ color: "red" }}
        to={"cuisine/japanese"}
        className="item active"
      >
        <GiChopsticks /> Japanese
      </Link>
      <Link
        activestyle={{ color: "red" }}
        to={"cuisine/thai"}
        className="item active"
      >
        <GiNoodles /> Thai
      </Link>
    </div>
  );
};

export default Category;
