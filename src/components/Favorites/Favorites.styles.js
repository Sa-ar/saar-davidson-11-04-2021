import styled from 'styled-components';

export const CardsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  padding: 1rem;
  border-radius: 3px;
  background-color: #7b57ae;
  color: #eaeaff;
  text-align: center;
  margin-bottom: 1rem;
  min-width: calc(20% - 4rem);
`;

export const Title = styled.h2``;

export const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #673a9f;
  width: 100%;
`;
