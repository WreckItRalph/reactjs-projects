import React from 'react';
import { Button, InputGroup, Glyphicon, DropdownButton, MenuItem, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { MovieOverview } from './MovieOverview.jsx';
import $ from 'jquery';

export class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectTheatre = this.onSelectTheatre.bind(this);
        this.proceedToBooking =this.proceedToBooking.bind(this);
        console.log(props);
        this.state = {
            theatres: [],
            selectedTheatre: ''
        }
    }

    componentWillMount() {
        this.getTheatresDetails();
    }

    getTheatresDetails() {
        $.ajax({
            url: `http://localhost:7777/assets/${this.props.location}-Theatre.json`,
            type: 'GET',
            async: false,
            success: (theatres) => {
                if (theatres instanceof Array) {

                    this.setState({ theatres });
                } else {
                    this.setState({ theatres: [] });
                }


            },
            error: function (err) {
                data = err;
                console.err(data);
            }
        });
    }

    proceedToBooking(){
        let bookingDetails = {
            
            theatre: this.state.selectedTheatre,
            date: this.refs.date.value,
            show: this.refs.show.value,
            seats: this.refs.seats.value,
            price: this.refs.seats.value * this.state.theatres.find(x => x.name == this.state.selectedTheatre).movieTimings.find(elem => elem.name == this.props.movie.name).price
        };

        this.props.onBooking(bookingDetails);
    }

    onSelectTheatre(event) {
        console.log('selected', event.target.innerHTML)
        this.setState({ selectedTheatre: event.target.innerHTML });
    }

    render() {

        var theatreDetails = this.state.theatres.find(x => x.name == this.state.selectedTheatre);

        let dates = [];
        let showTimings = [];

        let movieTimings;

        if (theatreDetails) {
            movieTimings = theatreDetails.movieTimings.find(elem => elem.name == this.props.movie.name);
            
            showTimings = movieTimings.showTimings;
            dates = movieTimings.dates;
        }

        return (
                <Row >
                    <Col sm={4} smOffset={2} >

                        <Panel bsStyle='primary'>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Movies Details</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Row bsClass='text-left'>
                                    <Col sm={12} style={{ textAlign: 'center' }}>
                                        <img src={this.props.movie.imageSrc} style={{ height: '300px' }}></img>
                                    </Col>
                                    <Col sm={12} style={{ marginTop: '10px' }}>
                                        Movie Name: {this.props.movie.name}
                                    </Col>
                                    <Col sm={12} style={{ marginTop: '10px' }} >
                                        Language: {this.props.movie.languages.join(',')}
                                    </Col>
                                    <Col sm={12} style={{ marginTop: '10px' }}>
                                        Format: {this.props.movie.format.join(',')}
                                    </Col>
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col sm={4} >

                        <Panel bsStyle='primary'>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Booking Details</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                Select Your Theatre:
                                {this.state.theatres.map(theatre => {
                                    return (
                                        <Row key={theatre.name}>
                                            <Col sm={12} >
                                                <Button bsStyle="link" onClick={this.onSelectTheatre}>{theatre.name}</Button>

                                            </Col>
                                        </Row>)
                                }
                                )}

                                {this.state.selectedTheatre && <form>

                                    Theatre selected: {this.state.selectedTheatre}


                                    <FormGroup>
                                        <ControlLabel>Date</ControlLabel>
                                        <select className='form-control' ref='date'>
                                            {showTimings.map(show => {
                                                return (
                                                    <option key={show} value={show}>{show}</option>
                                                )
                                            })}
                                        </select>
                                    </FormGroup>

                                    <FormGroup>
                                        <ControlLabel>Date</ControlLabel>
                                        <select className='form-control' ref='show'>
                                            {dates.map(date => {
                                                return (
                                                    <option key={date} value={date}>{date}</option>
                                                )
                                            })}
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Number of Seats(2-10):</ControlLabel>
                                        <input className='form-control' type='number' max='10' min='2' ref='seats'/>

                                        
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Price per ticket:</ControlLabel>
                                        {movieTimings.price}

                                        
                                    </FormGroup>

                                    <Button type='button' bsClass='btn btn-primary' onClick={this.proceedToBooking}>Proceed</Button>

                                </form>}



                            </Panel.Body>
                        </Panel>
                    </Col >
                </Row >

        );

    }
}