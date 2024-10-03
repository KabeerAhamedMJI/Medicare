import React from 'react'
import MainCard from '../../components/cards/homeCards/mainCard'
import Secondcard from '../../components/cards/homeCards/secondcard'
import DoctorsListCard from '../../components/cards/homeCards/doctorsListCard'
import TestCard from '../../components/cards/homeCards/testCard'
import ReviewCard from '../../components/cards/homeCards/reviewCard'
import AppCard from '../../components/cards/homeCards/appCard'

const homePage = () => {
  return (
    <section>
      <div>
        <MainCard />
        <Secondcard />
        <DoctorsListCard />
        <TestCard />
        <ReviewCard />
        <AppCard />
      </div>
    </section>
  )
}

export default homePage
