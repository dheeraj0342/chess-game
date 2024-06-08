import React,{useEffect, useState} from 'react'
import ChessBoard from '../components/ChessBoard'
import { useSocket } from '../hooks/useSocket'
import {Chess} from 'chess.js'

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess())
  const [board, setBoard] = useState(chess.board())
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!socket) {
        return;
    }
    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);

        switch (message.type) {
            case INIT_GAME:
                setBoard(chess.board());
                setStarted(true)
                break;
            case MOVE:
                const move = message.payload;
                chess.move(move);
                setBoard(chess.board());
                console.log("Move made");
                break;
            case GAME_OVER:
                console.log("Game over");
                break;
        }
    }
}, [socket]);




  if (!socket) {
    return <div>Connecting...</div>
  }

  return (
    <>
      <div className='flex h-screen justify-center items-center gap-16'>
        <ChessBoard chess={chess} setBoard={setBoard} board={board} socket={socket}/>
        <div className='bg-[#262522]  w-[22rem] h-[45rem] flex items-center justify-center '>
          <button onClick={()=> {
            socket.send(JSON.stringify({
              type: INIT_GAME
            })
            )
            console.log('init_game');
            
          }} className='"bg-green-500 text-center text-white font-bold py-4 text-4xl w-[80%] rounded-lg bg-[#80B64B]'>
            play
          </button>
        </div>

      </div>
    </>
  )
}

export default Game