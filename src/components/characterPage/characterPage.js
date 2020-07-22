import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';






export default class characterPage extends Component {

    state = {
        selectedChar: 130,
        error: false

    }

    componentDidCatch(){
        
        this.setState({
            error: true
        })
    }


    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    render() {
        if (this.state.error){
            return <ErrorMessage/>
        }
        return(

            <Row>
            <Col md='6'>
                <ItemList onCharSelected={this.onCharSelected}/>
            </Col>
            <Col md='6'>
                <CharDetails charId={this.state.selectedChar}/>
            </Col>
        </Row>
        )

    }



}