import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowMeal = props => {
    console.log(props.meal);
    const {
        strCategory,
        strCategoryDescription,
        strCategoryThumb,
        idCategory,
    } = props.meal;
    const url = `/mealDetail/${idCategory}`;
    return (
        <div className="mb-4 text-center">
            <Card className="card h-100 shadow" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>
                        {strCategoryDescription.slice(0, 100)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <p>{idCategory} </p>
                <Link to={url}>Details</Link>
            </Card>
        </div>
    );
};

export default ShowMeal;
