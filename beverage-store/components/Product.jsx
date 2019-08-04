import React from 'react';
import { Breadcrumb, Button, InputGroup, Glyphicon, DropdownButton, MenuItem, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class Product extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }


    }


    render() {
        return (
            <React.Fragment>

                <Row className='text-center' style={{ marginBottom: '15px' }} >

                    <Col sm={12}>
                        <Link to={`/product/${this.props.name}`} ><img src={this.props.imageSrc} style={{ height: '300px' }} /></Link>
                    </Col>
                    <Col sm={12} style={{ fontWeight: 'bold' }}>
                        {this.props.name}

                    </Col>
                </Row>
            </React.Fragment>

        );

    }
}

