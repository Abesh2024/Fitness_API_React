import { useState, useEffect } from "react";
import './API.css';

function APIcall () {

    const [dataShow, setDatashow] = useState([]);

    const getData = async ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3af7896136msh2df453589a7a778p1933e7jsn52dbdfd440cd',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        let response = await fetch(`https://exercisedb.p.rapidapi.com/exercises?limit=20`, options)
        setDatashow(await response.json())
        console.log(dataShow);
    }

    useEffect(()=>{
        getData()
    }, [])

    return ( <div>
        <h1>Your Fitness, Our Amenities, Your Effort & Gain, Our Achievement</h1>
        
        <div className = "container">
        {
            dataShow.map((e)=>{
                return ( 
                    <div key={e.index} className="each-container">
                        {/* {console.log("__  ",e)} */}
                    <h3>{e.name}</h3>
                    <img src={e.gifUrl} alt={e.bodyPart} className = "image"/>
                    <p>{e.target}</p>
                    </div>
                
                )
            })
        }
        </div>
        </div>
    )
}

export default APIcall