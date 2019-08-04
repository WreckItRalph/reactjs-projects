import React from 'react';
import { Glyphicon, Row, Col, Grid, DropdownButton, MenuItem, Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import * as userActions from '../actions/userActions';
import {connect} from 'react-redux';

var mapStateToProps = (state) => {
   return{}
};

var mapDispatchToProps = (dispatch) => {
    return {
       
        placeOrder : () => {
            dispatch(userActions.placeOrder());
        }
    }
};

class PaymentSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
        this.props.placeOrder();
    }

    render() {
       

        return (


            <Row style={{marginBottom:'10px '}}>
                <Col style={{color:'green',fontWeight:'bold',textAlign:'center'}}>
                    Your Order Has Been Placed Successfully !!!
                </Col>
            </Row>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSuccess);