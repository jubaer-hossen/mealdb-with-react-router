import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetail = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, []);
    // console.log(meal);
    const { strMeal, strMealThumb, strInstructions, strTags, strYoutube } =
        meal;
    return (
        <div className="text-center pt-5">
            <h1>Meal Details of: {mealId}</h1>
            <Card
                className="w-50 my-5 h-100 shadow mx-auto"
                style={{ width: '18rem' }}
            >
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-1">{strMeal}</Card.Title>
                    <Card.Text>{strInstructions}</Card.Text>
                    <p className="fw-bolder">{strTags} </p>
                    <p>YouTube: {strYoutube}</p>
                    {/* <Link to={strYoutube}>
                        <Button variant="primary">Go YouTube</Button>
                    </Link> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealDetail;
