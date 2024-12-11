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
   
    const [query, setQuery] = useState(""); 
    const [search,setSearch]=useState("");
  
const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
};

    const API_KEY = "AIzaSyA1n8g33rxXVu1quZFAKx9rOX9MS1Q9Ds0";
    useEffect(() => {
        // Fetch data from the API
       if(query){ fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&key=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => setVideos(data.items)
        
        )
            .catch((error) => console.error('Error fetching data:', error));
    }
    }, [query]);

    
    return(

        <>
        <div className="yt">
        <div className="navbar">
            {/* <div className="navfst">
                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" />
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" />
            </div> */}
            <div className="navsec">
                <div className="serch">
                <form onClick={handleSearch}>   
            <input 
              type="text"
              placeholder="Search"
              className='serchbox'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                alt="Search"
              />
            </button>
          </form>
                
                </div>
                <div className="mic"><img className='mic' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" /></div>
            </div>
            <div className="navtrd">
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" />
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" />
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" />
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true" alt="" />
            </div>
        </div>
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
  <div className="tumb1" key={tum.id.videoId}>
  <div className="tumimage"><img src={tum.snippet.thumbnails.medium.url} alt={tum.snippet.title}/></div>
  <div className="descri">
      <div className="first">
      <div className="logo"><img src={tum.snippet.thumbnails.default.url} alt="Channel logo" /></div>
      <div className="title">{tum.snippet.title}</div>
  </div>
  <div className="subtitle">
      <div className="subtexr">{tum.snippet.channelTitle}</div>
      <div className="subtexr">{new Date(tum.snippet.publishedAt).toLocaleDateString()}</div>
  </div>
  </div>
</div>

))}

  
</div>
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
