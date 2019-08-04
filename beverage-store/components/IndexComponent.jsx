import React from 'react';
import { Breadcrumb, Button, InputGroup, Glyphicon, DropdownButton, MenuItem, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Product } from './Product.jsx';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
var mapStateToProps = (state) => {
    return {
        beverages: state.ProductReducer.beverages
    }
};

var mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(onClick);
        }
    }
};
class IndexComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        return (
            <React.Fragment>
                <Breadcrumb>
                    <li><Link to='/home'>Home</Link></li>
                    <Breadcrumb.Item active>Products</Breadcrumb.Item>
                </Breadcrumb>
                <Row >
                    {this.props.beverages.map(beverage => {
                        return <Col key={beverage.name} sm={3} >
                            <Product name={beverage.name} imageSrc={beverage.imageSrc} />

                        </Col>
                    })
                    }

                </Row>
            </React.Fragment>

        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent);