import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button,CardSubtitle} from 'reactstrap';



function List( {data} ) {

    const abc = (o) => {
        console.log(o.id);
    }
  
    return (
        data.map((o, i) => {
            return (
                <Card
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            {o.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 "
                            tag="h6"
                        >
                           
                        </CardSubtitle>
                        
                        <CardText>
                            {o.quantity}
                        </CardText>
                        <CardText>
                            {o.expiry}
                        </CardText>
                        <CardText>
                            {o.price}
                        </CardText>
                        <Button onClick={() => abc(o)}>
                            Button
                        </Button>
                    </CardBody>
                </Card>
    
            );
        })
    );
}

export default List;