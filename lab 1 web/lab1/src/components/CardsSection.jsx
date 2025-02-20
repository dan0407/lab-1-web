import React from 'react'
import Card from './Card'
import { cardsData } from '../data/cards'
import './CardsSection.css'

const CardsSection = () => {
  return (
    <div className="cards-section">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  )
}

export default CardsSection
