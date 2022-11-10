import React, { useState ,useContext} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { newContext } from '../../Context/Context';
import "../../../App.css"

function Filter() {
  const{filterInp,
    setFilterInp,
    list,
    setList,
    setResetReq,
    resetReq}=useContext(newContext)

  const [filterIcn, setFilterIcn] = useState(false)
  
const handlerSearchBtn=()=>{
 const res=list.filter(item=>filterInp===""?setResetReq(!resetReq): item.title.includes(filterInp));
 setFilterInp("")
  setList(res)
}

  const handlerInputSearch=(e)=>{
    setFilterInp(e.target.value)
  }
  return (
    <div className='filter'>
      
      <IconButton type="button" sx={{ p: '10px' }} aria-label="filter" className='my-3' onClick={()=>setFilterIcn(!filterIcn)}>
        <FilterAltIcon />
      </IconButton>
      {filterIcn && <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          inputProps={{ 'aria-label': 'Searchs' }}
          value={filterInp}
          onChange={(e)=>handlerInputSearch(e)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handlerSearchBtn}>
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      </Paper>}
    </div>
  )
}

export default Filter