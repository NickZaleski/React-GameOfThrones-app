import React, {Component} from 'react';

import styled from 'styled-components';





const ItemDetail = styled.div`
    border-radius: 4px;
    background-color: #fff ;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    
`

const ItemDetailH4 = styled.div`
    
    margin-bottom: 20px;
    text-align: center; 
    
`

const SpanText = styled.span`
    color: white;
    font-size; 20px;    
`


const Field = ({item, field, label}) => {
    return (
    <li className="list-group-item d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {



    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        if (!this.state.item){
            return <SpanText>Please select a character</SpanText>
        }
        const {item} = this.state;
        const {name} = item;

        return (
            <ItemDetail>
                <ItemDetailH4>{name}</ItemDetailH4>
                <ul className="list-group list-group-flush">
                   {

                       React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                       })

                   }
                </ul>
            </ItemDetail>
        );
    }
}