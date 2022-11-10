import  { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { newContext } from '../../Context/Context';
import '../../../App.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm({ data }) {
  const { open,
     setOpen,
     list,
     setList} = useContext(newContext)

  const [inpval, setInpval] = useState(data.title)
  const [editTitle, setEditTitle] = useState()

  const handleClose = () => {
    setOpen(false);
  }

  const inputHandler = (e) => {
    setInpval(e.target.value)
  }
  
  useEffect(() => {
    setInpval(data.title)
    setEditTitle(list.title)
  }, [data,list])

  const handlePutValue=(data,inpval)=>{
    const newList=list.map(item=>{
      if(item.id===data.id){
        return {...item,title:inpval}
      }
      return item
    })
    setList(newList)
  }
 
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a Modal
          </Typography>
          <div>
            <TextField id="standard-basic" label="Standard" variant="standard" value={inpval} onChange={(e) => inputHandler(e)} />
            <div className='d-flex'>
              <Button variant="contained" color="success" className='m-3' onClick={()=>handlePutValue(data,inpval)}>
                Record
              </Button>
              <Button variant="outlined" color="error" className='m-3' onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}