import React from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';

//styled - это полноценный компонент Реакта, и у него вызываем функцию button с помощью синтаксиса шаблонной строки, тоже самое, что при мпомощи скобок, только после вызова строка преобразуется к массиву
// когда устанавилваем primary property - добавляем еще немного CSS
//все вендорные префиксы будут выставлены автоматически, так что не нужно даже о них думать

const Icon = () => {
    return (
        <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <desc>Created using Figma</desc>
            <use xlinkHref="#a" fill="#003267" />
            <use xlinkHref="#a" fill="#01BDEA" fillOpacity=".24" />
            <defs>
                <path id="a" d="M6.006 0v4H3.01C1.86 4 1.132 5 1.012 6L.014 16c-.12 1 .54 2 1.997 2h15.98c1.457 0 2.116-1 1.996-2l-.998-10c-.12-1-.94-2-1.998-2h-2.995V0h-7.99zm1.997 2h3.994v2H8.003V2zM9 7h2v3h2.995v2h-2.996v3H9v-3H6.007v-2H9V7z"
                />
            </defs>
        </svg>)
}

// ---------------------------------------------------

const Label = styled.div`  
margin-left: 1em;
`;


const Wrapper = styled.section`
padding-left: 32px;
padding-right: 32px;
background-color: #B1E4F6;
`

const ContainerFlex = styled.div`
padding-bottom: 0.5em;
padding-top: 0.5em;
display: flex;
color: #1A5488;
cursor: pointer;
`

const ContainerFlexJustify = styled.div`
max-height: 0px;
overflow: hidden;
transition: max-height 0.5s cubic-bezier(.525,.66,.495,1.4);  
display: flex;
justify-content: space-between;
color: #1A5488;
`

const InsuarenceVariant = styled.div`
margin-top: 1em;
margin-bottom: 1em;
padding: 1em;
background-color: #F2FAFD;
color: #10396;
width: 28%;
border: 1px solid #8BDDF5;
border-radius: 4px;
`
const Read_more = styled.div`
display: flex;
justify-content: space-between;
margin-top: 1em;
`

const P = styled.p`
margin: 0;
text-align: left;
font-size: 16px;
`
const Link = styled.a`
text-decoration: none;
font-size: 14px;
color: #41BEEC;
font-weight: 600;
border-bottom: 1px solid currentColor;
`

class Insuarence extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        }
    }


    render() {
        return (<div>
            <Wrapper>
                <ContainerFlex onClick={(e) => this.setState({ collapsed: !this.state.collapsed })}>
                    <Icon />
                    <Label>Добавить страховки</Label>
                </ContainerFlex>
                <ContainerFlexJustify style={this.state.collapsed ? {} : {maxHeight: '140px'}}>
                    <InsuarenceVariant>
                        <P>Страхование пассажиров от несчастного случая</P>
                        <Read_more>
                            <Link href="#">Выплата до 1 000 000 Р</Link>
                            <Checkbox />
                        </Read_more>
                    </InsuarenceVariant>

                    <InsuarenceVariant>
                        <P>Страхование багажа и задержки рейса</P>
                        <Read_more>
                            <Link href="#">Подробнее</Link>
                            <Checkbox />
                        </Read_more>
                    </InsuarenceVariant>

                    <InsuarenceVariant>
                        <P>Медицинская страховка</P>
                        <Read_more>
                            <Link href="#">Подробнее</Link>
                            <Checkbox />
                        </Read_more>
                    </InsuarenceVariant>
                </ContainerFlexJustify>
            </Wrapper>
        </div>)
    }
}

export default Insuarence