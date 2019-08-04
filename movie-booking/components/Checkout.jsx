import React from 'react';
import { Button, InputGroup, Glyphicon, DropdownButton, MenuItem, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { MovieOverview } from './MovieOverview.jsx';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';


export class Checkout extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
        
    }


    render() {
        return (
                <Row >
                    <Col sm={12} >

                        <Panel bsStyle='primary'>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Checkout Details</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Row>
                                    <Col sm={12} >
                                    Total amount to be paid : Rs. {this.props.price}
                                    </Col>
                               
                                    <Col sm={12} >
                                    Thanks for booking movie tickets online, Please pay and collect your tickets at BOX OFFICE COUNTER! 
                                    </Col>
                                    
                                    <Col sm={12} >
                                    <Link to='/moviesList'>Book More Tickets</Link>
                                    </Col>
                                    
                                </Row>
                                
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>

        );

    }
}
