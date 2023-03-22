import React, {useEffect, useState} from 'react'
import LeftAdmin from './LeftAdmin'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'

const UserDetailsCompo = () => {
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axiosPrivate.get("/user/all-users").then(res=>{
            console.log(res.data)
            if(res.data.success){
                setUsers(res.data.users);
            }
        })
    }, [])
    return (
        <div className='p-5 w-4/5'>
            <div className="mt-2 flex justify-center">
                <table className='border-2 border-black table-auto text-center'>
                    <thead className='border-b-2 border-black'> 
                        <tr>
                            <th className='px-4'>username</th>
                            <th className='px-4'>email</th>
                            <th className='px-4'>role</th>
                            <th className='px-4'>id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((el, i)=> (
                            <tr key={i} className="text-center">
                                <td>{el.username}</td>
                                <td>{el.email}</td>
                                <td>{el.role}</td>
                                <td>{el._id}</td>
                                <td>10</td>
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