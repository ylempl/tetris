import React from 'react';
import { createArena, isColliding } from './helpers';

import {
    useArena, useGameStatus, useInterval, usePlayer
} from './hooks';
import { Arena, Display, StartButton } from './components';
import { DROPTIME } from './setup';
import { StyledTetris } from './Tetris.styles';

const Tetris: React.FC = () => {
    const [dropTime, setDroptime] = React.useState<null | number>(null);
    const [gameOver, setGameOver] = React.useState(true);

    const gameArea = React.useRef<HTMLDivElement>(null);

    const {
        player, updatePlayerPos, resetPlayer, playerRotate
    } = usePlayer();
    const { arena, setArena, rowsCleared } = useArena(player, resetPlayer);
    const {
        score, setScore, rows, setRows, level, setLevel
    } = useGameStatus(rowsCleared);

    const movePlayer = (dir: number) => {
        if (!isColliding(player, arena, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0, collided: false });
        }
    };

    const keyUp = ({ keyCode }: { keyCode: number }): void => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDroptime(DROPTIME / level + 200);
            }
        }
    };

    const handleStartGame = (): void => {
        // Need to focus the window with the key events on start
        if (gameArea.current) gameArea.current.focus();
        // Reset everything
        setArena(createArena());
        setDroptime(DROPTIME);
        resetPlayer();
        setScore(0);
        setLevel(1);
        setRows(0);
        setGameOver(false);
    };

    const move = ({ keyCode, repeat }: { keyCode: number; repeat: boolean }): void => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                // Just call once
                if (repeat) return;
                setDroptime(30);
            } else if (keyCode === 38) {
                playerRotate(arena);
            }
        }
    };

    const drop = (): void => {
        // Increase level when player has cleared 10 rows
        if (rows > level * 10) {
            setLevel((prev) => prev + 1);
            // Also increase speed
            setDroptime(DROPTIME / level + 200);
        }

        if (!isColliding(player, arena, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false });
        } else {
            // Game over!
            if (player.pos.y < 1) {
                setGameOver(true);
                setDroptime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    };

    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <div style={{ outline: 'none' }} role="button" tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
            <StyledTetris>
                <div className="display">
                    {gameOver ? (
                        <>
                            <Display gameOver={gameOver} text="Game Over!" />
                            <StartButton callback={handleStartGame} />
                        </>
                    ) : (
                        <>
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </>
                    )}
                </div>
                <Arena arena={arena} />
            </StyledTetris>
        </div>
    );
};

export default Tetris;
