import styled from "styled-components";

interface ButtonProps{
    bg: string,
    small?: boolean
}

interface HeaderProps{
    bgColor?: string
}

export const Button = styled.button<ButtonProps>`
  font-size: ${props => props.small? 
    '15px' : 
    '40px'};
  background-color: ${props => props.bg};

`;

export const Header = styled.header<HeaderProps>`
    background-color: ${props => props.bgColor || '#bac'};
    padding: 10px;

`;