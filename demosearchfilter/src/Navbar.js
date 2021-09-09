import React, { useEffect, useState } from "react";

function Navbar() {
  const [Apidata, setApidata] = useState([]);
  const fetchData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setApidata(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(Apidata);

  return (
    <div>
      <div className="container">
        <div className="row">
          {Apidata.map((user) => (
            <div className="col-md-3 my-3 mx-5" key={user.id}>
              <img src={user.image} height="300px" width="250px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
