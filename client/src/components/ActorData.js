import React ,{useState}from 'react'
import Axios from 'axios'
function ActorData(){
    const [actorName, setActorName]=useState()
    const [actorGender, setActorGender]= useState()
    const [actorDob, setActorDob]= useState()
    const [actorBio, setActorBio]=useState()
    const submitActorData = () => {

        Axios.post("http://localhost:3001/actor", {
            actorName: actorName,
            actorGender: actorGender,
            actorDob: actorDob,
            actorBio: actorBio
        }).then(
            console.log("Data inserted")
        );


    }
    return(
        <form className='form'>
        <label htmlFor="act_name" className='form-label'>Actor Name</label>
        <input type="text" id="act_name" className='form-control' required onChange={(e) => 
        setActorName(e.target.value)        }/>
        <label htmlFor="act_gender" className='form-label'>Gender</label>
        <input type="text" id="act_gender" className='form-control'  onChange={(e) => 
        setActorGender(e.target.value) 
        }/>
        <label htmlFor="act_dob" className='form-label'>DOB</label>
        <input type="date" id="act_dob" className='form-control'  onChange={(e) => 
        setActorDob(e.target.value) 
        }/>
         <label htmlFor="act_bio" className='form-label'>Bio</label>
        <input type="text" id="act_bio" className='form-control'  onChange={(e) => 
        setActorBio(e.target.value) 
        }/>
        <button type="submit" onClick={() => submitActorData() } className='btn btn-primary  mt-3'>Submit</button>
        </form>
    );
}
export default ActorData