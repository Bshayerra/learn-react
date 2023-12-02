
import React from "react";
import SItem from "./SItem";

function Social (){
    return(
    <ul className="list-group">
<SItem
p = {{
    media:"Tea Rose",
    id:'tea_rose',
    img:'src/image/tea_roses.jpg'
}}
/>

<SItem
p = {{
    media:"Climbing Roses",
    id:'climbing_roses',
    img:'learn-react/image/Climbing_Roses.jpg'
}}
/>

<SItem
p = {{
    media:"Shrub Roses",
    id:'shrub_roses',
    img:'learn-react/image/Shrub_Roses.jpg'
}}
/>
<SItem
p = {{
    media:"Floribunda Roses",
    id:'floribunda_roses',
    img:'learn-react/image/Floribunda roses.jpg'
}}
/>
        
    </ul>
    );
}

export default Social;