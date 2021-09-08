import React from 'react';
import Cell from '../Cell/Cell';
import { StyledArena } from './Stage.styles';
import { TETROMINOS } from '../../setup';

export type ARENACELL = [keyof typeof TETROMINOS, string];
export type ARENA = ARENACELL[][];

type Props = {
    arena: ARENA;
}

const Arena: React.FC<Props> = ({ arena }) => (
    <StyledArena>
        {arena.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledArena>
)

export default Arena;
