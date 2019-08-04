import React from 'react';
import { Breadcrumb, Glyphicon, Row, Col, Grid, DropdownButton, MenuItem, Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import * as userActions from '../actions/userActions';
import { connect } from 'react-redux';
import { Product } from './Product.jsx';
import { Link } from 'react-router-dom';

var mapStateToProps = (state) => {
    return {
        beverages: state.ProductReducer.beverages
    }
};

var mapDispatchToProps = (dispatch) => {
    return {

        addToCart: (data) => {
            dispatch(userActions.addToCart(data));
        }
    }
};


class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            data: {
                price: 0,
                quantity: 1
            }
        };
        this.addToCart = this.addToCart.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.state.data[field] = value;
        return this.setState({ data: this.state.data });
    }

    componentWillMount() {
        var beverage = this.props.beverages.find(elem => elem.name == this.props.match.params.productname);
        this.state.data.price = beverage.categories[0].price

        this.setState(this.state);
    }

    updatePrice() {
        var price = 0;
        if (this.refs.category && this.refs.category.value) {
            var beverage = this.props.beverages.find(elem => elem.name == this.props.match.params.productname);
            price = beverage.categories.find(category => category.quantity == this.refs.category.value).price;
        }
        this.state.data.price = price;
        this.setState(this.state);
    }


    addToCart() {
        var beverage = this.props.beverages.find(elem => elem.name == this.props.match.params.productname);
        var data = {
            name: beverage.name,
            category: this.refs.category.value,
            quantity: this.refs.quantity.value,
            imageSrc: beverage.imageSrc,
            totalPrice: this.state.data.price * +this.refs.quantity.value


        };
        this.props.addToCart(data);
    }


    render() {
        var beverage = this.props.beverages.find(elem => elem.name == this.props.match.params.productname);



        return (
            <React.Fragment>
                <Breadcrumb>
                <li><Link to='/home'>Home</Link></li>
                    <Breadcrumb.Item active>Products</Breadcrumb.Item>
                </Breadcrumb>
                <Row >
                    <Col sm={6}>

                        <img src={beverage.imageSrc} style={{ height: '300px' }} />

                    </Col>
                    <Col sm={6}>
                        <Row style={{ marginTop: '10px' }}>
                            <Col sm={12} style={{ fontWeight: 'bold' }}>
                                {beverage.name}
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col sm={12}>
                                {beverage.description}
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>

                            <Col sm={12}>
                                Price: ${this.state.data.price || beverage.categories[0].price}
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col sm={12}>Category:</Col>
                            <Col sm={12}>
                                <select ref='category' onChange={this.updatePrice}>
                                    {beverage.categories.map(category => {
                                        return (
                                            <option key={category.quantity} value={category.quantity}>{category.quantity}</option>
                                        );
                                    })}

                                    }
                            </select>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col sm={12}>Quantity:</Col>
                            <Col sm={12}>
                                <input type='number' name='quantity' onChange={this.handleEvent} value={this.state.data.quantity} ref='quantity' min='1' max='10' />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>

                            <Col sm={12}>
                                <Button bsClass='btn btn-success' onClick={this.addToCart} >Add to Cart</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);