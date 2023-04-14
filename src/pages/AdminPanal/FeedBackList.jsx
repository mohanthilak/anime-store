import {useState, useEffect} from 'react'
import LeftAdmin from './LeftAdmin'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'

const FeedBackListComponent = () => {
    const axiosPrivate = useAxiosPrivate()
    const [feedbacks, setFeedbacks] = useState([])
    
    useEffect(()=>{
        axiosPrivate.get("/feedback/all-feebacks").then(res=>{
            console.log(res)
            if(res.data.success){
                setFeedbacks(res.data.data)
            }
        }).catch(e=>{
            console.log(e);
        })
    }, [])
    const ConvertUnixToLocalTime = (unixTime) => {
        let date = new Date(unixTime * 1000);
        date.setMilliseconds(0)
        console.log(date)
        return date.toLocaleTimeString([], {hour12: true, hour: '2-digit', minute:'2-digit', second: undefined, milliseconds: false});
    }

    return (
        <div className='p-5 w-3/4 h-[91vh] overflow-y-scroll'>
            <div>
                <h1 className='text-2xl font-bold'>Feedbacks</h1>
            </div>
            {feedbacks?.length > 0 && feedbacks.map((item,i)=>
                <div key={i} className='border-2 border-black my-2 p-5'>
                    <h1><span className='font-semibold text-lg'>Category:</span> {item.category}</h1>
                    <h1><span className='font-semibold text-lg'>Feedback:</span> {item.feedback}</h1>
                    {/* <h1><span className='font-semibold text-lg'>Date:</span> {item.feedback}</h1> */}
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