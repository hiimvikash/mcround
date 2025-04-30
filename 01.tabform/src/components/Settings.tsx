
interface Data {
    theme : String
  }
  
  interface SettingsProps {
    data: Data;
    setData: (value: any | ((prev: any) => Data)) => void;

  }


function Settings({data, setData}:SettingsProps){

    function handleRadioChange(e:any){
        setData((prev:any)=>({
            ...prev,
            theme : e.target.name
        }))

    }


    return (
    <div className="formcomponent">

        <label>Dark : </label>
        <input type="radio" name="dark" checked={data.theme==="dark"} onChange={handleRadioChange}/>
        <br />
        <label>Light : </label>

        <input type="radio" name="light" checked={data.theme==="light"} onChange={handleRadioChange}/>
        
    </div>
    )
}
export default Settings;