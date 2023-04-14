import React, {useEffect, useState} from 'react'
import LeftAdmin from './LeftAdmin'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import {AiOutlineDelete} from "react-icons/ai"
const UserDetailsCompo = () => {
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState([])
    const getAllUser = () =>{
        axiosPrivate.get("/user/all-users").then(res=>{
            console.log(res.data)
            if(res.data.success){
                setUsers(res.data.users);
            }
        })
    }
    useEffect(()=>{
        getAllUser();
    }, [])

    // const HandleMakeAdminOrUser = ({uid, role}) => {
    //     axiosPrivate.post("/user/edit-role", {
    //         uid, role
    //     }).then(res=>{
    //         console.log(res);
    //         if(res.data.success){
    //             getAllUser()
    //         }
    //     }).catch(e=>{
    //         console.error(e)
    //     })
    // }

    const HandleDeleteUser = (uid) => {
        axiosPrivate.delete(`/user/delete/${uid}`).then(res=>{
            console.log(res);
            if(res.data.success){
                getAllUser()
            }
        }).catch(e=>{
            console.log(e)
        })
    }

    return (
        <div className='p-5 w-4/5'>
            <div className="mt-2 flex justify-center">
                <table className='border-2 border-black table-auto text-center'>
                    <thead className='border-b-2 border-black'> 
                        <tr>
                            <th className='px-4'>SL No.</th>
                            <th className='px-4 border-x-2 border-black'>username</th>
                            <th className='px-4'>email</th> 
                            <th className='px-4 border-x-2 border-black'>role</th>
                            <th className='px-4'>id</th>
                            <th className='px-4 border-x-2 border-black'>Delete</th>
                            {/* <th className='px-4'>Make Admin/User</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((el, i)=> (
                            <tr key={i} className="text-center border-b-2 border-black">
                                <td className='px-4' >{i+1}</td>
                                <td className='px-4 border-x-2 border-black'>{el.username}</td>
                                <td className='px-4' >{el.email}</td>
                                <td className='px-4 border-x-2 border-black'>{el.role}</td>
                                <td className='px-4' >{el._id}</td>
                                <td className='px-4 border-x-2 border-black'><AiOutlineDelete onClick={()=>HandleDeleteUser(el._id)} className='cursor-pointer hover:text-red-500' /></td>
                                {/* <td className='px-4 hover:text-blue-500 cursor-pointer' onClick={()=>HandleMakeAdminOrUser({uid: el._id, role: el.role === "admin"?"user":"admin"})}>{el.role === "admin"? "Make User" : "Make Admin"}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const UsersDetails = () => {
  return (
    <div className='flex'>
        <LeftAdmin />
        <UserDetailsCompo />
    </div>
  )
}

export default UsersDetails