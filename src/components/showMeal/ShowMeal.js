import React from 'react';
import { Card } from 'react-bootstrap';

const ShowMeal = props => {
    // console.log(props.meal);
    // const history = useHistory();
    const {
        strCategory,
        strCategoryDescription,
        strCategoryThumb,
        idCategory,
    } = props.meal;

    return (
        <div className="mb-4 text-center">
            <Card className="card h-100 shadow" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>
                        {strCategoryDescription.slice(0, 100)}
                    </Card.Text>
                </Card.Body>
                <p>Meal Id: {idCategory} </p>
            </Card>
        </div>
    );
};

export default ShowMeal;
