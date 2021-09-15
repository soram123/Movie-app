import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import AddMovie from "./components/AddMovie";


function App() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  const movies = useSelector((state)=>{
    return state.movies
  })

  useEffect(()=>{
    const resultt = movies.find((ele)=>{
      return ele.moviename==search
    })
  
    setResult([resultt])
  },[])
 

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <div >
        <h1>My Big Movie List</h1> 
       <input type="text" value={search} onChange={handleSearch} placeholder="Search by name" />
       <select>
         <option>Order by</option>
       </select>
       {result.length>0 ? <h3>{result.moviename} found</h3> : <h3>result not found</h3>}
       {console.log(result)}
       <AddMovie />
    </div>
  )
}

export default App;
