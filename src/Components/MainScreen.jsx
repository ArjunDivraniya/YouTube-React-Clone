import './MainScreen.css'
import React,{useState,useEffect} from 'react';

function MainScreen(){


    // const tum1=[
    //     {id:1,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",title:"Bulbuli | Coke Studio Bangala | Season one | Ritu Raj X Nandita",subtitle1:"Coke Studio Bangala",subtitle2:"1.5M views 2 days ago"},
    //     {id:2,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"infinic Note 12: AMOLED Hello G88 SoC",subtitle1:"ATC Android ToTo Com.",subtitle2:"4.2M views 2 days ago"},
    //     {id:3,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",title:"My First UX Design case study-This Got Me My first Job",subtitle1:"Saprashi prakash",subtitle2:"4.8k views 1 years ago"},
    //     {id:4,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",title:"My Mix",subtitle1:"Lopamudra Mitra ",subtitle2:"Anupam Roy"},
    //     {id:5,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",title:"UX Design -What is it? (From AJ & Smart)",subtitle1:"AJ &Smart",subtitle2:"150M views 3 years ago"},
    //     {id:6,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",title:"Mix -mombati|Mohan Sarif|Dhakaiya Dose| Mohib Ahsanft ",subtitle1:"mohan Sharif , Odd Signature,Shayan",subtitle2:"Chowdhury and more"},
    //     {id:7,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",title:"48 VISA -FREE",subtitle1:"NAdir On the go",subtitle2:"1.7 M views 1years ago"},
    //     {id:8,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",title:"14 Advanced Tips  to design Faster in Figma",subtitle1:"Mizko",subtitle2:"53k views 1 day ago"},
    //     {id:9,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Third Class Muvie Pushpa 2 || GENUINS Reviews",subtitle1:"Sunny Bhavsar",subtitle2:"1.3k views 2 hours ago"},
    //     {id:10,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",title:"Glass Animal |Heat Weves",subtitle1:"Taj Tracks",subtitle2:"2.2M views 1 years ago"},
    //     {id:11,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",title:"Jatt Mehkana By Yo Yo Honey Singh",subtitle1:"Goku Uchiha Edits",subtitle2:"50k view 2days ago"},
    //     {id:12,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",title:"The Weekend- Star boy (Slowed and Reverb)",subtitle1:"MeloyHub",subtitle2:"1.9M Views 1 years ago"},
    // ]

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
        fetch('http://localhost:3000/tum1')
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