import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";


function Tabform(){
    const [activeTab, setActiveTab] = useState(0);
    const [error, setError] = useState({
        name : "",
        age : "",
        email : "",
        interests : ""
    });

    const tabs = [
        {
            name : "Profile",
            component : Profile,
            validate(){
                if(data.name.length < 2){
                    setError((prev)=>({
                        ...prev,
                        name : "Name is not valid"
                    }))
                }
                if(data.age < 18) {
                    setError((prev)=>({
                        ...prev,
                        age : "Age is not valid"
                    }))
                }
                if(!data.email.includes("@")){
                    setError((prev)=>({
                        ...prev,
                        email : "Email is not valid"
                    }))
                }
                if(data.name.length < 2 || data.age < 18 || !data.email.includes("@")) return false;
                return true;
            }
        },
        {
            name : "Interests",
            component : Interests,
            validate(){
                if(data.interests.length < 1){
                    setError((prev)=>({
                        ...prev,
                        interests : "Select atleast one interest."
                    }))
                    return false;
                }
                return true;
            }
        },
        {
            name : "Settings",
            component : Settings,
            validate() {
                return true;
            }
        },
    ]

    const [data, setData] = useState({
        name : "Vikash Gupta",
        age : 24,
        email : "heyimvikash@gmail.com",
        interests : ["coding", "sleeping"],
        theme : "dark"
    })

    function handleSubmit(){
        console.log(data);
    }
    function handleNext(){
        if(tabs[activeTab].validate()) setActiveTab(prev => prev+1);
    }
    function handlePrevious(){
        setActiveTab(prev => prev-1);
    }
    let TabComponent = tabs[activeTab].component;
    return (
    <div>
        <div className="tabcontainer">
            <div className="tabs">

            {
                tabs.map((t,i)=>(
                    <div key={i} className="tab" onClick={()=>tabs[activeTab].validate() && setActiveTab(i)} style={activeTab===i ? {"background" : "gray"} : {}}>
                        {t.name}
                    </div>
                ))
            }
            </div>
            <TabComponent data={data} setData = {setData} error={error}/>
            <div className="buttons">
                
                {
                    activeTab > 0 && (
                        <button onClick={handlePrevious}>Previous</button>
                    )
                }
                {
                    activeTab < tabs.length-1 && (
                        <button onClick={handleNext}>Next</button>
                    )
                }

                {
                    activeTab === tabs.length-1 && (
                        <button onClick={handleSubmit}>Submit</button>
                    )
                }
                
            </div>
        </div>
    </div>
    )
}
export default Tabform;