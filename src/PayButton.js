import React from 'react';

const style = {
    width: '320px',
    height: '64px',
    background: "linear-gradient(0deg, rgba(0, 50, 103, 0.88), rgba(0, 50, 103, 0.88)), #01BDEA",
    boxShadow: '0px 2px 4px rgba(0, 50, 103, 0.08)',
    borderRadius: '2px',
    fontSize: '18px',
    color: '#FFFFFF'
}

const PayButton = () => {
    return (
        <button style={style}>Перейти к оплате</button>
    )
}

export default PayButton