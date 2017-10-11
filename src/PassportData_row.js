import React from 'react';
import styled from 'styled-components';
import Gender from './InputFields/Gender';
import DateOfBirth from './InputFields/DateOfBirth';
import Surname from './InputFields/Surname';
import Name from './InputFields/Name';
import Patronymic from './InputFields/Patronymic';
import Citizenship from './InputFields/Citizenship';
import DocumentNumber from './InputFields/DocumentNumber';
import ValidityOf from './InputFields/ValidityOf';


const iconList = <svg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    <desc>Created using Figma</desc>
    <use xlinkHref='#iconList' fill='#003267' />
    <use xlinkHref='#iconList' fill='#01BDEA' fillOpacity='.48' />
    <defs>
        <path id='iconList' d='M11 14H4v-2h7v2zm3-4H4V8h10v2zm0-4H4V4h10v2zm2-6H2C.89 0 0 .89 0 2v14c0 .53.21 1.04.586 1.414C.96 17.79 1.47 18 2 18h14c.53 0 1.04-.21 1.414-.586C17.79 17.04 18 16.53 18 16V2c0-1.11-.9-2-2-2z'
        />
    </defs>
</svg>


// внутренние отступы
const Wrapper = styled.section`
padding-left: 32px;
padding-right: 32px;
padding-bottom: 42px;
padding-top: 42px;
`

const Title = styled.h1` 
margin: 0;
font-weight: 300;
text-align: left;
font-size: 28px;
color: #003267;
`;

const SubTitle = styled.h2` 
font-weight: 300;
text-align: left;
font-size: 18px;
color: #003267;
`;

const FlexContainerTitle = styled.section`
margin-bottom: 20px;
justify-content: space-between;
display: flex;
flex-wrap: wrap;
align-items: center;
`;

const FlexContainer = styled.section`
margin-bottom: 2px;
justify-content: space-between;
display: flex;
flex-wrap: wrap;
align-items: center;
`;

const Link = styled.a`
color: #003267;
margin-left: 5px;

`
const LinkContainer = styled.div`
display: flex;
align-items: center;
`
const Note = styled.div`
margin-top: 14px;
font-size: 14px;
color: #55769C;
text-align: right;
`


const PassportData_row = () => {
    return (
        <Wrapper>
            <FlexContainerTitle>
                <Title>Данные пассажиров для оформления билетов</Title>
                <LinkContainer>
                    {iconList}
                    <Link href='#'>Примеры заполнения</Link>
                </LinkContainer>
            </FlexContainerTitle>
            <SubTitle>Взрослый пассажир</SubTitle>
            <FlexContainer>
                <Gender> Пол </Gender>
                <Surname> Фамилия </Surname>
                <Name> Имя </Name>
                <Patronymic> Отчество </Patronymic>
            </FlexContainer>
            <FlexContainer>
                <DateOfBirth> Дата рождения </DateOfBirth>
                <Citizenship> Гражданство </Citizenship>
                <DocumentNumber> Номер документа </DocumentNumber>
                <ValidityOf> Срок действия </ValidityOf>
            </FlexContainer>
            <Note>Только для заграничных паспортов</Note>
        </Wrapper>)
}

export default PassportData_row;