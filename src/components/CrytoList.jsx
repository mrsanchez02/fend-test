import React, { useEffect, useState } from 'react'
import {CardList} from '../helpers/index'

const CrytoList = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(CardList)
  }, [])
  

  return (
    <>
      <h2>Welcome to Cryptocurrencies</h2>
      {
        
      }
    </>
  )
}

export default CrytoList