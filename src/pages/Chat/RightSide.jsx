import {useState, useEffect} from "react";
import {MdOutlineAttachFile} from "react-icons/md"
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth"
import dazai from "./dazai.jpg"

const RightSide = ({client, socket}) => {
    const axiosPrivate = useAxiosPrivate();
    const [messageInput, setMessageInput] = useState();
    const [messages, setMessages] = useState([]);

    const {auth} = useAuth();
    const ConvertUnixToLocalTime = (unixTime) => {
        let date = new Date(unixTime * 1000);
        date.setMilliseconds(0)
        console.log(date)
        return date.toLocaleTimeString([], {hour12: true, hour: '2-digit', minute:'2-digit', second: undefined, milliseconds: false});
    }
    
    const sendText = () => {
        // setMessages([...messages, messageInput]);
        console.log(messageInput)
        if(messageInput.length>0){
            console.log(messageInput)
            let dateTime = new Date()
            dateTime = Math.floor(dateTime.getTime() / 1000);
            socket.emit("send-message", ({
                messageText: messageInput,
                from: auth.uid,
                to: client._id,
                dateTime
            }))
        }
    }

    socket.on("message-send-status", (data)=>{
        if(data.messageSent){
            setMessageInput("")
            setMessages([...messages, data.message]);
        }
    })

    useEffect(()=>{
        console.log("client:", client)
        if(client) {
            console.log("Inside Effect if")
            axiosPrivate.post("/chat/get-chat",{
               users: [auth.uid, client._id] 
            }).then(res=>{
                if(res.data.success){
                    if(res.data.message === "chat found"){
                        console.log("Chat Found")
                        setMessages(res.data.data)
                    }else{
                        console.log("Chat Not Found")
                        setMessages([])
                    }
                }
            }).catch(err=>{
                console.error("Message",err);
            })
        }
    }, [client])
    return (
        <div className=' w-3/4 h-[86vh] rounded-xl overflow-hidden p-2'>
            {client? <>
            {/* Menu Bar */}
            <div className='h-[10%] px-2 flex items-center border-b-2'>
                <div className='flex items-center gap-2'>
                    <img className='h-[45px] w-[45px] rounded-full ' src="https://resizing.flixster.com/gn47S-fE0l-z2a5CFmz45-397JU=/218x280/v2/https://flxt.tmsimg.com/assets/573762_v9_bc.jpg" alt="contact-profile-picture" />
                    <h1 className='font-semibold text-2xl'>{client.username}</h1>
                </div>
            </div>
            {/* Chat Screen */}
            <div className='relative p-2 h-[82%] overflow-y-scroll border-b-2'>
                <div className='flex flex-col'>
                    <div>
                        <p className='text-sm text-center'>12/1/2023</p>
                    </div>
                    <div className='max-w-[45%] p-2 bg-green-200 my-2 self-end rounded-xl overflow-hidden'>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, dolorum, necessitatibus repellat unde magni blanditiis itaque maiores eum expedita alias eaque saepe molestias accusamus! Reiciendis quaerat temporibus porro accusantium! asdada necessitatibus repellat unde magni blanditiismagni blanditiis</p>
                        <p className=" text-right text-sm my-1">12:20PM</p>
                    </div>
                    <div className='max-w-[45%] my-2 self-start rounded-xl overflow-hidden'>
                        <p className='p-2 bg-green-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, dolorum, necessitatibus repellat unde magni blanditiis itaque maiores eum expedita alias eaque saepe molestias accusamus! Reiciendis quaerat temporibus porro accusantium!</p>
                    </div>
                    <div className='max-w-[45%] my-2 self-end rounded-xl overflow-hidden'>
                        <p className='p-2 bg-green-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, dolorum, necessitatibus repellat unde magni blanditiis itaque maiores eum expedita alias eaque saepe molestias accusamus! Reiciendis quaerat temporibus porro accusantium!</p>
                    </div>
                    <div className='max-w-[45%] my-2 self-start rounded-xl overflow-hidden'>
                        <p className='p-2 bg-green-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, dolorum, necessitatibus repellat unde magni blanditiis itaque maiores eum expedita alias eaque saepe molestias accusamus! Reiciendis quaerat temporibus porro accusantium!</p>
                    </div>
                    <div className='max-w-[45%] my-2 self-end rounded-xl overflow-hidden'>
                        <p className='p-2 bg-green-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, dolorum, necessitatibus repellat unde magni blanditiis itaque maiores eum expedita alias eaque saepe molestias accusamus! Reiciendis quaerat temporibus porro accusantium!</p>
                    </div>
                    <div className='max-w-[45%] my-2 self-end rounded-xl overflow-hidden'>
                        <p className='p-2 bg-green-200'>porro accusantium!</p>
                    </div>
                    {messages.length>0 && messages.map((item, i)=>(
                        <div key={i} className={`max-w-[45%] my-2 ${item.from === auth.uid ? "self-end": "self-start"} rounded-xl overflow-hidden p-2 bg-green-200`}>
                        <p className=' text-base'>{item.messageText}</p>
                        <p className=" text-right text-xs my-1">{ConvertUnixToLocalTime(item.dateTime)}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Text Menu */}
            <div className='h-[8%] gap-4 flex items-center px-2'>
                <div className='bg-gray-300 h-[80%] w-[90%] rounded-3xl px-2 flex items-center gap-2'>
                    <MdOutlineAttachFile size={22} />
                    <input type="text" value={messageInput} onChange={(e)=>setMessageInput(e.target.value)} onKeyDown={(e) => {if(e.key === "Enter") sendText();}} className='w-[95%] h-[100%] focus:outline-none text-lg bg-gray-300' />
                </div>
                <div>
                    <button onClick={()=>sendText()} className='bg-black text-white px-2 py-1'>Send</button>
                </div>
            </div></>: <div className=" h-[84vh] flex justify-center items-center ">
                    <img src={dazai} className="w-56 h-auto" alt="" />
                </div>}
        </div>
    )
}

export default RightSide;