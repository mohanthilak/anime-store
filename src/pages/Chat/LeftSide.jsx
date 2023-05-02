import React, { useEffect, useState } from 'react'

import { CgProfile } from "react-icons/cg"
import { RxDotsHorizontal } from "react-icons/rx"
import { AiOutlineSearch } from "react-icons/ai"
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import useAuth from "../../Hooks/useAuth"
import propic from "./profilepic.jpg"

const LeftSide = ({setClient}) => {
    const [searchText, setSearchText] = useState("");
    const [searchedUsers, setSearchUsers] = useState([])
    const [chats, setChats] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const {auth} = useAuth();

    useEffect(()=>{
        axiosPrivate.get(`/chat/get-user-chat/${auth.uid}`).then(res=>{
            console.log(res.data);
            if(res.data.success){
                setChats(res.data.data);
            }
        }).catch(e=>{
            console.error(e);
        })
    }, [])

    useEffect(()=>{
        if(searchText.length>0){
            axiosPrivate.get(`/user/search-users/${searchText}`).then(res=>{
                if(res.data.success) setSearchUsers(res.data.data)
            }).catch(e=>{
                console.error("Error", e);
            })
        }else{
            setSearchUsers([])
        }
    }, [searchText])

  return (
    <div className=' w-1/4 h-[86vh] px-2 border-r-2 rounded-xl '>
        {/* Menu Bar */}
        <div className='flex justify-between px-4 py-2'>
            <div>
                <CgProfile size={30} className="text-gray-400 font-light" />
            </div>
            <div>
                <RxDotsHorizontal size={30} />
            </div>
        </div>

        {/* Search Bar */}
        <form action="">
            <div className='relative'>
                <AiOutlineSearch size={20} className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
                <input type="text" onChange={(e)=>{setSearchText(e.target.value)}} placeholder="Search" className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" />
            </div>
        </form>

        {/* Contacts */}
        <div className='my-3 px-2 h-[68vh]   overflow-y-scroll'>
            {/* Contact */}
            {/* <div onClick={()=>setClient("ads")} className='cursor-pointer flex items-center'>
                <img className='h-[50px] w-[50px] rounded-full ' src="https://resizing.flixster.com/gn47S-fE0l-z2a5CFmz45-397JU=/218x280/v2/https://flxt.tmsimg.com/assets/573762_v9_bc.jpg"  alt="contact-profile-picture" />
                <div className=" px-2 w-full">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-lg font-semibold'>Dakota</h1>
                        </div>
                        <div>
                            <h1 className="text-xs">12:39AM</h1>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">Hi Mohan, let's meet up soon</p>
                    </div>
                </div>
            </div> */}
            <hr className='h-[2px] my-4 bg-gray-200 ' />
            {searchedUsers.length > 0 ? searchedUsers.map((item, i)=>(
                <div key={i}>
                <div onClick={()=>setClient(item)} className='cursor-pointer flex items-center'>
                    <img className='h-[50px] w-[50px] rounded-full ' src={propic}  alt="contact-profile-picture" />
                    <div className=" px-2 w-full">
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-lg font-semibold'>{item.username}</h1>
                            </div>
                            <div>
                                <h1 className="text-xs">{item.username}</h1>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm">{item.username + "..."}</p>
                        </div>
                    </div>
                </div>
                <hr className='h-[2px] my-4 bg-gray-200 ' />
                </div>
            )): chats.length>0 && chats.map((item, i)=>(
                <div key={i}>
                <div onClick={()=>setClient(item.users[0])} className='cursor-pointer flex items-center'>
                    <img className='h-[50px] w-[50px] rounded-full ' src={propic}  alt="contact-profile-picture" />
                    <div className=" px-2 w-full">
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-lg font-semibold'>{item.users[0].username}</h1>
                            </div>
                            <div>
                                <h1 className="text-xs">{item.username}</h1>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm">{item.messages[item.messages.length-1].messageText.substring(0,30)}</p>
                        </div>
                    </div>
                </div>
                <hr className='h-[2px] my-4 bg-gray-200 ' />
                </div>
            ))}





{/* 

chats.length>0 && chats.map((item, i)=>{
                <div key={i}>
                <div onClick={()=>setClient(item.users[0])} className='cursor-pointer flex items-center'>
                    <img className='h-[50px] w-[50px] rounded-full ' src="https://resizing.flixster.com/gn47S-fE0l-z2a5CFmz45-397JU=/218x280/v2/https://flxt.tmsimg.com/assets/573762_v9_bc.jpg"  alt="contact-profile-picture" />
                    <div className=" px-2 w-full">
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-lg font-semibold'>{item.users[0].username}</h1>
                            </div>
                            <div>
                                <h1 className="text-xs">{item.messages[item.messages.length-1]}</h1>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm">{item.username + "..."}</p>
                        </div>
                    </div>
                </div>
                <hr className='h-[2px] my-4 bg-gray-200 ' />
                </div>
            }) */}
























            {/* {searchedUsers.length > 0 && searchedUsers.map((item, i)=>(
                <div key={i}>
                <div onClick={()=>setClient(item)} className='cursor-pointer flex items-center'>
                    <img className='h-[50px] w-[50px] rounded-full ' src="https://resizing.flixster.com/gn47S-fE0l-z2a5CFmz45-397JU=/218x280/v2/https://flxt.tmsimg.com/assets/573762_v9_bc.jpg"  alt="contact-profile-picture" />
                    <div className=" px-2 w-full">
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-lg font-semibold'>{item.username}</h1>
                            </div>
                            <div>
                                <h1 className="text-xs">{item.username}</h1>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm">{item.username + "..."}</p>
                        </div>
                    </div>
                </div>
                <hr className='h-[2px] my-4 bg-gray-200 ' />
                </div>
            ))} */}
            
        </div>
    </div >
  )
}

export default LeftSide