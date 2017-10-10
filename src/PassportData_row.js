import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Gender from './Gender';
import DateOfBirth from './DateOfBirth';


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
`

const Title = styled.h1` 
font-weight: 300;
text-align: left;
font-size: 28px;
color: #003267;
`;

// флекс-контейнер
const FlexContainer = styled.section`
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


const PassportData_row = () => {
    return (
        <Wrapper>
            <FlexContainer>
                <Title>Данные пассажиров для оформления билетов</Title>
                <LinkContainer>
                    {iconList}
                    <Link href='#'>Примеры заполнения</Link>
                </LinkContainer>
            </FlexContainer>
            <FlexContainer>
                <Gender> Пол </Gender>
                <Input> Фамилия </Input>
                <Input> Имя </Input>
                <Input> Отчество </Input>
            </FlexContainer>
            <FlexContainer>
                <DateOfBirth> Дата рождения </DateOfBirth>
                <Input> Гражданство </Input>
                <Input> Номер документа </Input>
                <Input> Срок действия </Input>
            </FlexContainer>
        </Wrapper>)
}

export default PassportData_row;