import Axios from "axios";
import React, {useEffect , useState} from "react";
import "./css/card.css"
import Card from "./card";

export default function Analytics(props){

    const [data, setData] = useState([]);
    useEffect(() => {

        Axios.get(`http://localhost:4000/api/v1/contact`)
        .then(res => {
            let newData = [...res.data];
           setData(newData);
        });

    }, [])

    return (
        <div className="analytics">
            {data.map((item)=>(
                <Card key={item._id} item={item} />
            ))}

        </div>

    )
}