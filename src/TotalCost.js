import React from 'react';

const style = {
    totalCost: {
        textAlign: 'right',
        fontSize: '20px',
        color: '#003267'
    },
    bonus: {
        textAlign: 'right',
        fontSize: '14px',
        color: '#2575A6'
     }

}


const TotalCost = () => {
    return (
        <div >
            <div style={style.totalCost}>Общая стоимость: 23 529 Р</div>
            <div style={style.bonus}>Бонусов к зачислению: +20</div>
        </div>
    )
}

export default TotalCost