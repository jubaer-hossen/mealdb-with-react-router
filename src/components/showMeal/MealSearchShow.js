import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const MealSearchShow = props => {
    // console.log(props.meal);
    const history = useHistory();
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
    const url = `/mealDetail/${idMeal}`;
    const handleClick = () => {
        history.push(url);
    };
    return (
        <div className="my-4">
            <Card className="card h-100 shadow" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>{strInstructions?.slice(0, 100)}</Card.Text>
                    <p>Meal id: {idMeal}</p>
                    <Button onClick={handleClick} variant="primary">
                        Click For Details
                    </Button>
                </Card.Body>
                {/* <Link to={url}>Detail</Link> */}
            </Card>
        </div>
    );
};

export default MealSearchShow;
