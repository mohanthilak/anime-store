import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import RightSide from "./RightSide"
import { io } from 'socket.io-client';
const socket = io("http://localhost:4000")
import useAuth from "../../Hooks/useAuth";
const Chat = () => {
    const {auth} = useAuth();
    const [client, setClient] = useState(null);

    useEffect(()=>{
        socket.on('connect', ()=>{
            console.log("Socket Connected")
        })

        socket.emit("userConnect", {uid: auth.uid})

        return () => {
            socket.off('connect', ()=>{
                console.log("Socket [connect] off")
            })
        }
    }, [])

    return (
        <div className='px-6 md:px-8 h-[91vh] flex justify-center items-center'>
            <div className='h-[86vh] border-2 flex w-[100vw] shadow-2xl'>

                {/* Left side */}
                <LeftSide setClient={setClient} />

                {/* Right side */}
                <RightSide client={client} socket={socket} />
            </div>
        </div>
    )
}

export default Chat