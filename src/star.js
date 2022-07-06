import react from "react";
import Star from "./photos/star.png"


export default function Card(props)
{
    let badgeText
    if(props.item.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if(props.item.country == "Online")
    {
        badgeText = "ONLINE"
    }

    console.log(props.item.photo)
    
    return(
        <div className = "card">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img src = {props.item.photo} className = "swim" />
            <div className = "cardStats"> 
            <img src = {Star} className = "star"/> 
            <span >{props.item.rating} </span>
            <span className = "gray">({props.item.number}) </span> 
            <span className = "gray">{props.item.country} </span>
            </div>
            
            <p>{props.item.job}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>

        </div>
    )
    
}