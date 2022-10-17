import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import ActorData from './ActorData'
import ProducerData from './ProducerData'
function AddData() {
    const [movieName, setMovieName] = useState()
    const [year, setYear] = useState()
    const [plot, setPlot] = useState()
    const [actorList, setActorList]= useState([])
    const [producerList, setProducerList]= useState([])
    const [actor, setActor]= useState()
    const [producer, setProducer]= useState()
    const[isShown, setIsShown]=useState('')
    const[isShown2, setIsShown2]=useState(false)
     useEffect(()=>{
        Axios.get("http://localhost:3001/actor").then((response)=>{
            setActorList(response.data)
        });
        Axios.get("http://localhost:3001/producer").then((response)=>{
            setProducerList(response.data)
        });
     },[]);
    const submitData = () => {

        Axios.post("http://localhost:3001/movie", {
            movieName: movieName,
            year: year,
            plot: plot,
            actor: actor,
            producer: producer

        }).then(
            window.location.reload()
        );


    }

   return (
    <div className='row'>
    <div className='col-4 form m-5'>
        <div className='form'>
        <label htmlFor="mo_name" className='form-label'>Movie Name</label>
        <input type="text" id="mo_name" className='form-control' required onChange={(e) => 
        setMovieName(e.target.value)    }/>

<label htmlFor="actList" className="form-label">Actor</label>
        <input className="form-control" list="actdata" id="actList"  onChange={(e) => 
        setActor(e.target.value)        }/>
         <datalist id="actdata">
            {actorList.map((val)=>{
             return <option value={val.Name}></option>
            })}
        </datalist>
        <br/>
        <button className='btn btn-warning' onClick={()=>{setIsShown(true)}}> New Actor </button>
        <br/> 
        <br/>
        <label htmlFor="exampleDataList" className="form-label">Producer</label>
        <input className="form-control" list="datalistOptions" id="exampleDataList" onChange={(e) => 
        setProducer(e.target.value)        } />
         <datalist id="datalistOptions">
            {producerList.map((val)=>{
             return <option value={val.Name}></option>
            })}
        </datalist>
        <br/>
        <button className='btn btn-warning' onClick={()=>{setIsShown2(true)}}> New Producer </button>
        <br/> 
        <br/>
        <label htmlFor="mo_date" className='form-label'>Year of Release</label>
        <input type="text" id="mo_date" className='form-control' required onChange={(e) => 
        setYear(e.target.value) 
        }/>
        <label htmlFor="mo_plot" className='form-label'>Plot</label>
        <input type="text" id="mo_plot" className='form-control' required onChange={(e) => 
        setPlot(e.target.value) 
        }/>
        
        <button type="submit" onClick={() => submitData() } className='btn btn-primary  mt-3'>Submit</button>
        </div>
    </div>
    <div className='col-5 m-5'>
        {isShown && <ActorData/>}
        {isShown2 && <ProducerData/>}
    </div>
    </div>
   );



}
export default AddData