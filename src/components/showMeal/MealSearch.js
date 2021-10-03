import React, { useEffect, useState } from 'react';
import MealSearchShow from './MealSearchShow';

const MealSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    const handleSearchField = e => {
        const searchValue = e.target.value;
        setSearchText(searchValue);
    };

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    return (
        <div className="text-center">
            <div className="bg-primary pt-2">
                <input
                    className="p-2 w-50 my-4 text-dark"
                    onChange={handleSearchField}
                    placeholder="Search Meal you want"
                    type="text"
                />
            </div>
            {meals.length === 0 && (
                <div class="d-flex justify-content-center pt-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <div className="meal">
                {meals?.map(meal => (
                    <MealSearchShow
                        key={meal.idMeal}
                        meal={meal}
                    ></MealSearchShow>
                ))}
            </div>
        </div>
    );
};

export default MealSearch;
