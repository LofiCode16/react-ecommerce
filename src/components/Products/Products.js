import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Products(props){
    
    const { 
        products: { result, loading, error }
     } = props;
    
    return(
        <Container>
            <Row>
                { loading || !result ? (
                    'Cargando...' 
                ) : (
                    result.map((product, index) => (
                        <div>
                            <p>{product.name}</p>
                        </div>                        
                    ))
                )};
            </Row>
        </Container>
    ); 
}
