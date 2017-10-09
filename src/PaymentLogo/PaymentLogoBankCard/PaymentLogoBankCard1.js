import React, { Component } from 'react';
import bankCard from './bankCard.svg';
import styled from 'styled-components'

const Container = styled.div`
width: 128px;
height: 128px;
color: green;
background-color: rgba(255, 255, 255, 0.4);
border: 2px solid rgba(1, 189, 234, 0.16);
box-sizing: border-box;
border-radius: 4px;
`

const Object = styled.object`
padding-top: 30px;
padding-bottom: 20px;
`
const style = {

    labelStyle: {
        // fontFamily: 'Roboto',
        color: '#133F74',
        fontSize: '16px'
    },
    iconStyle:{
        
    }
}

// const paymentBanks = ['Банковская карта', 'Яндекс Деньги', 'Webmoney', 'Qiwi', 'Kviku билет в кредит', 'Евросеть', э ]



const PaymentLogoBankCard1 = () => {

    return <Container>
        <Object type={"image/svg+xml"} data={bankCard}>Your browser does not support SVGs</Object>
        <div style={style.labelStyle}> Банковская карта </div>
    </Container>
}

export default PaymentLogoBankCard1