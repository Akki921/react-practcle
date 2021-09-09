import React ,{useEffect,useState} from 'react'

function Table() {
   
  // fetch aopi 
const [Apidata, setApidata] = useState([])
const fetchData = async () => {
 await fetch("https://metizcrm.com/rashmiengicondev/Apistoke/material_stoke_manage_history")
        .then((response) => response.json())
        .then((data) => setApidata(data.detail));}
  

  useEffect(() => {
      fetchData();
      }, []);
    
      console.log(Apidata)

       

    
return (
  <>
     <div className="App container my-5">
 
       
       <h2 className="text text-center">APIData</h2>
     <table className="table  table-dark table-striped">
<thead>
  <tr>
    <th scope="col">pickup_person</th>
    <th scope="col">quantity</th>
    <th scope="col">created_date</th>
    <th scope="col">material_name</th>
  </tr>
</thead>
<tbody>

     {
        Apidata.map(user => (
          <tr  key={user.id}>
    <th scope="row">{user.pickup_person}</th>
    <td>{user.quantity}</td>
    <td>{user.created_date}</td>
    <td>{user.material_name}</td>
    
  </tr>
        ))}
 
</tbody>
</table>
     </div>
  </>
);
}

export default Table
