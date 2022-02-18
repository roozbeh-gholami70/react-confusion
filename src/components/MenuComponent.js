import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css"




function RenderMenuItem(props){
    return(
        <Card onClick={()=>props.onClick(props.dish.id)} body
        color="secondary"
        outline >
            <div className="hover-div_inner">
                <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                    <CardImgOverlay>
                    </CardImgOverlay>
                <CardTitle tag="h5" className="m-2">
                    {props.dish.name}
                </CardTitle>
            </div>
        </Card>
    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="hover-div col-12 col-md-5 m-1">
               <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row" >
                {menu}
            </div>

        </div>
    );
}



export default Menu;