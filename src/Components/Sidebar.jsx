import { useState,useEffect } from 'react'
import './Sidebar.css'


function Sidebar(){
//     const sec1= [
//         {id:1,Image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true",text:"Home"},
//         {id:2,Image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true",text:"Explore"},
//         {id:3,Image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true",text:"Shorts"},
//         {id:4,Image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true",text:"Subscription"}
//     ]
//     const sec2 =[
//         {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true",text:"Library"},
//         {id:2,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true",text:"History"},

//         {id:3,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true",text:"Your Video"},
//         {id:4,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true",text:"Watch Leter"},
//         {id:5,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true",text:"Liked Video"},
//         {id:6,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true",text:"See More"},

//     ]
// const sec3=[
//     {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",text:"Nadir On The Go"},
//     {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",text:"Coke Studio Bangla"},
//     {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",text:"MKBSD"},
//     {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",text:"Figma"},
//     {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",text:"ATC Android ToTo"},
//     {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",text:"Alus.com"},
// ]

  const [sec1 ,setSec1] =useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/Sidebar/Sec1')
.then((response)=> response.json())
.then((data)=>setSec1(data))
.catch((error) =>console.log(error))
  })

  const [sec2 , setSec2]=useState([])
  useEffect(()=>{
fetch('http://localhost:3000/Sidebar/Sec2')
.then((response) => response.json())
.then((data)=> setSec2(data))
.catch((error)=> console.log(error))

  })

  const [sec3 ,setSec3]=useState([])
  useEffect(()=> {

    fetch('http://localhost:3000/Sidebar/Sec3')
    .then ((response)=> response.json())
    .then((data)=> setSec3(data))
    .catch((error)=>console.log(error))
  })
    return(

        <>
        <div className="sidebar">
        <div className="navfst">
                <div> <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" /></div>
               <div> <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" /></div>
            </div>

{sec1.map((button)=> (

    
    <div className="Home">
    <div className="sec1">
        <div className="imag"><img src={button.Image} alt="" /></div>
<div className="text">{button.text}</div>
    </div>
</div>
))}

<hr />
<div className="video">
{sec2.map((i)=>(
    
    <div className="sec2">
        <div className="imag"><img src={i.image} alt="" /></div>
        <div className="text">{i.text}</div>
    </div>


))}
</div>
<hr />
<div className="subtext">SUBSCRIPTIONS</div>

<div className="subscription">
    {sec3.map((user)=> (
 <div className="sec3">
 <div className="imag"><img src={user.image} alt="" /></div>
 <div className="text1">{user.text}</div>
</div>
    ))}
   
</div>
        </div>
        </>
    )
}

export default Sidebar