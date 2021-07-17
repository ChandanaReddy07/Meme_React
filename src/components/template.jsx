import { Link } from "react-router-dom";
const Templates=({templates,setMeme})=>{
  const goBack = () => (
    <div>
      <Link className="but2" to="/">
        Go Back
      </Link>
    </div>
  );
 
    return (
        <div className="temps">
          <h2>Choose Template</h2>
          {
            goBack()
          }
             {
        templates.map((temp)=>
          {
            return( <div key={temp.id} className="temp" onClick={()=>{
              setMeme(temp)
            }}>
              <div className="image">
              <div style={{backgroundImage:`url(${temp.url})`}} className='image'></div>
              </div>
            </div>
  )
          }
        )
      };
        </div>
       
    )
}

export default Templates;