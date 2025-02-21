import { useEffect } from 'react'
import { useCallback} from 'react'
import { useState } from 'react'
import { useRef } from 'react'


function App() {
  const [length,setLength] = useState(8)
  const [numbers,setNumbers] = useState(true)
  const [chara,setChar] = useState(true)
  const [password,setPass] = useState("")
  const passref = useRef(null)

  const copyclip = useCallback(() =>{
    window.navigator.clipboard.writeText(password)
    passref.current?.select()
    passref.current?.setSelectionRange(0,5)
  },[password]);
  const passgen = useCallback(()=>{
    let pass = ""
    let strings = "asfghjklzxcvbnmqwertyuiop";
    const num ="098765321";
    const chaaa ="!@#$%^&*(){}<>?:][";
    if(numbers) strings+=num;
    if(chara) strings+=chaaa;
    for (let index = 0; index < length; index++) {
      let charrr = Math.floor(Math.random()*strings.length)
      pass += strings.charAt(charrr)
    }
    setPass(pass)
  },[length,numbers,chara]);
  

  useEffect(()=>{
    passgen()
  },[length,numbers,chara])

  return (
    <>
     <div className='w-full max-w-md mx-auto
     rounded-lg px-4 my-8 text-orange-500 bg-gray-700' >
     <h1 className='text-white text-center'>Password Generator</h1>
     <input
      type="text"
     value={password}
     className='outline-none w-full py-1 px-3 bg-white rounded '
     placeholder="password"   
     readOnly
     ref={passref}
    
    />
    <button
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
    onClick={copyclip}
    >copy</button>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numbers}
        id="numberinput"
        onChange = {()=>{
          setNumbers((prev) =>!prev)
        }}

        />
        <label htmlFor="">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={chara}
        id="numberinput"
        onChange = {()=>{
          setChar((prev) =>!prev)
        }}
        />
        <label htmlFor="">character</label>
      
    </div>
    </div>
    </div>
    </>
  )
}

export default App;
