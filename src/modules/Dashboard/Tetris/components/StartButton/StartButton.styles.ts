import styled from 'styled-components';

export const StyledStartButton = styled.button`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: #8BDB6B;
    border-radius: 2px;
    max-height: 3rem;
    padding: 1rem 1rem;
    border: none;
    transition: all 0.4s ease 0s;

    &:hover {
        background: #508F38;
        border-radius: 5px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
        cursor: pointer;
    }
`;
