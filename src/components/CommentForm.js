import React, {Component} from 'react';
import { Button, Modal, ModalHeader, Label, Col, Row, ModalBody} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';


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
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
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

export default CommentForm;