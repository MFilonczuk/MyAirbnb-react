import './App.css';
import CardsData from "./data.js"
import Nav from './navbar';
import Main from "./main.js";
import Card from "./star.js"

function App() {
  const Cards = CardsData.map(card => {
    return (
    <Card
        key = {card.id}
        item = {card}

    />
    )
})

return(
    <div>
        <Nav/>
        <Main/>
        <section className="cardsList">
            {Cards}
        </section>   
    </div>
)
}


export default App;
