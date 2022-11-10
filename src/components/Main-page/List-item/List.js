import React,{useState,useContext} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material'
import '../../../App.css'
import ModalForm from '../Modal/ModalForm';
import{newContext} from '../../Context/Context'
function List({ currentItems }) {
  
  const {open, setOpen}= useContext(newContext)
  const [modalInp, setModalInp] = useState('')
  
  const editHandler=(data)=>{
    setModalInp(data)
    setOpen(true)
  }
  return (
    <ul>
      {currentItems.map(item => {
        return (
          <li key={item.id} className='d-flex justify-content-center align-items-center'>
            <h5 className='text-center p-3 bg-aliceblur'>
              {item.title}
            </h5>
            <Button variant="outlined" className='mx-2' onClick={()=>editHandler(item)}>  <EditIcon /> </Button>
          </li>
        )
      })}
      
      <ModalForm open={open} data={modalInp}/>
    </ul>

  )
}

export default List