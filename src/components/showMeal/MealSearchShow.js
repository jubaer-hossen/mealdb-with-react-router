import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MealSearchShow = props => {
    // console.log(props.meal);
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
    const url = `/mealDetail/${idMeal}`;
    return (
        <div className="my-4">
            <Card className="card h-100 shadow" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>{strInstructions?.slice(0, 100)}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <p>{idMeal}</p>
                <Link to={url}>Detail</Link>
            </Card>
        </div>
    );
};

export default MealSearchShow;
