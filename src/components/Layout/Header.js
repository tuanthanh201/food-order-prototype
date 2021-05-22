import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </>
  );
};

export default Header;
