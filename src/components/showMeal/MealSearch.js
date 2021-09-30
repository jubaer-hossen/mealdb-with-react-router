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
                    className="p-2 w-50 my-4 text-white"
                    onChange={handleSearchField}
                    placeholder="Search Meal you want"
                    type="text"
                />
            </div>
            <div className="meal">
                {meals.map(meal => (
                    <MealSearchShow
                        key={meal.strMealId}
                        meal={meal}
                    ></MealSearchShow>
                ))}
            </div>
        </div>
    );
};

export default MealSearch;
