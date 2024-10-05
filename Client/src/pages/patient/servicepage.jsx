import React from 'react'
import MainCard from '../../components/cards/serviceCards/mainCard'
import SpecialityCard from '../../components/cards/serviceCards/specialityCard'
import SymptomsCard from '../../components/cards/serviceCards/symptomsCard'

const servicepage = () => {
  return (
    <div>
      <MainCard />
      <SpecialityCard />
      <SymptomsCard />
    </div>
  )
}

export default servicepage
