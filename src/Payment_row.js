import React from 'react';
import styled from 'styled-components';
import PayButton from './Buttons/PayButton';
import InputBonuses from './InputFields/InputBonuses';

import PaymentLogoBankCard from './PaymentLogo/PaymentLogoBankCard/PaymentLogoBankCard'
// import PaymentLogoBankCard1 from './PaymentLogo/PaymentLogoBankCard/PaymentLogoBankCard1'
import PaymentLogoYandex from './PaymentLogo/PaymentLogoYandex/PaymentLogoYandex'
import PaymentLogoWebmoney from './PaymentLogo/PaymentLogoWebmoney/PaymentLogoWebmoney'
import PaymentLogoQiwi from './PaymentLogo/PaymentLogoQiwi/PaymentLogoQiwi'
import PaymentLogoKviku from './PaymentLogo/PaymentLogoKviku/PaymentLogoKviku'
import PaymentLogoEuroset from './PaymentLogo/PaymentLogoEuroset/PaymentLogoEuroset'
import PaymentLogoSuperkassa from './PaymentLogo/PaymentLogoSuperkassa/PaymentLogoSuperkassa'

const gift = <svg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    <desc>Created using Figma</desc>
    <g fill='#FFF'>
        <use xlinkHref='#gift' />
    </g>
    <defs>
        <path id='gift' d='M43 10.01h-9c2.15-2.35 2.1-6-.2-8.248-2.35-2.35-6.15-2.35-8.45 0-.85.85-1.7 2.15-2.3 3.65-.6-1.5-1.45-2.8-2.3-3.65C19.65.612 18.1.012 16.5.012s-3.1.6-4.25 1.75-1.75 2.65-1.75 4.25c0 1.5.55 2.898 1.55 3.998H5c-2.75 0-5 2.25-5 5v3.998c0 1.3.85 2.4 2 2.85V43c0 2.85 2.9 5 5.5 5H41c2.75 0 5-2.25 5-5V21.858c1.2-.45 2-1.55 2-2.85V15.01c0-2.75-2.25-5-5-5zM26.75 3.162c1.55-1.55 4.1-1.55 5.65 0 1.55 1.55 1.55 4.1 0 5.648-.4.4-.9.75-1.35 1.05-.1.05-.15.1-.25.2H24c.1-.15.15-.35.15-.5-.05-2.15 1.35-5.15 2.6-6.398zm-13.05-.05c.75-.75 1.75-1.15 2.8-1.15 1.05 0 2.05.4 2.8 1.15 1.25 1.25 2.65 4.25 2.6 6.298 0 .2.05.35.15.5H15.3c-.05 0-.15-.05-.3-.15-.5-.25-.95-.6-1.3-1-1.55-1.55-1.55-4.1 0-5.648zM22 46H7.5C5.9 46 4 44.65 4 43V22.008h18V46zm24-26.992c0 .55-.4.9-.8 1 0 0-.05 0-.05.05H45c-.55 0-1 .45-1 1V43.05c0 1.65-1.35 3-3 3H24V22.008h10c.55 0 1-.45 1-1s-.45-1-1-1H24v-4.5c0-.548-.45-.998-1-.998s-1 .45-1 .998v4.5H3c-.55 0-1-.45-1-1v-4c0-1.65 1.35-3 3-3h38c1.65 0 3 1.35 3 3v4z'
        />
        <path id='gift' d='M40 20.007h-1.5c-.55 0-1 .45-1 1s.45 1 1 1H40c.55 0 1-.45 1-1s-.45-1-1-1z'
        />
    </defs>
</svg>

const Title = styled.h1` 
font-weight: 300;
text-align: left;
font-size: 28px;
color: #003267;
margin-bottom: 24px;
margin-left: 32px;
`;

const ContainerFlex = styled.section`
display: flex;
justify-content: space-between;
margin-bottom: 69px;
margin-left: 32px;
margin-right: 32px;
`;

const BonusPointsTape = styled.div`
display: flex;
justify-content: center;
padding-top: 16px;
padding-bottom: 16px;
background-color: #81D8F2;
box-sizing: border-box;
border-radius: 2px;
margin-bottom: 70px;
`
const Label = styled.div`
margin-right: 50px;
margin-left: 30px;
flex: 0.6;
color: #133F74;
font-size: 16px;
text-align: left;
`
const FlexContainer = styled.div`
display: flex;
justify-content: flex-end;
`
const TotalCost = styled.div`
margin-left: 70px;
text-align: right;
font-size: 20px;
color: #003267;
`
const Bonuses = styled.div`
text-align: right;
font-size: 14px;
color: #2575A6;
`

const Payment_row = () => {
    return (
        <section>
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
            <BonusPointsTape>
                {gift}
                <Label> <strong>На вашем счету есть 80 бонусных баллов,</strong> которые можно использовать для оплаты. Укажите, сколько бонусов вы хотите списать </Label>
                <InputBonuses>Бонусных баллов к списанию</InputBonuses>
            </BonusPointsTape>
            <FlexContainer>
                <PayButton>ПЕРЕЙТИ К ОПЛАТЕ</PayButton>
                <div >
                    <TotalCost>Общая стоимость: 23 529 Р</TotalCost>
                    <Bonuses>Бонусов к зачислению: +20</Bonuses>
                </div>
            </FlexContainer>
        </section>

    )
}

export default Payment_row