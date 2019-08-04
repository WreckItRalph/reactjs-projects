import React from 'react';
import { Glyphicon, Row, Col, Grid, DropdownButton, MenuItem, Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';


export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var headerStyle = {
            minHeight: '100px',
            backgroundColor: '#f8f8f8',
            paddingTop:'40px',
            paddingBottom:'40px'
        }
        var headerColumnStyle = {
            'color':'#ff1493',
           
            textAlign:'center'
        }

        return (
            
                
                <Row style={headerStyle}>
                    <Col sm={2} style={headerColumnStyle}>
                        <span>React Movies</span>
                    </Col>

                    {this.props.userData.username &&
                        <React.Fragment>
                            <Col sm={2} smOffset={4}>
                                Welcome {this.props.userData.username}
                            </Col>
                            <Col sm={1}>
                                <Button bsClass='btn btn-primary' onClick={this.props.logoutUser}>
                                    Logout
                                </Button>
                            </Col>
                            <Col sm={2}>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon>
                                            <Glyphicon glyph="pushpin" />
                                        </InputGroup.Addon>
                                        <select className='form-control' ref='location'>
                                            <option value='Bengaluru'>Bengaluru</option>
                                            <option value='Chennai'>Chennai</option>
                                            <option value='Chandigarh'>Chandigarh</option>
                                        </select>
                                    </InputGroup>
                                </FormGroup>

                            </Col>
                        </React.Fragment>
                    }

                </Row>
            );
    }
}