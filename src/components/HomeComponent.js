import React from "react";
import {Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import "../style.css";


function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                {item.designation ? <CardSubtitle tag="h6">{item.designation}</CardSubtitle>:null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
    
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="home-hover-div hover-div col-12 col-md m-1" >
                    <RenderCard item={props.dish} />
                </div>
                <div className="home-hover-div hover-div col-12 col-md m-1" >
                    <RenderCard item={props.promotion} />
                </div>
                <div className="home-hover-div hover-div col-12 col-md m-1" >
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;