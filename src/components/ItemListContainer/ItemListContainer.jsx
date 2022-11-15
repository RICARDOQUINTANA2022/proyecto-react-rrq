import React, {useState, useEffect} from "react";
import getItemFromMock  from "../../mock/mock";
import ItemList from "./ItemList";

function ItemListContainer() {
    const [itemProduct, setItemProduct] = useState ([]);

    useEffect(() =>{
    getItemFromMock().then((productMock) => {
        setItemProduct(productMock);
    },[]);

})
    return (     
        <div className="row">
        <div className="col-4">
            {itemProduct.map((item)=>(
            < ItemList
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                />
                ))}
        </div>
        </div>  
    )
}

export default ItemListContainer