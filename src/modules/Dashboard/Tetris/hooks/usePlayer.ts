import React from 'react';
import { ARENA_WIDTH } from '../setup';
import { isColliding, randomTetromino } from '../helpers';
import type { ARENA } from './useArena';

export type PLAYER = {
    pos: {
        x: number;
        y: number;
    };
    tetromino: (string | number)[][];
    collided: boolean;
};

const usePlayer = () => {
    const [player, setPlayer] = React.useState({} as PLAYER);

    const rotate = (matrix: PLAYER['tetromino']) => {
        const mtrx = matrix.map((_, i) => matrix.map((column) => column[i]));
        return mtrx.map((row) => row.reverse());
    };

    const playerRotate = (arena: ARENA): void => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino);

        // validate if possible to rotate
        const posX = clonedPlayer.pos.x;
        let offset = 1;
        while (isColliding(clonedPlayer, arena, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));

            if (offset > clonedPlayer.tetromino[0].length) {
                clonedPlayer.pos.x = posX;
                return;
            }
        }

        setPlayer(clonedPlayer);
    };

    const updatePlayerPos = ({ x, y, collided }: { x: number; y: number; collided: boolean }): void => {
        console.warn('x,y', x, y)
        setPlayer((prev) => ({
            ...prev,
            pos: { x: (prev.pos.x + x), y: (prev.pos.y + y) },
            collided
        }));
    };

    const resetPlayer = React.useCallback(
        (): void => setPlayer({
            pos: { x: ARENA_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false
        }), []
    );

    return {
        player, updatePlayerPos, resetPlayer, playerRotate
    };
};

export default usePlayer;
