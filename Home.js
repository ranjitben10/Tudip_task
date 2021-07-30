import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [noArg, setNoArg] = useState(1);
  const sortFunc = () => {
    fetch("/sort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        noArg: noArg,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result)
        setData(result);
      });
    if (noArg > 0) {
      setNoArg(-1);
    } else {
      setNoArg(1);
    }
  };
  useEffect(() => {
    fetch("/fetch", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setData(result.results);
      });
  }, []);

  // console.log(data)
  return (
    <div>
      <div className="btn-div">
        <button onClick={()=>sortFunc()}>Sort</button>
      </div>
      <div className="homecard">
        {data.map((item) => {
          return (
            <div className="container">
              <div className="left-div">
                <h4>{item.name}</h4>
                <h6>{item.email}</h6>
                <h6>{item.phoneNumber}</h6>
              </div>
              <div className="right-div">
                <p className="right-para">
                  <p>{item.address.area}</p>
                  <p>
                    {item.address.city},<b>{item.address.state}</b>
                  </p>

                  <span>
                    {item.address.country},<b>{item.address.pincode}</b>
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
