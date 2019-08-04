import React from 'react';
import {Row, Col} from 'react-bootstrap';
export class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         
        }
    }

    render(){
        var footerStyle = {
            minHeight: '100px',
            backgroundColor: '#e5e5e5',
            paddingTop:'40px',
            paddingBottom:'40px'
        }
        var footerColumnStyle = {
            
            textAlign:'center'
        }

        return (
            
                
                <Row style={footerStyle}>
                    <Col sm={12} style={footerColumnStyle}>
                        <span>Copyright @ 2019</span>
                    </Col>

                   

                </Row>
            );
    }
}