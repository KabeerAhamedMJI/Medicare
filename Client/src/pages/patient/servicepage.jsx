import React from 'react'
import MainCard from '../../components/cards/serviceCards/mainCard'
import SpecialityCard from '../../components/cards/serviceCards/specialityCard'
import OnlineCard from '../../components/cards/serviceCards/symptomsCard'
import OfferCard from '../../components/cards/serviceCards/offerCard'

const servicepage = () => {
  return (
    <div>
      <MainCard />
      <SpecialityCard />
      <OnlineCard />
      <OfferCard />
    </div>
  )
}
export default servicepage
