import React from 'react';
import { Glyphicon, Row, Col, Grid, DropdownButton, MenuItem, Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import * as userActions from '../actions/userActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

var mapStateToProps = (state) => {
    return {
        cart: state.UserReducer.cart,
        settings: state.UserReducer.displaySettings,
        username: state.UserReducer.username
    }
};

var mapDispatchToProps = (dispatch) => {
    return {

        logout: () => {
            dispatch(userActions.onLogout())
        }
    }
};


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
       
    }

    render() {
        var headerStyle = {
            minHeight: '100px',
            backgroundColor: '#f8f8f8',
            paddingTop: '40px',
            paddingBottom: '40px'
        }
        var headerColumnStyle = {
            fontWeight: 'bold',
            textAlign: 'center'
        }

        return (


            <Row style={headerStyle}>
                <Col sm={2} style={headerColumnStyle}>
                    <span>Beverages Online</span>
                    {this.props.settings.showHomeButton && <Link to='/home' style={{ marginLeft: '10px' }}>Home</Link>}
                </Col>
                <Col sm={2} smOffset={5} className='text-right'>
                    {this.props.settings.showContactButton && <span>Contact Us</span>}
                </Col>
                <Col sm={2} >
                    {this.props.settings.showCartButton &&
                        <Link to='/viewCart'>
                            <Button bsClass='btn btn-success' className={this.props.cart.length == 0 && 'disabled'}>View Cart ({this.props.cart.length})
                        </Button>
                        </Link>}
                    {this.props.settings.showLogoutButton && <Button style={{marginLeft:'10px'}} onClick={this.props.logout}>Logout</Button>}
                </Col>
            </Row>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);