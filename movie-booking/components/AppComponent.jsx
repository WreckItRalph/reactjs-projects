import React from 'react';
import { BrowserRouter, Router, Route, withRouter } from 'react-router-dom';
import { Checkout, MoviesList, Header, Footer, Login, MovieDetails, BookingSummary } from './';
import $ from 'jquery';
import { Grid } from 'react-bootstrap';



class AppComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.updateUserData = this.updateUserData.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.updateSelectedMovie = this.updateSelectedMovie.bind(this);
        this.onBooking = this.onBooking.bind(this);
        this.state = {
            currentUser: {},
            location: 'Bengaluru',
            userData: [],
            movie: {},
            bookingDetails: {}
        }

    }

    handleUserLogin(data) {
        let user = this.state.userData.find(elem => elem.username == data.username && elem.password == data.password);
        if (user) {
            this.updateCurrentUser(user);
            this.props.history.push('/moviesList');
        } else {
            alert('Invalid usernname or password');
        }
    }

    updateCurrentUser(user) {
        this.setState({ currentUser: user });
    }

    updateLocation(location) {
        this.setState({ location });
    }

    componentWillMount() {
        $.ajax({
            url: 'http://localhost:7777/assets/Registrations.json',
            type: 'GET',
            async: false,
            success: (users) => {
                this.updateUserData(users);

            },
            error: function (err) {
                data = err;
                console.err(data);
            }
        });
    }

    logoutUser() {
        this.setState( {
            currentUser: {},
            location: 'Bengaluru',
            movie: {},
            bookingDetails: {}
        });

        
        this.props.history.push('/')
    }

    updateUserData(userData) {
        this.setState({ userData });
    }

    updateSelectedMovie(movie) {
        this.setState({ movie });
        this.props.history.push(`/movie/${movie.name}`)
    }

    onBooking(bookingDetails) {
        this.setState({bookingDetails});
        this.props.history.push('/summary');
    }

    render() {

        return (
            <div className='container-fluid'>
                <Header userData={this.state.currentUser} logoutUser={this.logoutUser} udpateLocation={this.updateLocation} />
                <Grid style={{ marginTop: '10px' }}>
                    <Route path='/' exact render={() => <Login handleUserLogin={this.handleUserLogin} />} />
                    <Route path='/movie/:title' render={() => <MovieDetails location={this.state.location} movie={this.state.movie} onBooking={this.onBooking} />} />
                    <Route path='/moviesList' render={() => <MoviesList onMovieSelect={this.updateSelectedMovie} />} />
                    <Route path='/summary' render={() => <BookingSummary location={this.state.location} movie={this.state.movie} bookingDetails={this.state.bookingDetails}  />} />
                    <Route path='/checkout' render={() => <Checkout price={this.state.bookingDetails.price}  />} />
                </Grid>
                <Footer />
            </div>


        );
    }
}

AppComponent.defaultProps = {
    userData: {}
}

export default withRouter(AppComponent);