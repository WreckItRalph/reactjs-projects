import React from 'react';
import { Button, InputGroup, Glyphicon, DropdownButton, MenuItem, Panel, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import $ from 'jquery';
import MovieOverview from './MovieOverview.jsx';

export class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'movieslist',
            movies: [],
            filterText:''

        }
        this.getMoviesList = this.getMoviesList.bind(this);
        this.onMovieSelect = this.onMovieSelect.bind(this);
        this.onSort = this.onSort.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentWillMount() {
        this.getMoviesList();
    }

    
    getMoviesList() {
        $.ajax({
            url: 'http://localhost:7777/assets/Movies.json',
            type: 'GET',
            async: false,
            success: (movies) => {
                if (movies instanceof Array) {
                    let languages = [];
                    movies.forEach(movie => {
                        movie.languages.forEach(language => {
                            if (languages.indexOf(language) == -1){
                                languages.push(language);
                            }
                        });
                        movie.isVisible = true;
                    });
                    
                    this.setState({ movies,languages });
                } else {
                    this.setState({ movies: [] });
                }


            },
            error: function (err) {
                data = err;
                console.err(data);
            }
        });
    }

    onMovieSelect(movieDetails) {
        this.props.onMovieSelect(movieDetails);

    }

    onFilterChange(){
        let filterText = this.refs.filterText.value;
        let language = this.refs.languageFilter.value;
        let movies = this.state.movies;
        movies.forEach(movie => {
            movie.isVisible = true;
            if( language != "ALL" && movie.languages.indexOf(language) == -1){
                movie.isVisible = false;
            }
            if (movie.isVisible){
                movie.isVisible =  movie.name.toLowerCase().indexOf(filterText.trim()) > -1;
            }
            
            return movie;
        });
        this.setState({
            movies,
            filterText
        });
        
       
    }
    onSort(){
        let criteria = this.refs.sortCriteria.value;
        let sortFn;
        console.log('movies',this.state.movies);
        switch(criteria){
            case "popularity" : 
                sortFn = (a,b)=>{
                    return a.rating < b.rating ? 1 : -1;
                }
                break;
            case "alphabeticalAZ": 
                sortFn = (a,b) => {
                    return a.name.toLowerCase() > b.name.toLowerCase()? 1 : -1;
                }
                break;
            case "alphabeticalZA" :
                sortFn = (a,b) => {
                    return a.name.toLowerCase() < b.name.toLowerCase()? 1 : -1;
                }
        }
        console.log('movies',...this.state.movies.sort(sortFn));

        this.setState({movies:  [...this.state.movies.sort(sortFn)]});
    }

    
    render() {
        return (
                <Row >
                    <Col sm={12} >

                        <Panel bsStyle='primary'>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Movies Now in Theater</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Row>
                                    <Form inline>
                                        <Col sm={3}>
                                            <FormGroup>
                                                <ControlLabel>Sort By  </ControlLabel>


                                                <select className='form-control' ref='sortCriteria' onChange={this.onSort}>
                                                    <option value='popularity'>Popularity</option>
                                                    <option value='alphabeticalAZ'>Alphabetical A-Z</option>
                                                    <option value='alphabeticalZA'>Alphabetical Z-A</option>
                                                </select>

                                            </FormGroup>
                                        </Col>
                                        <Col sm={3}>
                                            <FormGroup>
                                                <ControlLabel> Language </ControlLabel>
                                                <select className='form-control' ref='languageFilter' onChange={this.onFilterChange}>
                                                    <option value='ALL'>ALL</option>
                                                    {this.state.languages.map(language => {
                                                        return (
                                                            <option key={language} value={language}>{language}</option>
                                                        );
                                                    })}
                                                    
                                                </select>
                                            </FormGroup>
                                        </Col>
                                        <Col sm={3} smOffset={3}>
                                            <FormGroup>
                                                <InputGroup>
                                                    <input className='form-control' ref='filterText' onChange={this.onFilterChange} value={this.state.filterText} type="text" placeholder='search'  />
                                                    <InputGroup.Addon>
                                                        <Glyphicon glyph="search" />
                                                    </InputGroup.Addon>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    </Form>
                                </Row>
                                <Row style={{ marginTop: '10px' }} bsClass='text-center'>
                                    {this.state.movies.filter(movie=> movie.isVisible).map((movie) => {

                                        return (<Col sm={3} key={movie.name}>
                                            <MovieOverview movieDetails={movie} onMovieSelect={this.onMovieSelect} />
                                        </Col>)
                                    })}

                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>

        );

    }
}