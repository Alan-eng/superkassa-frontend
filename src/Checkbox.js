import React from 'react';
import styled, { css } from 'styled-components';

//styled - это полноценный компонент Реакта, и у него вызываем функцию button с помощью синтаксиса шаблонной строки, тоже самое, что при мпомощи скобок, только после вызова строка преобразуется к массиву
// когда устанавилваем primary property - добавляем еще немного CSS
//все вендорные префиксы будут выставлены автоматически, так что не нужно даже о них думать

const IconCheckedSVG = () => {
    return (
        <svg style={{ position: 'absolute' }} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <desc>Created using Figma</desc>
            <g transform="translate(4746 289)">
                <path fill="#05213F" d="M-4746-289h18v18h-18z" />
                <clippath id="a" clipRule="evenodd">
                    <path d="M-5665-1370h1024V452h-1024v-1822z" fill="#FFF" />
                </clippath>
                <g clipPath="url(#a)">
                    <path d="M-5665-1370h1024V452h-1024v-1822z" fill="#DFF0F9" />
                    <use xlinkHref="#b" transform="matrix(1 0 0 -1 -5657 -238)" fill="#01BDEA"
                        fillOpacity=".08" />
                    <use xlinkHref="#c" transform="translate(-4966 -358)" fill="#FFF" />
                    <mask id="d">
                        <use xlinkHref="#c" fill="#fff" transform="translate(-4966 -358)" />
                    </mask>
                    <use xlinkHref="#e" transform="translate(-4966 -358)" fill="#01BDEA" fillOpacity=".48"
                        mask="url(#d)" />
                    <mask id="g">
                        <use xlinkHref="#f" fill="#fff" transform="translate(-4746 -289)" />
                    </mask>
                    <use xlinkHref="#h" transform="translate(-4746 -289)" fill="#01BDEA" mask="url(#g)"
                    />
                    <use xlinkHref="#f" transform="translate(-4746 -289)" fill="#2CBBEC" />
                    <use xlinkHref="#i" transform="matrix(-1 0 0 1 -4733 -282)" fill="#FFF"
                    />
                </g>
            </g>
            <defs>
                <path id="b" d="M0 2C0 .895.895 0 2 0h1004c1.1 0 2 .895 2 2v172c0 1.105-.9 2-2 2H2c-1.105 0-2-.895-2-2V2z"
                />
                <path id="c" d="M0 4c0-2.21 1.79-4 4-4h296c2.21 0 4 1.79 4 4v96c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4z"
                />
                <path id="e" d="M4 2h296v-4H4v4zm298 2v96h4V4h-4zm-2 98H4v4h296v-4zM2 100V4h-4v96h4zM4-2C.686-2-2 .686-2 4h4c0-1.105.895-2 2-2v-4zm296 4c1.105 0 2 .895 2 2h4c0-3.314-2.686-6-6-6v4zm2 98c0 1.105-.895 2-2 2v4c3.314 0 6-2.686 6-6h-4zM4 102c-1.105 0-2-.895-2-2h-4c0 3.314 2.686 6 6 6v-4z"
                />
                <path id="f" fillRule="evenodd" d="M0 1c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1V1z"
                />
                <path id="h" d="M1 2h16v-4H1v4zm15-1v16h4V1h-4zm1 15H1v4h16v-4zM2 17V1h-4v16h4zM1-2C-.657-2-2-.657-2 1h4c0 .552-.448 1-1 1v-4zm16 4c-.552 0-1-.448-1-1h4c0-1.657-1.343-3-3-3v4zm-1 15c0-.552.448-1 1-1v4c1.657 0 3-1.343 3-3h-4zM1 16c.552 0 1 .448 1 1h-4c0 1.657 1.343 3 3 3v-4z"
                />
                <path id="i" d="M1.06-1.06c-.585-.586-1.535-.586-2.12 0-.586.585-.586 1.535 0 2.12l2.12-2.12zM5 5L3.94 6.06c.585.586 1.535.586 2.12 0L5 5zm4.06-1.94c.586-.585.586-1.535 0-2.12-.585-.586-1.535-.586-2.12 0l2.12 2.12zm-10.12-2l5 5 2.12-2.12-5-5-2.12 2.12zm7.12 5l3-3L6.94.94l-3 3 2.12 2.12z"
                />
            </defs>
        </svg>)
}

// ---------------------------------------------------

const Label = styled.div`  
display: flex;
align-items: center;
`;

const CustomCheckbox = styled.span`
width: 14px;
height: 14px;
border: 2px solid #01BDEA;
margin-right: 20px;
cursor: pointer;
`
class Checkbox extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <Label onClick={(e) => this.setState({ checked: !this.state.checked })}>
                <input type='checkbox' style={{ display: 'none' }}></input>
                <CustomCheckbox>
                    {this.state.checked && <IconCheckedSVG />}</CustomCheckbox>
                <span>360 P</span>
            </Label>
        )
    }
}

// const Checkbox = () => {
//     return (
//         <Label>
//             <input type='checkbox' style={{display: 'none'}}></input>
//             <CustomCheckbox>Хуе sdfsdf</CustomCheckbox>
//             <span>360 P</span>
//         </Label>
//     )
// }

export default Checkbox