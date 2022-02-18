import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class DishDetail extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    
    componentDidMount() {
        console.log("componentDidMount is invoke!");
    }
    
    renderDish(dish) {
            return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>
                                        {dish.name}
                                </CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
    }

    render() {
        console.log(this.props.dish);
        if (this.props.dish != null){
            const mycomment = this.props.dish.comments.map((comm) => {
                return (
                    <div key={comm.id}>
                        <CardText>{comm.comment}</CardText>
                        <CardText>--{comm.author}, {new Date(comm.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</CardText>
                        <br />
                    </div>
                );
            });
            return ( 
            <div className="row">
                <div className="col-12 col-md-5 m-1" >
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1" >
                    <Card >
                        <CardTitle>
                            Comments
                        </CardTitle>
                        {mycomment}
                    </Card>
                </div>
                
            </div>
            );
        }
        else {
            return(<div></div>)
        }
    }
}

export default DishDetail;