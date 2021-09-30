import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MealSearchShow = props => {
    // console.log(props.meal);
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    return (
        <div className="my-4">
            <Card className="card h-100 shadow" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>{strInstructions?.slice(0, 100)}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealSearchShow;
