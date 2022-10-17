import React,{useState} from 'react'
import AddData from './AddData';
function Navbar(props){
    const [isShow, setIsShow]=useState(false)
    const [msg, setMsg]= useState("Add")
    var s=isShow;
return(
    <div>
    <div className='container-fluid bg-success p-3' style={{color:"White"}}>
       <span className='fs-5'>IMDB Clone</span>   
      {!isShow && <button type="" className='btn btn-outline-light ms-5' onClick={()=>{setIsShow(!isShow);setMsg("")}}>Add Movie</button>} 
        {isShow && <button className='btn btn-danger ms-3' onClick={()=>{setIsShow(!isShow);setMsg("Add Movie")}}>Cancel</button>}
    </div>
    <div>
        {isShow && <AddData/>}
    </div>
    </div>
);

}
export default Navbar