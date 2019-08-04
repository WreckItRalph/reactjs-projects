import React from 'react';
import { Breadcrumb, Table, Glyphicon, Row, Col, Grid, DropdownButton, MenuItem, Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import * as userActions from '../actions/userActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

var mapStateToProps = (state) => {
    return {
        cart: state.UserReducer.cart
    }
};

var mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => {
            dispatch(userActions.removeItem(item));
        },
        placeOrder: () => {
            dispatch(userActions.placeOrder());
        }
    }
};


class ViewCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placingOrder: false
        }
        this.removeItem = this.removeItem.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }

    removeItem(item) {
        this.props.removeItem(item);
    }

    placeOrder() {
        this.setState({ placingOrder: true });
        this.props.placeOrder();
    }


    render() {


        return (
            <React.Fragment>
                <Breadcrumb>
                    <li><Link to='/home'>Home</Link></li>
                    <Breadcrumb.Item active>View Cart</Breadcrumb.Item>
                </Breadcrumb>

                <Row style={{ marginBottom: '10px' }}>
                    <Col sm={12}>
                        {(this.props.cart.length == 0) ?
                            <h3 className='text-center'>
                                Add Items to Cart
                            </h3> :
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.cart.map(item => {
                                        return (
                                            <tr key={item.name + item.category}>
                                                <td>
                                                    <img src={item.imageSrc} />
                                                </td>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {item.category}
                                                </td>
                                                <td>
                                                    {item.quantity}
                                                </td>
                                                <td>
                                                    {item.totalPrice}
                                                </td>
                                                <td>
                                                    <Button bsStyle='link' onClick={() => this.removeItem(item)}>Remove</Button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                    }

                                </tbody>
                            </Table>
                        }

                    </Col>
                    <Col sm={2} smOffset={5} >

                        <Link to='/order'>
                            <Button bsStyle='success' className={this.props.cart.length == 0 && 'disabled'}>Place Order</Button>
                        </Link>

                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);