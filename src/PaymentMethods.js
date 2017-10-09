import React from 'react';
import styled from 'styled-components';


import PaymentLogoBankCard from './PaymentLogo/PaymentLogoBankCard/PaymentLogoBankCard'
// import PaymentLogoBankCard1 from './PaymentLogo/PaymentLogoBankCard/PaymentLogoBankCard1'
import PaymentLogoYandex from './PaymentLogo/PaymentLogoYandex/PaymentLogoYandex'
import PaymentLogoWebmoney from './PaymentLogo/PaymentLogoWebmoney/PaymentLogoWebmoney'
import PaymentLogoQiwi from './PaymentLogo/PaymentLogoQiwi/PaymentLogoQiwi'
import PaymentLogoKviku from './PaymentLogo/PaymentLogoKviku/PaymentLogoKviku'
import PaymentLogoEuroset from './PaymentLogo/PaymentLogoEuroset/PaymentLogoEuroset'
import PaymentLogoSuperkassa from './PaymentLogo/PaymentLogoSuperkassa/PaymentLogoSuperkassa'


const Title = styled.h1` 
font-weight: 300;
text-align: left;
font-size: 28px;
color: #003267;
margin-bottom: 24px;
`;

const ContainerFlex = styled.section`
display: flex;
justify-content: space-between;
margin-bottom: 69px;
`;

const Wrapper = styled.section`
padding-left: 32px;
padding-right: 32px;
`


const Insuarence = () => {
    return (
        <Wrapper>
        <Title>Способ оплаты</Title>
        <ContainerFlex>
            {/* <PaymentLogoBankCard1 /> */}
            <PaymentLogoBankCard />
            <PaymentLogoYandex />
            <PaymentLogoWebmoney />
            <PaymentLogoQiwi />
            <PaymentLogoKviku />
            <PaymentLogoEuroset />
            <PaymentLogoSuperkassa />
        </ContainerFlex>
        </Wrapper>)}

export default Insuarence;