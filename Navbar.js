import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const [searchValue,setSearchValue] = useState("")
    const [data,setData] = useState([])

    const searchFunc = (value)=>{
        fetch('/search',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:value
            })
        }).then(res=>res.json()).then(result=>{
            console.log(result)
            setData(result)
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <nav className="parent-container">
      <div className="nav-wrapper white">
        <Link to="/" class="brand-logo">
          <b style={{ color: "black"}}>Task</b>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="search-field">
            {/* <i class="material-icons" style={{color:"black"}}>search</i> */}
            <input type="text" placeholder="Name to search"
            onChange={(e)=>setSearchValue(e.target.value)}
            ></input>
          </li>
          <li>
            <button className="waves-effect waves-light btn #64b5f6 blue darken-1"
            onClick={()=>searchFunc(searchValue)}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
