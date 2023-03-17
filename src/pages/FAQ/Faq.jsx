import React from 'react'

const Faq = () => {
  return (
    <div className='px-6 md:px-12 md:mt-8 mb-4'>
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>FAQ</h1>
            {/* <hr className=' mt-1 w-36 h-[3px] border:none text-black bg-black' /> */}
        </div>
        <div className='mt-2 mx-6'>
            <div className='my-4'>
                <p className='font-bold'>What is AnimeSTORE?</p>
                <p>AnimeSTORE is an all in one platform for anime lovers. You can purchase your favorite merchandise, attempt challenging quizzes as well as chat with other users in the same portal.</p>
            </div>


            <div className='my-4'>
                <p className='font-bold'>Do you offer return policy?</p>
                <p>As of now we do not offer return policy.</p>
            </div>


            <div className='my-4'>
                <p className='font-bold'>What modes of payment are accepted?</p>
                <p>We accept payments by credit cards, debit cards. Payments need to be made in advance through our application.</p>
            </div>


            <div className='my-4'>
                <p className='font-bold'>Can you watch anime in this website?</p>
                <p>As of now, users cannot watch animes. Our future enhancement is to make this website a full fledged anime website, which means users can watch animes here.</p>
            </div>

            <div className='my-4'>
                <p className='font-bold'>Without an account, can we use this website?</p>
                <p>No,we strictly request customers to sign up in order to use our website for security reasons.</p>
            </div>
        </div>
    </div>
  )
}

export default Faq