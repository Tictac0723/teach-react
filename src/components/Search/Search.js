import React, { Component } from 'react';
// import axios from 'axios';
import { Row, Col, TextInput, Button } from 'react-materialize';

class Search extends Component {
    //in this component we will be making use of state so we will use a class based approach
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'Search',
            submitted: false
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }



    render() {
        return (
            //remember you need to have an outer element to wrap all of your html/jsx elements
            <Row>
                <Col offset="l4" l={2}>
                    <TextInput icon="email" label="Search" name="userInput" onChange={this.handleChange} />
                </Col>
                <Col l={1}>
                    <Button
                        floating
                        large
                        className="indigo"
                        waves="light"
                        icon="add"
                        onClick={() => this.props.handleUserInput(this.state.searchTerm)}
                    />
                </Col>
            </Row>
        )
    }
}

export default Search;