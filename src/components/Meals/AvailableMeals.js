import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-prototype-e5045-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Somethin went wrong!");
      }

      const responseData = await response.json();
      const meals = [];
      for (const key in responseData) {
        const meal = {
          id: key,
          ...responseData[key],
        };
        meals.push(meal);
      }
      setIsLoading(false);
      setLoadedMeals(meals);
    };
    // fetchMeals is an async function, so it returns a promise
    //  therefore we cannot use try/catch to wrap around it, unless
    //  we use something like await fetchMeals.
    //  but that requires useEffect to be async, so we can get around
    //  that by writing a new async function for handling error
    fetchMeals().catch((e) => {
      setIsLoading(false);
      setError(e.message);
    });
  }, []);

  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = loadedMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading...</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
