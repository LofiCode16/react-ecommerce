import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { BASE_PATH } from '../../utils/constants';

import './Product.scss';

export default function Product(props){
    
    const { product, addProductCart } = props;    

    return(
        <Col md={3} className="product">
            <Card>
                <Card.Img variant="top" src={`${BASE_PATH}/${product.image}`} />
                <Card.Body>
                    <Card.Title>
                        {product.name}
                    </Card.Title>
                    <Card.Text>
                        {product.extraInfo}
                    </Card.Text>
                    <Card.Text>
                        USD ${product.price.toFixed(2)}
                    </Card.Text>
                    <Button onClick={()=>addProductCart(product.id, product.name)}>Agregar</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
