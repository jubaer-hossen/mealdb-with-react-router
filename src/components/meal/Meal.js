// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
import ShowMeal from '../showMeal/ShowMeal';
import './Meal.css';

const Meal = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.categories));
    }, []);
    return (
        <div className="meal mt-5">
            {meals.map(meal => (
                <ShowMeal key={meal.idCategory} meal={meal}></ShowMeal>
            ))}
        </div>
    );
};

export default Meal;
