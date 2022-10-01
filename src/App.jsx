import React from "react"
import _Images from "./components/cards"
import Navbar from "./components/navbar"
import _data from "./data"
import './App.css'
import Cards from "./components/cards"

export default function App() {
    const cards = _data.map(item => {
        return (
            <Cards
                key={item.id}
                item={item}
            />
        )
    })

	return (
		<div className="main-div">
			<Navbar/>
			<section >
				{cards}
			</section> 
			
		</div>
		
	)
}
