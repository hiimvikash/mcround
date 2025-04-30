interface Data {
    interests : String[]
  }
  
  interface InterestsProps {
    data: Data;
    setData: (value: any | ((prev: any) => Data)) => void;
    error : {
        interests : string
    }

  }


function Interests({data, setData, error}: InterestsProps){
    console.log(data);

    function handleCheckboxChange (e:any){
        console.log(e.target.name, e.target.checked);
        if(e.target.checked === true){
            setData((prev:any)=>(
                {
                    ...prev,
                    interests : [...prev.interests, e.target.name]
                    
                }
            ))
        }else {
            setData((prev:any)=>(
                {
                    ...prev,
                    interests : prev.interests.filter((int:any)=>int!==e.target.name)
                    
                }
            ))
        }
    }


    return (
    <div className="formcomponent">
        <label>Coding</label>
        <input type="checkbox" name="coding" checked={data.interests.includes("coding")} onChange={handleCheckboxChange}/>
        <br />
        <br />
        <label>Sleeping</label>
        <input type="checkbox" name="sleeping" checked={data.interests.includes("sleeping")} onChange={handleCheckboxChange}/>
        <br />
        <br />
        <label>Movies</label>
        <input type="checkbox" name="movies" checked={data.interests.includes("movies")} onChange={handleCheckboxChange}/>
        <br />
        <br />
        <label>Cricket</label>
        <input type="checkbox" name="cricket" checked={data.interests.includes("cricket")} onChange={handleCheckboxChange}/>

        <p className="error">{error.interests}</p>
    </div>
    )
}
export default Interests;