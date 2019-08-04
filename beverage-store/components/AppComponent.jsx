import React from 'react';
import { Grid } from 'react-bootstrap';
import { Footer } from './';
import { Route,withRouter } from 'react-router-dom';
import LoginComponent from './LoginComponent.jsx';
import IndexComponent from './IndexComponent.jsx';
import Header from './Header.jsx';
import ProductDetails from './ProductDetails.jsx';
import ViewCart from './ViewCart.jsx';
import PaymentSuccess from './PaymentSuccess.jsx';
import { connect } from 'react-redux';



var mapStateToProps = (state) => {
    return {
        username: state.UserReducer.username
    }
};

var mapDispatchToProps = (dispatch) => {
    return {


    }
};


class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props){
        if (!props.username && this.props.location.pathname != '/'){
            this.props.history.push('/');
        }
    }


    render() {

        return (
            <div className='container-fluid'>
                <Header />
                <Grid style={{ marginTop: '10px' }}>
                    <Route path='/' component={LoginComponent} exact />
                    <Route path='/home' component={IndexComponent} />
                    <Route path='/product/:productname' component={ProductDetails} />
                    <Route path='/viewCart' exact component={ViewCart} />
                    <Route path='/order' component={PaymentSuccess} />
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));

