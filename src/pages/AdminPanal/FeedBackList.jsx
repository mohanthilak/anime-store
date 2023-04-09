import {useState, useEffect} from 'react'
import LeftAdmin from './LeftAdmin'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'

const FeedBackListComponent = () => {
    const axiosPrivate = useAxiosPrivate()
    const [feedbacks, setFeedbacks] = useState([])
    
    useEffect(()=>{
        axiosPrivate.get("/feedback/all-feebacks").then(res=>{
            if(res.data.success){
                setFeedbacks(res.data.data.data)
            }
        }).catch(e=>{
            console.log(e);
        })
    }, [])


    return (
        <div className='p-5 w-3/4'>
            {feedbacks?.length > 0 && (
                <div className='border-2 border-black p-5'>
                    <h1>hihihih</h1>
                </div>
            )}
        </div>
    )
}


const FeedBackList = () => {
    return (
        <div className='flex'>
            <LeftAdmin />
            <FeedBackListComponent />
        </div>
    )
}

export default FeedBackList