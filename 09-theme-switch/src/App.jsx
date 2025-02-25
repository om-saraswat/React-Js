import { useEffect, useState } from 'react'
import { Themeprovider } from './Context/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  
  
  const [themeMode, setthemeMode] = useState("light")

  const lightTheme =()=>{
    setthemeMode("light")
  }

  const darkTheme =()=>{
    setthemeMode("dark")
  }
  
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);
  


  return (
  <Themeprovider value={{themeMode,lightTheme,darkTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
  </Themeprovider>
  )
}

export default App
