import React, { Component } from 'react';
import qiwi from './qiwi.svg';
import styled from 'styled-components';

const qiwiIcon = <svg width='40' height='42' viewBox='0 0 40 42' xmlns='http://www.w3.org/2000/svg'
xmlnsXlink='http://www.w3.org/1999/xlink'>
    <desc>Created using Figma</desc>
    <use xlinkHref='#qiwiIcon1' transform='translate(26.57 28.79)'
    fill='#FF8C00' />
    <use xlinkHref='#qiwiIcon2' fill='#FF8C00' />
    <use xlinkHref='#qiwiIcon3' transform='translate(30.93 25.688)' fill='#FF8C00'
    />
    <defs>
        <path id='qiwiIcon1' d='M1.015 0C.612 0 .41.2.21.403c-.403.604-.202 1.61.402 2.416.403.2.806.4 1.208.4.403 0 .806-.2 1.007-.4.403-.605.2-1.41-.604-2.015C2.023.2 1.62 0 1.015 0z'
        />
        <path id='qiwiIcon2' d='M39.864 40.47c-3.623-4.632-6.845-5.84-9.865-6.645-.404-.202-.806-.202-1.21-.403h-.2c-2.416-.604-4.832-1.208-7.047-3.624-.604-.604-1.208-1.41-2.013-2.416-.202-.202-.403-.604-.604-.806-.403-.805-.403 1.208-.202 3.624v.202h-.402c-3.222 0-6.04-1.208-8.457-3.624C7.45 24.362 6.24 21.543 6.24 18.12c0-3.423 1.21-6.24 3.424-8.657 2.215-2.416 5.034-3.624 8.658-3.624 3.422 0 6.24 1.207 8.657 3.623 2.415 2.416 3.623 5.235 3.623 8.86v1.408h-.2c-2.015-.2-3.827-.2-4.028 0-.2.202.604.202.805.404.604.2 1.208.402 1.61.604.404.2.806.402 1.21.604h.2c2.215 1.41 3.423 3.624 3.826 6.442 0 .202 0 .202.2 0 1.21-2.013 1.813-3.422 2.014-4.43 0-.2.202-.402.202-.603 0-.2.2-.402.2-.603.202-1.208.404-2.416.404-3.825 0-3.423-.806-6.443-2.416-9.262-1.61-2.82-4.027-5.033-6.846-6.644C24.966.806 21.744 0 18.322 0 15.1 0 11.88.805 9.06 2.416 6.24 4.026 4.027 6.24 2.416 9.26.806 12.08 0 15.303 0 18.524c0 3.423.805 6.443 2.416 9.26 1.61 2.82 4.027 5.035 6.845 6.645 2.82 1.61 6.042 2.416 9.263 2.416.805 0 1.41 0 2.013-.2H22.348c2.014-.202 3.826-.404 5.638-.202 3.624.2 7.046 1.208 11.476 5.033.2-.2.805-.604.402-1.006z'
        />
        <path id='qiwiIcon3' d='M.884.083C.482-.117.28.083.08.285-.123.687.08 1.29.48 2.097c.402.604.805 1.006 1.006 1.006 0 0 .202 0 .202-.2.2-.202.2-.605.2-1.008C1.89 1.29 1.49.285.885.083z'
        />
    </defs>
</svg>

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

const PaymentLogoQiwi = (props) => {
    return (
        <Container checked={props.checked} onClick={() => props.handleChecked('qiwi')} >
            {qiwiIcon}
        {/* <object type="image/svg+xml" data={webmoney} style={style.iconStyle}>Your browser does not support SVGs</object> */}
        <div style={{marginTop: '20px'}}> Qiwi </div>
        {props.checked === true ? <div style={{marginTop: '30px'}}>Сбор 550 Р</div> : ''}
    </Container>
    )
}

export default PaymentLogoQiwi