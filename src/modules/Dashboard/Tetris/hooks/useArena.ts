import { useState, useEffect } from 'react';
import { createArena } from '../helpers';
import type { PLAYER } from './usePlayer';

export type ARENACELL = [string | number, string];
export type ARENA = ARENACELL[][];

const useArena = (player: PLAYER, resetPlayer: () => void) => {
    const [arena, setArena] = useState(createArena());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        if (!player.pos) return;

        setRowsCleared(0);

        const sweepRows = (newArena: ARENA): ARENA => newArena.reduce((ack, row) => {
            // clear score row
            if (row.findIndex((cell) => cell[0] === 0) === -1) {
                setRowsCleared((prev) => prev + 1);
                ack.unshift(new Array(newArena[0].length).fill([0, 'clear']) as ARENACELL[]);
                return ack;
            }

            ack.push(row);
            return ack;
        }, [] as ARENA);

        const updateArena = (prevArena: ARENA): ARENA => {
            // destroy
            const newArena = prevArena.map(
                (row) => row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell)) as ARENACELL[]
            );

            // draw
            console.warn('plarena', player.pos)
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newArena[player.pos.y + y][player.pos.x + x] = [value, `${player.collided ? 'merged' : 'clear'}`];
                    }
                });
            });

            if (player.collided) {
                resetPlayer();
                return sweepRows(newArena);
            }

            return newArena;
        };

        setArena((prev) => updateArena(prev));
    }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino]);

    return { arena, setArena, rowsCleared };
};

export default useArena;
