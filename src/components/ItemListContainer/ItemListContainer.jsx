import React from 'react'

function ItemListContainer (props) {
    const styleUno = {
        padding : '300px',
        backgroundColor: 'green',
        color : 'white',
        textAlign : 'center'
    }
    return (
        <h3 style={styleUno}>{props.text}</h3>
    )
}

export default ItemListContainer