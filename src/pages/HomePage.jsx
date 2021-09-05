import React from 'react'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import Banner from '../components/Banner/Banner'
import EntertainmentCard from '../components/Entertainment/EntertainmentCard'

function HomePage() {
    return (
        <>
            <HeroCarousel />
            <Banner />
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 my-5"> 
                The Best of Entertainment
                <EntertainmentCard className="mt-4"/>  
                </h1>
            </div> 
           
        </>
    )
}

export default HomePage
