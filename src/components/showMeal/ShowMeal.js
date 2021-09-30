import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ShowMeal = props => {
    console.log(props.meal);
    const { strCategory, strCategoryDescription, strCategoryThumb } =
        props.meal;
    return (
        <div className="mb-4">
            <Card className="card h-100 shadow" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>
                        {strCategoryDescription.slice(0, 100)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowMeal;
