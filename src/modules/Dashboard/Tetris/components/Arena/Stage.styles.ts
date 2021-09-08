import styled from 'styled-components';
import { ARENA_WIDTH, ARENA_HEIGHT } from '../../setup';

export const StyledArena = styled.div`
    display: grid;
    grid-template-columns: repeat(${ARENA_WIDTH}, 30px);
    grid-template-rows: repeat(${ARENA_HEIGHT}, 30px);
    grid-gap: 1px;
    border: 1px solid #777;
    background: #222;
`;
