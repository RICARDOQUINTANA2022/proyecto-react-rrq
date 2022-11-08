import { useEffect, useState } from "react";
import CardItem from "../Item/CardItem";

function apiList () {
    const [mercadoList, setmercadoList] = useState([]);
    const [params, setparams]= useState({
        offset: 0,
        limit: 12
    })

    const buscarList = "bulldog";
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=bulldog`;

    useEffect(()=>{
        fetch (url)
        .then ((respuesta)=>respuesta.json())
        .then ((json)=> setmercadoList(json.results))
        .catch((error)=> console.log(error))
    }, [url, params]);

    return (
        <div>   
                {mercadoList.map((bulldog) => (
                    <CardItem
                    key={bulldog.id}
                    title={bulldog.title}
                    url={bulldog.thumbnail}
                    />
                ))}
        </div>
    )
}

export default apiList;