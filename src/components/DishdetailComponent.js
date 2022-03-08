import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, 
        CardTitle, Breadcrumb, BreadcrumbItem, 
        Button, Modal, ModalHeader, Label, Col, Row, ModalBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import "bootstrap/dist/css/bootstrap.min.css";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating,
                            values.author, values.comment);
    }


    render(){
        return(
            <div>
                <Button outline className="col-7"  onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader  toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group  m-2'>
                                <Label htmlFor='rating' md={3}>Rating</Label>
                                <Col md={9} >
                                    <Control.select model='.rating' name='rating'
                                            id='rating'
                                            className='form-control'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group  m-2'>
                                <Label htmlFor='author' md={3}>Your Neme</Label>
                                <Col md={9}>
                                    <Control.text model=".author" id='author' name='author' 
                                        placeholder='Your Name' 
                                        className='form-control'
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors 
                                        className='text-danger'
                                        model='.author'
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group  m-2'>
                                <Label htmlFor='comment' md={3}>Comment</Label>
                                <Col md={9}>
                                    <Control.textarea model='.comment' id='comment' name='comment' 
                                        rows='12' className='form-control'/>
                                </Col>
                            </Row>
                            <Row className='form-group  m-2'>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color='primary'>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


function RenderDish({dish}) {
    return(
            <Card>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
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
            <CommentForm dishId={props.dishId} postComment={props.postComment} />
        </Card>
    );
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.dish != null){
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
                    <div className="col-12 col-md-6 " >
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-6 " >
                        <RenderComment dish={props.comments} 
                            postComment={props.postComment}
                            dishId={props.dish.id}/>
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