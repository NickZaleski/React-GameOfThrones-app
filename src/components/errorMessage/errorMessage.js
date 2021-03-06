import React, {Component} from 'react';
import styled from 'styled-components';
import img from './error.jpg'

const ErrorMessage = styled.div`
   h3{
       margin: 20px auto;
       padding: 20px;
       background-color: white;
       border-radius: 4px;
       width: 500px;
    
   }
    font-size: 24px;
    color: darkred;
    margin: 0 auto;
    text-align: center;
    img{
        width: 160px;
        height: 160px;
        margin: 0 auto;
    }
    
`

export default class CharDetails extends Component {

    render() {
        return (
            <ErrorMessage>
                 <img src={img} alt="error"></img>
                <h3>Ooops, there is no information from the server</h3>
            </ErrorMessage>
        )
    }
}
