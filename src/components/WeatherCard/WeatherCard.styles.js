import styled from 'styled-components';

export const Wrapper = styled.li`
  background-color: #673a9f;
  text-align: center;
  padding: 1rem;
  min-width: calc(20% - 4rem);
  border-radius: 3px;
`;

export const Title = styled.h3`
  margin-top: 0;
`;

export const WeatherText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  p {
    padding: 0;
    width: 100%;
  }
`;
