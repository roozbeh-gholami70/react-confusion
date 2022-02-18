import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        console.log("did mount is invoke!");
    }


    renderDish(dish) {
        if (dish != null){
            return(
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>
                                        {dish.name}
                                </CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if (this.props.selectedDish != null){
            const mycomment = this.props.selectedDish.comments.map((comm) => {
                return (
                    <div key={comm.id}>
                        <CardText>{comm.comment}</CardText>
                        <CardText>--{comm.author}, {comm.date}</CardText>
                        <br />
                    </div>
                );
            });
            return ( 
            <div className="row">
                <div className="col-12 col-md-5 m-1" >
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <Card className="col-12 col-md-5 m-1" >
                    <CardTitle>
                        Comments
                    </CardTitle>
                    {mycomment}
                </Card>
            </div>
            );
        }
        else {
            return(<div></div>)
        }
    }
}

export default DishDetail;