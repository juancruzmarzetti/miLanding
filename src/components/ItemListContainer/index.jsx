import React, { useEffect } from "react";
import ItemCount from "../ItemCount";

export default function ItemListContainer(props){

    return(
        <>
        <ItemCount stock={5}/>
        </>
    );
}