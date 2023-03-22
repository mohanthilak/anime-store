import React from 'react'
import { CgProfile } from "react-icons/cg"
import { RxDotsHorizontal } from "react-icons/rx"
import { AiOutlineSearch } from "react-icons/ai"
import {MdOutlineAttachFile} from "react-icons/md"

const Chat = () => {
    return (
        <div className='px-6 md:px-8 h-[91vh] flex justify-center items-center'>
            <div className='h-[86vh] border-2 flex w-[100vw] shadow-2xl'>

                {/* Left side */}
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
                            <input type="text" placeholder="Search" className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" />
                        </div>
                    </form>

                    {/* Contacts */}
                    <div className='my-3 px-2 h-[68vh]   overflow-y-scroll'>
                        {/* Contact */}
                        <div className='flex items-center'>
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
                        </div>
                        <hr className='h-[2px] my-4 bg-gray-200 ' />
                        <div className='flex items-center'>
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
                        </div>
                        <hr className='h-[2px] my-4 bg-gray-200 ' />
                        <div className='flex items-center'>
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
                        </div>
                        <hr className='h-[2px] my-4 bg-gray-200 ' />
                        <div className='flex items-center'>
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
                        </div>
                        <hr className='h-[2px] my-4 bg-gray-200 ' />
                        <div className='flex items-center'>
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
                        </div>
                        <hr className='h-[2px] my-4 bg-gray-200 ' />
                        <div className='flex items-center'>
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
                        </div>
                        <hr className='h-[2px] my-4 bg-gray-200 ' />
                    </div>
                </div >

                {/* Right side */}
                <div className=' w-3/4 h-[86vh] rounded-xl overflow-hidden p-2'>
                    {/* Menu Bar */}
                    <div className='h-[10%] px-2 flex items-center border-b-2'>
                        <div className='flex items-center gap-2'>
                         <img className='h-[45px] w-[45px] rounded-full ' src="https://resizing.flixster.com/gn47S-fE0l-z2a5CFmz45-397JU=/218x280/v2/https://flxt.tmsimg.com/assets/573762_v9_bc.jpg" alt="contact-profile-picture" />
                         <h1 className='font-semibold text-2xl'>Dakota</h1>
                        </div>
                    </div>
                    {/* Chat Screen */}
                    <div className='relative p-2 h-[82%] overflow-y-scroll border-b-2'>
                        <div className='flex flex-col'>
                            <div>
                                <p className='text-sm text-center'>12/1/2023</p>
                            </div>
                            <div className='max-w-[45%]  my-2 self-end rounded-xl overflow-hidden'>
                                <p className='p-2 bg-green-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, dolorum, necessitatibus repellat unde magni blanditiis itaque maiores eum expedita alias eaque saepe molestias accusamus! Reiciendis quaerat temporibus porro accusantium!</p>
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
                        </div>
                    </div>
                    {/* Text Menu */}
                    <div className='h-[8%] gap-4 flex items-center px-2'>
                        <div className='bg-gray-100 h-[80%] w-[90%] rounded-lg flex items-center '>
                            <MdOutlineAttachFile size={22} />
                            <input type="text" className='w-[95%] h-[100%] focus:outline-none text-lg bg-gray-100' />
                        </div>
                        <div>
                            <button className='bg-black text-white px-2 py-1'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat