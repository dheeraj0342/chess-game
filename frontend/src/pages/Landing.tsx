import React from 'react'
import chessBoard from '../assets/chess-board.png';
import { FaChess } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className='w-full h-screen '>

            <div className='flex justify-center items-center pt-11 gap-7'>
                    <div>
                        <img src={chessBoard} alt="" className='w-[35rem] h-[35rem]'/>
                    </div>
                    <div className='flex flex-col gap-9'>
                        <div className='w-[17rem]'>
                         <h1 className='text-5xl font-bold text-yellow-100 text-center'>
                         Play Chess Online
                         </h1>
                        </div>
                        <button onClick={()=>{
                            navigate('/game')
                        }}>
                            
                        <div className="bg-[#80B64B] text-center text-white font-bold py-4 flex justify-center items-center text-4xl w-[20rem] rounded-lg">
                            <FaChess className="mr-2"/>  <div>Play Online</div>
                        </div>
                        </button>

                    </div>
                
            </div>
            
         </div> 
    
    </>
  )
}

export default Landing