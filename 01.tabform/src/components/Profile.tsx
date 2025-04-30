
interface Data {
    name: string;
    age: number;
    email: string;
  }
  
  interface ProfileProps {
    data: Data;
    setData: (value: any | ((prev: any) => Data)) => void;
    error : {
        name : string,
        age : string,
        email : string
    }

  }
  

function Profile({data, setData, error} : ProfileProps){
    function handleInputChange (e : any){
        setData((prev:Data) => ({
            ...prev,
            [e.target.name] : e.target.value,
        }))
    }

    return (
    <div className="formcomponent">
        <label>Name : </label>
        <input type="text" name="name" value={data.name} onChange={handleInputChange}/>
        <br />
        <p className="error">{error.name}</p>
        <br />
        <label>Age : </label>
        <input type="number" name="age" value={data.age} onChange={handleInputChange}/>
        <br />
        <p className="error">{error.age}</p>
        <br />
        <label>Email : </label>
        <input type="email" name="email" value={data.email} onChange={handleInputChange}/>
        <p className="error">{error.email}</p>
    </div>
    )
}
export default Profile;