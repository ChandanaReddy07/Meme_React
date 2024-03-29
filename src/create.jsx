import React, { useState, useEffect } from "react";
import Templates from "./components/template";
import Meme from "./components/Meme";
import "./App.css";

const Create=()=>{
    const [templates, setTemplates] = useState([]);
    const [meme, setMeme] = useState(null);
  
    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => {
          setTemplates(data.data.memes);
        });
    }, []);
  //   const goBack= () =>(
  //     <div className="mt-5">
  //         <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
  //     </div>
  // );
    return (
      <div className="App">
        
        {meme === null ? (
          <Templates templates={templates} setMeme={setMeme} />
        ) : (
          <Meme meme={meme} setMeme={setMeme} />
        )}
      </div>
    );
}
export default Create