import React, {useEffect, useState} from 'react'
import LeftAdmin from './LeftAdmin';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';

const Report = () => {
    const axiosPrivate = useAxiosPrivate();
    const [quizCount, setQuizCount] = useState(0);
    const [merchCount, setMerchCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(()=>{
        axiosPrivate.get('/user/get-count-stats').then(res=>{
            setQuizCount(res.data.q)
            setUserCount(res.data.u)
            setMerchCount(res.data.p)
        })
    }, [])
    return (
        <div className='p-5 pt-20  w-3/4 text-white '>
            <div className='flex flex-col gap-12'>
                <div className='flex justify-around'>
                    <div className='w-[175px] h-[175px] bg-red-500 rounded-3xl flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className='text-2xl font-bold'>Quiz</h1>
                            <p className='text-xl'>Number: {quizCount}</p>
                        </div>
                    </div>
                    <div className='w-[175px] h-[175px] bg-red-500 rounded-3xl flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className='text-2xl font-bold'>Merch</h1>
                            <p className='text-xl'>Number: {merchCount}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div className='w-[175px] h-[175px] bg-red-500 rounded-3xl flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className='text-2xl font-bold'>User</h1>
                            <p className='text-xl'>Count: {userCount}</p>
                        </div>
                    </div>
                    <div className='w-[175px] h-[175px] bg-red-500 rounded-3xl'></div>
                </div>
            </div>
        </div>
    )
}

const AdminPanal = () => {
  return (
    <div className='flex'>
        <LeftAdmin />
        <Report />
    </div>
  )
}

export default AdminPanal