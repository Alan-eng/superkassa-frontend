import React, { Component } from 'react';
import gift from './InsuarenceTape';

const style = {
    block: {
        display: 'flex',
        paddingTop: '16px',
        paddingBottom: '16px',
        backgroundColor: '#D0ECF8',
        boxSizing: 'border-box',
        borderRadius: '2px',
        
    },
    labelStyle: {
        marginRight: '64px',
        color: '#133F74',
        fontSize: '16px',
        textAlign: 'left'
    },
    iconStyle:{
        marginRight: '48px',
        marginLeft: '56px',
    }
}

// const paymentBanks = ['Банковская карта', 'Яндекс Деньги', 'Webmoney', 'Qiwi', 'Kviku билет в кредит', 'Евросеть', э ]

const InsuarenceTape = () => {
    return (
        <div style={style.block} onMouseOver={console.log('onMouseOver')}>
            <h1 style={}> Добавить страховки </h1>
            <object style={style.iconStyle} type="image/svg+xml" data={gift} >Your browser does not support SVGs</object>
            <div style={style.labelStyle}> <strong>На вашем счету есть 80 бонусных баллов,</strong> которые можно использовать для оплаты. Укажите, сколько бонусов вы хотите списать </div>
            <form >
                <input style={{height: '100%'}} type="text" />
            </form>
        </div>
    )
}

export default InsuarenceTape