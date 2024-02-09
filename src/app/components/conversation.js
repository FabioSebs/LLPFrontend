import React from 'react'

function Convo({conversations}) {
  return (
    <>
    {conversations ? 
    <div className='h-28 w-3/4 overflow-y-scroll'> 
        <ConvoList conversations={conversations}/> 
    </div>: <></>}
    </>
  )
}

function ConvoList({conversations}) {
    return (
        <>
            {conversations.map(c => {
                switch(c.recipient) {
                    case 'ai':
                        return <div className='w-3/4 h-14 rounded-lg px-3 justify-end bg-slate-500 text-white'>{c.message}</div>
                    case 'human':
                        return <div className='w-3/4 h-14 rounded-lg px-3 justify-end bg-yellow-300 text-black'>{c.message}</div>
                    default:
                        return <></>
                }

            })}
        </>
    )
}

export default Convo