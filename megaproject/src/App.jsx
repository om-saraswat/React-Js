import { useState } from 'react'
import conf from "../src/config/conf"

function App() {
  const [count, setCount] = useState(0)
  console.log(conf.appwritebucketid)
  return (
   <h1 className='text-red-700'>heellllooo</h1>
  )
}

export default App
