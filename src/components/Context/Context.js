import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const newContext = createContext('def');

export function AppContext({ children }) {
    const [open, setOpen] = useState(false)
    const [list, setList] = useState([])
    const [dataPut, setDataPut] = useState([])
    const [filterInp, setFilterInp] = useState("")
    const [user, setUser] = useState(false)
    const [userInfo, setuserInfo] = useState('')
    const [resetReq, setResetReq] = useState(false)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setList(Object.values(res.data)))
            .catch(err => console.log(err))
           
    }, [resetReq])
       
      
   
    return (
        <newContext.Provider value={{
             open, 
             setOpen,
              list,
               setList,
               dataPut,
               setDataPut,
               setFilterInp,
               filterInp,user,
                setUser,
                resetReq,
                setResetReq,
                userInfo,
                 setuserInfo}}>
            {children}
        </newContext.Provider>
    )
}
export default AppContext;