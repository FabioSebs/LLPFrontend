import axios from "axios"

function Chat({uid}) {

    async function makeChat(form) {
        "use server";
        try {
            const res = await axios.post(`http://localhost:8000/v1/questions/create/${uid}`,{ //NOTE: append to conversations
                question: form.get("question") 
            })

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form className='flex w-full h-16 items-center justify-center gap-3' action={makeChat}>
        <button type="submit" className='w-1/5 h-14 bg-yellow-300 text-white flex justify-center items-center text-center hover:scale-110 scale-100 transition-all duration-100 rounded-xl'> ➡️ </button>
        <input className='w-4/5 h-14 px-3 border-black rounded-lg bg-slate-500 text-white' name="question" placeholder="Type your response here!"/>
    </form>        
  )
}

export default Chat