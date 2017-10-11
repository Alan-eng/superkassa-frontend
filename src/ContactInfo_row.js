import React from 'react';
import styled from 'styled-components';
import InputEmail from './InputFields/InputEmail';
import InputTelephone from './InputFields/InputTelephone';

const Wrapper = styled.section`
padding-left: 32px;
padding-right: 32px;
padding-top: 42px;
`
const FlexContainer = styled.section`
justify-content: space-between;
display: flex;
flex-wrap: wrap;
align-items: center;
`;

const Title = styled.h1` 
margin: 0;
margin-bottom: 20px;
font-weight: 300;
text-align: left;
font-size: 28px;
color: #003267;
`;

const Note = styled.div` 
flex: 1;
color: #003267;
font-size: 14px;
text-align: left;
margin-left: 20px;
`;



const ContactInfo_row = () => {
    return (
        <Wrapper>
            <Title>Контактная информация для заказа</Title>
            <FlexContainer>
                <InputEmail> E-mail </InputEmail>
                <InputTelephone> Телефон </InputTelephone>
                <Note> На e-mail мы высылаем маршрутную квитанцию. По телефону информируем о возможных изменениях в расписании рейсов.  </Note>
            </FlexContainer>
        </Wrapper>)
}

export default ContactInfo_row;