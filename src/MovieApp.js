import React,{useEffect, useRef, useState} from 'react'
import './Movie.css'

const favArr = [];
function MovieApp() {
    const [data, setData] = useState()
    const [search, setSearch] = useState("");
    const [movie1, setMovie1] = useState();
    const [movie2 ,setMovie2] = useState()
    const [movie3 ,setMovie3] = useState()
    const [movie4 ,setMovie4] = useState()
    const [movie5 ,setMovie5] = useState()
    const [movie6 ,setMovie6] = useState()
    const [movie7 ,setMovie7] = useState()
    const [movie8 ,setMovie8] = useState()
    const [movie9 ,setMovie9] = useState()
    const [movie10 ,setMovie10] = useState()

    // console.log(search);
    const arr = ["spider","Avenger","Harry","Troy","Home","Dogs","Run","bond","Batman","Shadow"];
useEffect(()=>{
        fetch(`https://www.omdbapi.com/?t=${arr[0]}&apikey=58cf337f`)
        .then((res)=>res.json())
        .then((data)=>setMovie1(data))
        .catch((err)=>{console.log(err)})
},[])

useEffect(() =>{
    fetch(`https://www.omdbapi.com/?t=${arr[1]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie2(data))
    .catch((err)=>{console.log(err)})

},[])    

useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${arr[2]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie3(data))
    .catch((err)=>{console.log(err)})
},[])

useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${arr[3]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie4(data))
    .catch((err)=>{console.log(err)})
},[])
   
useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${arr[4]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie5(data))
    .catch((err)=>{console.log(err)})
},[])

useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${arr[5]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie6(data))
    .catch((err)=>{console.log(err)})
},[])

useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${arr[6]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie7(data))
    .catch((err)=>{console.log(err)})
},[])

useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${arr[7]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie8(data))
    .catch((err)=>{console.log(err)})
},[])
   
useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${arr[8]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie9(data))
    .catch((err)=>{console.log(err)})
},[])

useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${arr[9]}&apikey=58cf337f`)
    .then((res)=>res.json())
    .then((data)=>setMovie10(data))
    .catch((err)=>{console.log(err)})
},[])


    const handleClick = async () => {
       await fetch(`https://www.omdbapi.com/?t=${search}&apikey=58cf337f`)
       .then((res)=>res.json())
       .then((data)=>setData(data))
       .catch((err)=>{console.log(err)})  
    }

    const handleFav = () =>{
        if(!favArr.includes(data.Title)){
            favArr.push(data.Title);
        }
        console.log(favArr);
    }    

    const removefav = () =>{
        const index =  favArr.indexOf(data.Title)
        favArr.splice(index,1);
    }

  return (
    <div>
        <nav><h1>Movies Search App</h1></nav>
        <div>
            <input type={'text'} placeholder='Enter Movie Name...' onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
        </div>
        {data !== undefined?<div>
            <img className='Searchimage' src={data.Poster}/>
            {favArr.includes(data.Title)?<button className='fav' onClick={removefav}>Remove from favourite</button>:
            <button onClick={handleFav} className='fav'>Add to favourite</button>}
        </div>:""}
        <div>
            <h2>Top 10 Movies</h2>
            <div className='container'>
            {movie1 == undefined?"":<img  className='topten' src={movie1.Poster}/>}
            {movie2 == undefined?"":<img  className='topten' src={movie2.Poster}/>}
            {movie3 == undefined?"":<img  className='topten' src={movie3.Poster}/>}
            {movie4 == undefined?"":<img  className='topten' src={movie4.Poster}/>}
            {movie5 == undefined?"":<img  className='topten' src={movie5.Poster}/>}
            {movie6 == undefined?"":<img  className='topten' src={movie6.Poster}/>}
            {movie7 == undefined?"":<img  className='topten' src={movie7.Poster}/>}
            {movie8 == undefined?"":<img  className='topten' src={movie8.Poster}/>}
            {movie9 == undefined?"":<img  className='topten' src={movie9.Poster}/>}
            {movie10 == undefined?"":<img className='topten'  src={movie10.Poster}/>}
            </div>
        </div>
    </div>
  )
}

export default MovieApp