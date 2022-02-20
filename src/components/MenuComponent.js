import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";




function RenderMenuItem(props){
    return(
        
            <Link className="hover-div col-12 col-md-5 m-1" style={{ textDecoration: 'none' }} to= {`/menu/${props.dish.id}`}>
                    <img width="100%" src={props.dish.image} alt={props.dish.name} />
                <p className="image-title m-3">
                    {props.dish.name}
                </p>
            </Link>
        
    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <RenderMenuItem key={dish.id} dish={dish} />
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}



export default Menu;