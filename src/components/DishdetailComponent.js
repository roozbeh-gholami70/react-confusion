import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


function RenderDish({dish}) {
    return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle tag="h6">
                                {dish.name}
                        </CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
    );
}

function RenderComment(props) {
        const mycomment = props.dish.map((comm) => {
            return (
                <div key={comm.id}>
                    <CardText>{comm.comment}</CardText>
                    <CardText>--{comm.author}, {new Date(comm.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</CardText>
                    <br />
                </div>
            );
        });
    return(
        <Card >
            <CardTitle>
                Comments
            </CardTitle>
            {mycomment}
        </Card>
    );
}
const DishDetail = (props) => {
        if (props.dish != null){
            return ( 
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1" >
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1" >
                            <RenderComment dish={props.comments} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(<div></div>)
        }
    }


export default DishDetail;