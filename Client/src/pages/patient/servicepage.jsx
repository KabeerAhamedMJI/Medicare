import React from 'react'
import { useEffect } from 'react'
import MainCard from '../../components/cards/serviceCards/mainCard'
import SpecialityCard from '../../components/cards/serviceCards/specialityCard'
import OnlineCard from '../../components/cards/serviceCards/symptomsCard'
import OfferCard from '../../components/cards/serviceCards/offerCard'

const servicepage = () => {

  useEffect(() => {
   
    if (window.location.hash === '#offers') {
      const offersSection = document.getElementById('offers');
      if (offersSection) {
     
        const bottomOffset = 100; 
        const elementPosition = offersSection.getBoundingClientRect().bottom + window.scrollY;
        window.scrollTo({ top: elementPosition - bottomOffset, behavior: 'smooth' });
      }
    }
  }, []);
  

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
