import React from 'react';
import { Button, InputGroup, Glyphicon, DropdownButton, MenuItem, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { MovieOverview } from './MovieOverview.jsx';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';


export class BookingSummary extends React.Component {


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
                                <Panel.Title componentClass="h3">Booking Summary</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Row>
                                    <Col sm={12} >
                                        You have selected the following details:
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col sm={3} style={{ fontWeight: 'bold' }}>
                                        Theatre Name:
                                    </Col>
                                    <Col sm={9} >
                                        {this.props.bookingDetails.theatre}
                                    </Col>

                                    <Col sm={3} style={{ fontWeight: 'bold' }}>
                                        Location:
                                    </Col>
                                    <Col sm={9} >
                                        {this.props.location}
                                    </Col>

                                    <Col sm={3} style={{ fontWeight: 'bold' }}>
                                        Seats Booked:
                                    </Col>
                                    <Col sm={9} >
                                        {this.props.bookingDetails.seats}
                                    </Col>

                                    <Col sm={3} style={{ fontWeight: 'bold' }}>
                                        Movie Name:

                                    </Col>
                                    <Col sm={9} >
                                        {this.props.movie.name}
                                    </Col>


                                    <Col sm={3} style={{ fontWeight: 'bold' }}>
                                        Price :
                                    </Col>
                                    <Col sm={9} >
                                        {this.props.bookingDetails.price}
                                    </Col>


                                    <Col sm={3} style={{ fontWeight: 'bold' }}>
                                        Show Date:
                                    </Col>
                                    <Col sm={9} >
                                        {this.props.bookingDetails.date}
                                    </Col>

                                    <Col sm={3} style={{ fontWeight: 'bold' }}>
                                        Show Timing:
                                    </Col>
                                    <Col sm={9} >
                                        {this.props.bookingDetails.show}
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>


                                    <Col sm={2} smOffset={4} >
                                        <Link to={`/movie/${this.props.movie.name}`} className='btn btn-primary'>Modify Booking</Link>
                                    </Col>
                                    <Col sm={2} style={{ marginLeft: '5px' }}>
                                        <Link to='/checkout' className='btn btn-primary'>Confirm Booking</Link>
                                    </Col>
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>

        );

    }
}
