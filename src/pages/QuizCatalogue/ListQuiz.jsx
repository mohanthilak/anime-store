import React from "react";
import DS from "./Demon Slayer.jpg"

const ListQuiz = () => {
  return (
    <div className='px-6 md:px-12 md:mt-16 mt-32 mb-4'>
      <div className=''>
        <h1 className='text-4xl font-bold'>Quizes</h1>
        <hr className=' mt-2 w-48 h-1 border:none text-black bg-black' />
      </div>
      <div className='flex mt-8 justify-around flex-wrap'>
      
        <div className=' w-48 my-6 mx-10 cursor-pointer transition duration-700 hover:scale-125'>
            <div >
                <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-44 rounded-2xl' src={DS} />
            </div>
            <div>
                <h1>Demon Slayer</h1>
                <div>
                    <p>Season: 1</p>
                    <p>Episodes: 0-200</p>
                </div>
            </div>
        </div>
        <div className=' w-48 my-6 mx-10 cursor-pointer transition duration-700 hover:scale-125'>
            <div >
                <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-44 rounded-2xl' src={DS} />
            </div>
            <div>
                <h1>Demon Slayer</h1>
                <div>
                    <p>Season: 1</p>
                    <p>Episodes: 0-200</p>
                </div>
            </div>
        </div> <div className=' w-48 my-6 mx-10 cursor-pointer transition duration-700 hover:scale-125'>
            <div >
                <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-44 rounded-2xl' src={DS} />
            </div>
            <div>
                <h1>Demon Slayer</h1>
                <div>
                    <p>Season: 1</p>
                    <p>Episodes: 0-200</p>
                </div>
            </div>
        </div> <div className=' w-48 my-6 mx-10 cursor-pointer transition duration-700 hover:scale-125'>
            <div >
                <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-44 rounded-2xl' src={DS} />
            </div>
            <div>
                <h1>Demon Slayer</h1>
                <div>
                    <p>Season: 1</p>
                    <p>Episodes: 0-200</p>
                </div>
            </div>
        </div> <div className=' w-48 my-6 mx-10 cursor-pointer transition duration-700 hover:scale-125'>
            <div >
                <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-44 rounded-2xl' src={DS} />
            </div>
            <div>
                <h1>Demon Slayer</h1>
                <div>
                    <p>Season: 1</p>
                    <p>Episodes: 0-200</p>
                </div>
            </div>
        </div> <div className=' w-48 my-6 mx-10 cursor-pointer transition duration-700 hover:scale-125'>
            <div >
                <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-44 rounded-2xl' src={DS} />
            </div>
            <div>
                <h1>Demon Slayer</h1>
                <div>
                    <p>Season: 1</p>
                    <p>Episodes: 0-200</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ListQuiz;
