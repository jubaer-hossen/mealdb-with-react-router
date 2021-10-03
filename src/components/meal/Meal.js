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
        <div>
            {meals.length === 0 && (
                <div class="d-flex justify-content-center pt-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <div className="meal mt-5 pt-5">
                {meals.map(meal => (
                    <ShowMeal key={meal.idCategory} meal={meal}></ShowMeal>
                ))}
            </div>
        </div>
    );
};

export default Meal;
