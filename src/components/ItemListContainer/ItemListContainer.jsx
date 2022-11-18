import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import getItemFromMock, {getItemCategoryFromMock}  from "../../mock/mock";
import ItemList from "./ItemList";

function ItemListContainer() {
    const [itemProduct, setItemProduct] = useState ([]);
    const {categoryid} = useParams();

    useEffect(() =>{
    if (categoryid)  {  
    getItemCategoryFromMock(categoryid).then((productMock) => {
        setItemProduct(productMock);
    });
    }

    else {
    getItemFromMock().then((productMock) => {
        setItemProduct(productMock);
    });
    }    
    }, [categoryid]);


    return (     
        <div className="container">
        <div className="row">
            {itemProduct.map((item)=>(
            < ItemList
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                category={item.category}
                />
                ))}
        </div>
        </div>  
    )
}

export default ItemListContainer