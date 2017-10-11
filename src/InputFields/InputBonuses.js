import styled from 'styled-components';
import React, { Component } from 'react';

const Wrapper = styled.div`
position: relative;
width: 270px;
background: #FFFFFF;
margin-left: 2px;
`
const StyledInput = styled.input`
height: 100%;
box-sizing: border-box;
width: 100%;
border: none;
font-size: 16px;
color: #0F3166;
padding-left: 10px;
padding-top: 15px;
position: relative;
background: none;
z-index: 1;
`
const Label = styled.label`
color: #9BADC2;
position: absolute;
top: 36px;
left: 10px;
transition: all .2s ease-out;
`


class InputBonuses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            value: '50' //то что мы вводим в Input
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLabelStyle = this.handleLabelStyle.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleLabelStyle() { // метод добавляет инлайновые стили для заголовка поля Input
        let labelStyleOnFocus = { top: '8px', fontSize: '12px', color: '#01BDEA' }
        if (this.state.focused) {
            return labelStyleOnFocus
        } 
        if (this.state.value.length > 0) {
            return labelStyleOnFocus
        } else { return {} }
    }

    render() {
        let borderStyleOnFocus = { outline: '2px solid #01BDEA' }
        return (
            <Wrapper>
                <StyledInput type='text' style={this.state.focused ? borderStyleOnFocus : {}} onFocus={(e) => this.setState({ focused: !this.state.focused })} onBlur={(e) => this.setState({ focused: !this.state.focused })} value={this.state.value} onChange={this.handleChange} />
                <Label style={this.handleLabelStyle()} onFocus={(e) => this.setState({ focused: !this.state.focused })} onBlur={(e) => this.setState({ focused: !this.state.focused })}>{this.props.children}</Label>
            </Wrapper>
        )
    }
}

export default InputBonuses 