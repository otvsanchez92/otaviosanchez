import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.8;
  }

  50% {
    transform: rotate(10deg);
  }

  70% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

export const Container = styled.nav`
    width: 90%;
    margin: 0px auto;
    max-width: 1280px;
    padding: 30px 0px;
`;

export const Content = styled.div`
    p {
        margin: 0px;
    }

    div {
        margin-top: 30px;
        font-size: ${(props) => props.theme.fonts?.small};
    }
`;

export const List = styled.ul`
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemList = styled.li`
    list-style: none;
    &:hover {
        animation: ${rotate} 0.5s linear;
        opacity: 0.8;
    }
`;

export const Icon = styled.img`
    width: 50px;
    margin: 10px;
`;

export const Link = styled.a`
    color: ${(props) => props.theme.colors?.warning};
`;

export const Title = styled.h3`
    margin: 0px;
    color: #fff;
    font-size: ${(props) => props.theme.fonts?.xxLarge};
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
    padding: 0px;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`;

export const IconContainer = styled.div`
    color: ${(props) => props.theme.colors?.warning};
    font-size: ${(props) => props.theme.fonts?.xSmall};
    font-family: 'PlexusSans-Regular';
`;
