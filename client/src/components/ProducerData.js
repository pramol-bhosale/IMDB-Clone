import React,{useState} from 'react'
import Axios from 'axios'
function ProducerData(){
    const [producerName, setProducerName]=useState()
    const [producerGender, setProducerGender]= useState()
    const [producerDob, setProducerDob]= useState()
    const [producerBio, setProducerBio]=useState()

    const submitProducerData = () => {

        Axios.post("http://localhost:3001/producer", {
            producerName: producerName,
            producerGender: producerGender,
            producerDob: producerDob,
            producerBio: producerBio
        }).then(
            console.log("Data inserted")
        );


    }

return (
    <div className='form'>
    <div className='text-muted'>
        First fill details about new actor and submit it
    </div>
    <label htmlFor="prod_name" className='form-label'>Producer Name</label>
    <input type="text" id="prod_name" className='form-control' required onChange={(e) => 
    setProducerName(e.target.value)        }/>
    <label htmlFor="prod_gender" className='form-label'>Gender</label>
    <input type="text" id="prod_gender" className='form-control'  onChange={(e) => 
    setProducerGender(e.target.value) 
    }/>
    <label htmlFor="prod_dob" className='form-label'>DOB</label>
    <input type="date" id="prod_dob" className='form-control'  onChange={(e) => 
    setProducerDob(e.target.value) 
    }/>
     <label htmlFor="prod_bio" className='form-label'>Bio</label>
    <input type="text" id="prod_bio" className='form-control'  onChange={(e) => 
    setProducerBio(e.target.value) 
    }/>
    <button type="submit" onClick={() => submitProducerData() } className='btn btn-primary  mt-3'>Submit</button>
    </div>

);



}
export default ProducerData 