import React, { Component } from 'react';
import bankCard from './bankCard.svg';

const style = {
    block: {
        width: '128px',
        height: '128px',
        color: 'green',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        border: '2px solid rgba(1, 189, 234, 0.16)',
        boxSizing: 'border-box',
        borderRadius: '4px',
    },
    labelStyle: {
        // fontFamily: 'Roboto',
        color: '#133F74',
        fontSize: '16px'
    },
    iconStyle:{
        paddingTop: '30px',
        paddingBottom: '20px'
    }
}

// const paymentBanks = ['Банковская карта', 'Яндекс Деньги', 'Webmoney', 'Qiwi', 'Kviku билет в кредит', 'Евросеть', э ]



const PaymentLogoBankCard = () => {

    return <div style={style.block}>
        <object type="image/svg+xml" data={bankCard} style={style.iconStyle}>Your browser does not support SVGs</object>
        <div style={style.labelStyle}> Банковская карта </div>
    </div>
}

export default PaymentLogoBankCard