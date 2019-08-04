import React from 'react';
import { Button, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            data: {}
        };
        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        
    }

    handleUserLogin(event) {
        this.props.handleUserLogin({ username: this.refs.username.value, password: this.refs.password.value });

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
                                <Panel.Title componentClass="h3">Login</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <div>
                                    React Movies is an online application where you can book tickets for you favourite movie. Please login to the application to grab you movie ticket.
                                </div>
                                <Row style={{ marginTop: '10px' }}>
                                    <Form horizontal>
                                        <FormGroup>
                                            <Col componentClass={ControlLabel} sm={4}>
                                                Username:
                                            </Col>
                                            <Col sm={7}>
                                                <input className='form-control' type='text' value={this.state.data.username} placeholder='username' ref='username' onChange={this.handleChangeEvent} />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup>
                                            <Col componentClass={ControlLabel} sm={4}>
                                                Password:
                                            </Col>
                                            <Col sm={7}>
                                                <input className='form-control' type='password' value={this.state.data.password} ref='password' onChange={this.handleChangeEvent} />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup>
                                            <Col sm={2} smOffset={5}>
                                                <Button type="button" bsClass='btn btn-primary' onClick={this.handleUserLogin}>Login</Button>
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