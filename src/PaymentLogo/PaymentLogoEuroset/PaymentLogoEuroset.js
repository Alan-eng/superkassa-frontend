import React, { Component } from 'react';
import euroset from './euroset.svg';
import styled from 'styled-components';

const Container = styled.div` 
padding-top: 28px;
fontSize: 16px;
color: #254A78;
width: 128px;
height: 128px;
background-color: rgba(255, 255, 255, 0.4);
background: ${props => props.checked === true ? 'white' : '#EDF6FB'};
border: ${props => props.checked === true ? '2px solid #79D3FC' : '2px solid #CFEDF8'} ;
box-sizing: border-box;
border-radius: 4px;
cursor: pointer;
`;

const PaymentLogoEuroset = (props) => {
    return (
        <Container checked={props.checked} onClick={() => props.handleChecked('euroset')} >
        <object type="image/svg+xml" data={euroset}>Your browser does not support SVGs</object>
        <div style={{marginTop: '10px'}}> Евросеть </div>
        {props.checked === true ? <div style={{marginTop: '30px'}}>Сбор 450 Р</div> : ''}
    </Container>
    )
}

export default PaymentLogoEuroset