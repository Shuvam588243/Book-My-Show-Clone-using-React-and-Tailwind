import React,{useState} from 'react'
import HeroSlider from 'react-slick'
import { nextArrow, prevArrow } from './Arrows';

function HeroCarousel() {

    const[images, setImages] = useState([
        "https://in.bmscdn.com/promotions/cms/creatives/1630474590730_mardkodardnhihota_1240x300_1sep.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    ])

    

    var settingsLarge = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <nextArrow />,
        prevArrow: <prevArrow />,
    };

    var settingsSmall = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <nextArrow />,
        prevArrow: <prevArrow />,
    };


    return (
        <>
         <div className="lg:hidden">
             <HeroSlider {...settingsSmall}> 
             {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img
                                src={image}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-center"
                            />
                        </div>
                    ))}
             </HeroSlider>
         </div>
         <div className="hidden lg:block">
         <HeroSlider {...settingsLarge}> 
         {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img
                                src={image}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-center"
                            />
                        </div>
                    ))}
             </HeroSlider>
         </div>
        </>
    )
}

export default HeroCarousel
