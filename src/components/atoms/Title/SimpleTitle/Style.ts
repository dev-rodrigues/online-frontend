import styled, { css } from 'styled-components';

interface TitleProps {
  margin?: [number, number, number, number],
  size?: number,
  sizeSubtitulo?: number,
  align?: 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'start' | 'end' | 'match-parent'
  direcao?: 'retornar' | 'avancar'
}

export const Title = styled.div<TitleProps>`
  text-align: center;


  h1 {
    font-family: 'Play', sans-serif;
    color: #003926;

    /* fonte default */
    font-size: 38px;

    ${props => props.size && css`
      font-size: ${`${props.size}px;`}
    `}

    ${props => props.margin && css`
      margin: ${`${props.margin[0]}px; ${props.margin[1]}px; ${props.margin[2]}px; ${props.margin[3]}px;`}
    `}
  }

  p {
    color: #059b5c;
    ${props => props.sizeSubtitulo && css`
      font-size: ${`${props.sizeSubtitulo}px;`};
    `}

    ${props => props.align && css`
      text-align: ${`${props.align};`};
    `}
  }

  div {

    display: flex;
    flex-direction: column;

    ${props => props.direcao === 'avancar' && css`
      align-items: flex-end;
    `}

    > a {
      display: block;
      margin-top: 24px;
      text-decoration: none;

      display:flex;
      align-items: center;
    }

  }
`;
