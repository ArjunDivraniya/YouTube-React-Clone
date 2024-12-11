import { useState } from 'react'
import './Navbar.css'


function Navbar({ onSearch }){

  const [search,setSearch]=useState("");
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    onSearch(search);
}

    return(
        <>
        
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
        </>
    )
}


export default Navbar