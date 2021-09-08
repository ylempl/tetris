import styled from 'styled-components';

type Props = {
    gameOver?: boolean;
};

export const StyledDisplay = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 0 0 1rem 0;
  padding: 1rem 1.25rem;
  border: 1px solid #BCBFB8;
  border-radius: 5px;
  color: ${(props) => (props.gameOver ? 'red' : '#3F403E')};
  background: #FCFFF6;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;
