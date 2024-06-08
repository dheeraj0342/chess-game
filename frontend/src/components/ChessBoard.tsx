import { Color, PieceSymbol, Square } from 'chess.js';
import React, { useState } from 'react'
import { MOVE } from "../pages/Game";

const ChessBoard = ({chess,setBoard,board,socket}:{
  board:({
      square: Square;
      type: PieceSymbol;
      color: Color;
}| null)[][];
socket:WebSocket;
chess: any;
setBoard: any;
  
}) => {
  const [from, setFrom] = useState<null | Square>(null);

  return (
    <div className='w-[50remh-[45rem]'>
      {board.map((row, i) => {
        return (
          <div key={i} className='flex'>
            {row.map((square, j) => {
             const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
              return (
                <div key={j} className={`w-[5.8rem] h-[5.8rem] flex items-center justify-center ${i % 2 === j % 2 ? 'bg-[#EBECD0]' : 'bg-[#739552]'}`}
                onClick={()=>{
                  if (!from) {
                    setFrom(squareRepresentation);
                } else {
                    socket.send(JSON.stringify({
                        type: MOVE,
                        payload: {
                            move: {
                                from,
                                to: squareRepresentation
                            }
                        }
                    }))

                    setFrom(null)
                    chess.move({
                        from,
                        to: squareRepresentation
                    });
                    setBoard(chess.board());
                    console.log({
                        from,
                        to: squareRepresentation
                    });
                        
                        
                    }
                }}
                >
                  <div>
                    {
                      square ? (
                        <img src={`/${square.color}${square.type}.png`} alt="" />
                      ) : (
                        null
                      )
                    }
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}

    </div>
  )
}

export default ChessBoard