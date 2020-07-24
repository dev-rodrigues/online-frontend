import styled from 'styled-components';

export const Steps = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid #003926;
    background-color: #003926;
    color: #fff;
    margin-bottom: 5px;
  }

  p {
    color: #059b5c;
  }
`;

export const ConteudoForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: #555;
    font-weight: bold;
    margin-bottom: 8px;
  }

  select {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 35px;
    padding: 0 15px;
    font-size: 16px;
    background-color: #fff;
  }
`;

export const Tab = styled.div`

`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`;
