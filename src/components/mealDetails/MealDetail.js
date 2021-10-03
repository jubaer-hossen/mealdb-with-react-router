import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const MealDetail = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, [mealId]);
    // console.log(meal);
    const { strMeal, strMealThumb, strInstructions, strTags, strYoutube } =
        meal;
    return (
        <div className="text-center pt-5">
            <h1>Meal Details of: {mealId}</h1>
            {meal.length === 0 && (
                <div class="d-flex justify-content-center pt-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <div className="row mt-5 d-flex align-items-center justify-content-center">
                <div className="col-md-5">
                    <Card.Img
                        className="rounded-circle"
                        variant="top"
                        src={strMealThumb}
                    />
                    {/* <img src={strMealThumb} alt="" /> */}
                </div>
                <div className="col-md-6">
                    <Card.Body>
                        <Card.Title className="fw-bold fs-1">
                            {strMeal}
                        </Card.Title>
                        <Card.Text>{strInstructions}</Card.Text>
                        <p className="fw-bolder">{strTags} </p>
                        <p>YouTube: {strYoutube}</p>
                        {/* <Link to={strYoutube}>
                        <Button variant="primary">Go YouTube</Button>
                    </Link> */}
                    </Card.Body>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;
