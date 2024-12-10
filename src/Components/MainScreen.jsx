import './MainScreen.css'
import React,{useState,useEffect} from 'react';

function MainScreen(){


    

    const sec=[
        {id:1,tag:"All"},
        {id:1,tag:"Cook Studio"},
        {id:1,tag:"UX"},
        {id:1,tag:"Case Study"},
        {id:1,tag:"Music"},
        {id:1,tag:"Bnagla Lofi"},
        {id:1,tag:"Tour"},
        {id:1,tag:"Tech"},
        {id:1,tag:"Saintmartin"},
        {id:1,tag:"iphone 13"},
        {id:1,tag:"user interface design"}
        

    ]
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        // Fetch data from the API
        fetch('https://youtube-api-1j64.onrender.com/tum1')
            .then((response) => response.json())
            .then((data) => setVideos(data)
        
        )
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return(

        <>
        <div className="mainscreen">
            <hr />
            <div className="selector">
{sec.map((a)=>(

<div className="option1">{a.tag}</div> 
))}
                

            </div>
    <hr />
<div className="thumnail">
{videos.map((tum)=> (
  <div className="tumb1">
  <div className="tumimage"><img src={tum.tum} alt="" /></div>
  <div className="descri">
      <div className="first">
      <div className="logo"><img src={tum.logo}alt="" /></div>
      <div className="title">{tum.title}</div>
  </div>
  <div className="subtitle">
      <div className="subtexr">{tum.subtitle1}</div>
      <div className="subtexr">{tum.subtitle2}</div>
  </div>
  </div>
</div>

))}

  
</div>
        </div>
        </>
    )
}

export default MainScreen



// import './MainScreen.css';
// import React, { useState, useEffect } from 'react';

// function MainScreen() {
//   const sec = [
//     { id: 1, tag: "All" },
//     { id: 2, tag: "Cook Studio" },
//     { id: 3, tag: "UX" },
//     { id: 4, tag: "Case Study" },
//     { id: 5, tag: "Music" },
//     { id: 6, tag: "Bangla Lofi" },
//     { id: 7, tag: "Tour" },
//     { id: 8, tag: "Tech" },
//     { id: 9, tag: "Saintmartin" },
//     { id: 10, tag: "iPhone 13" },
//     { id: 11, tag: "User Interface Design" }
//   ];

//   const [videos, setVideos] = useState([]);
//   const API_KEY = "AIzaSyA1n8g33rxXVu1quZFAKx9rOX9MS1Q9Ds0";  // Make sure to keep this safe and do not expose it in production

//   useEffect(() => {
//     // Fetch data from YouTube API
//     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=Tech&key=${API_KEY}`)
//       .then((response) => response.json())
//       .then((data) => setVideos(data.items)) // Only set the items (video data)
//       .catch((error) => console.error('Error fetching data from YouTube API:', error));
//   }, []);

//   return (
//     <>
//       <div className="mainscreen">
//         <hr />
//         <div className="selector">
//           {sec.map((a) => (
//             <div className="option1" key={a.id}>{a.tag}</div>
//           ))}
//         </div>
//         <hr />
//         <div className="thumbnail">
//           {videos.map((tum) => (
//             <div className="tumb1" key={tum.id.videoId}>
//               <div className="tumimage">
//                 <img src={tum.snippet.thumbnails.medium.url} alt={tum.snippet.title} />
//               </div>
//               <div className="descri">
//                 <div className="first">
//                   <div className="logo">
//                     <img src={tum.snippet.thumbnails.default.url} alt="Channel logo" />
//                   </div>
//                   <div className="title">{tum.snippet.title}</div>
//                 </div>
//                 <div className="subtitle">
//                   <div className="subtext">{tum.snippet.channelTitle}</div>
//                   <div className="subtext">{new Date(tum.snippet.publishedAt).toLocaleDateString()}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default MainScreen;
