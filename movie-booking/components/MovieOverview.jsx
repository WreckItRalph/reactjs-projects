import React from 'react';
import { Button, InputGroup, Glyphicon, DropdownButton, MenuItem, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import {Rater} from './';
import {withRouter} from 'react-router-dom';

class MovieOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'Overview'
        }
        this.navigateToBooking = this.navigateToBooking.bind(this);
    }

    navigateToBooking(){
        this.props.onMovieSelect(this.props.movieDetails);
        
    }

    render() {
        return (
            
                <Row>
                    <Col sm={12}  >
                        <img src={this.props.movieDetails.imageSrc} style={{height:'300px'}}></img>
                    </Col>
                    <Col sm={12}  style={{marginTop:'10px'}}>
                        {this.props.movieDetails.name}
                    </Col>
                    <Col sm={12} style={{marginTop:'10px'}} >
                        {this.props.movieDetails.languages.join(',')}
                    </Col>
                    <Col sm={12}  style={{marginTop:'10px'}}>
                        {this.props.movieDetails.format.join(',')}
                    </Col>
                    <Col sm={12} style={{marginTop:'10px'}} >
                        <Rater value={this.props.movieDetails.rating} maxlength='6' /> 
                    </Col>
                    <Col sm={12} style={{marginTop:'10px'}} >
                        <Button type='button' bsClass='btn btn-primary' onClick={this.navigateToBooking}>Book</Button> 
                    </Col>
                </Row>
            
        );
    }
}

export default withRouter(MovieOverview);