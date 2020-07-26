import styled from 'styled-components';

export const SimpleForm = styled.div`
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
