import React ,{useState} from 'react'
import axios from 'axios'
import { data } from 'browserslist'

function Post() {

   const url="http://metizcrm.com/rashmiengicondev/Apistoke/place_stoke_manage"
    const [Data, setdata] = useState({
        pickup_person:"",
        agency_id:"",
        item_id:"",
        quantity:"",
        created_date:""
    })

    const handle =(e) =>{
        const newData={...Data}
        newData[e.target.id]=e.target.value
        setdata(newData)
        console.log(newData)
    }
    
    const sendData = (e)=>{
        e.preventDefault();
       axios.post(url,{
        pickup_person:Data.pickup_person,
        agency_id:parseInt(Data.agency_id),
        item_id:parseInt(Data.item_id),
        quantity:parseInt(Data.quantity),
        created_date:Data.created_date
       });
       setdata({
        pickup_person:"",
        agency_id:"",
        item_id:"",
        quantity:"",
        created_date:""
          } )
      
       
    }
    
    return (
     <>
     <div className="container rounded bg-dark mt-5">
     <form className="py-3" onSubmit={(e)=>sendData(e)}>
  <div className="mb-3">
      <div className=" text-light text-center">
    <label htmlFor="exampleInputEmail1" className="form-label text-light text-center">pickup_person</label>
    </div>
    <input type="text" className="form-control" onChange={(e)=>handle(e)} id="pickup_person" value={Data.pickup_person} aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
  <div className=" text-light text-center">
    <label htmlFor="exampleInputEmail1" className="form-label text-light text-center">agency_id</label>
    </div>
    <input type="number" className="form-control"  onChange={(e)=>handle(e)} id="agency_id" value={Data.agency_id}/>
  </div>

  <div className="mb-3">
  <div className=" text-light text-center">
    <label htmlFor="exampleInputEmail1" className="form-label text-light text-center">item_id</label>
    </div>
    <input type="number" className="form-control"  onChange={(e)=>handle(e)} id="item_id" value={Data.item_id}/>
  </div>

  <div className="mb-3">
  <div className=" text-light text-center">
    <label htmlFor="exampleInputEmail1" className="form-label text-light text-center">quantity</label>
    </div>
    <input type="number" className="form-control"  onChange={(e)=>handle(e)} id="quantity" value={Data.quantity}/>
  </div>

  <div className="mb-3">
  <div className=" text-light text-center">
    <label htmlFor="exampleInputEmail1" className="form-label text-light text-center">created_date</label>
    </div>
    <input type="date" className="form-control"  onChange={(e)=>handle(e)} id="created_date" value={Data.created_date}/>
  </div>
  
 
  <div className="d-flex justify-content-center ">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
     </>
    )
}

export default Post
