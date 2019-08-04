import React from 'react';
import { Button, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';

var mapStateToProps = (state) => {

    return {
        username: state.UserReducer.username
    }
};

var mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (data) => {
            dispatch(userActions.onLogin(data));
        }
    }
}

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errors: {
                username: null,
                password: null
            }
        };
        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.updateValidity = this.updateValidity.bind(this);
    }

    updateValidity() {
        var errors = {
            username: null,
            password: null
        };
        var flag = false;

        if (this.refs.username.value == '') {
            flag = true;
            errors['username'] = 'error'
        }
        if (this.refs.password.value == '') {
            flag = true;
            errors['password'] = 'error'
        }


        this.setState({ errors });
        if (!flag) {
            this.handleUserLogin();
        }

    }

    handleUserLogin() {
        var data = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }

        this.props.onLogin(data);

    }

    componentWillReceiveProps(props){
        if (props.username){
           
            this.props.history.push('/home')
        }
    }

    handleChangeEvent(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.state.data[field] = value;
        return this.setState({ data: this.state.data });
    }


    render() {

        return (

            <Row >
                <Col sm={6} smOffset={3} >

                    <Panel bsStyle='primary'>
                        <Panel.Heading>
                            <Panel.Title componentClass="h3" className='text-center' style={{ fontWeight: 'bold' }}>Login Form</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <Row style={{ marginTop: '10px' }}>
                                <Form horizontal>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} sm={4}>
                                            Username:
                                            </Col>
                                        <Col sm={7}>
                                            <input className='form-control' type='text' value={this.state.data.username} placeholder='username' ref='username' onChange={this.handleChangeEvent} />
                                            {this.state.errors.username && <div style={{color:'red'}}>
                                                Enter username
                                            </div>}
                                        </Col>

                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} sm={4}>
                                            Password:
                                            </Col>
                                        <Col sm={7}>
                                            <input className='form-control' placeholder='password' type='password' value={this.state.data.password} ref='password' onChange={this.handleChangeEvent} />
                                            {this.state.errors.password && <div style={{color:'red'}}>
                                                Enter password
                                            </div>}
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm={2} smOffset={5}>
                                            <Button type="button" bsClass='btn btn-primary' onClick={this.updateValidity}>Sign In</Button>
                                        </Col>
                                    </FormGroup>

                                </Form>
                            </Row>
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>


        );

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);