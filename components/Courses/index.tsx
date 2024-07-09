"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    nickname: string;
    imgSrc: string;

}

const postData: DataType[] = [
    {
        heading: 'Sports Day',
        heading2: 'extra co-curricular',
        nickname: 'sports',
        imgSrc: '/assets/sports.jpg',

    },
    {
        heading: 'A Team of OBs',
        heading2: 'Sharing with the Head Teacher',
        nickname: 'OBS',
        imgSrc: '/assets/obs.jpeg',

    },
    {
        heading: 'Top performers',
        heading2: 'At Kyambogo college',
        nickname: 'academics',
        imgSrc: '/assets/pic1.jpg',

    }

]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-[#2f66a6] text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Latest News and Upcoming Events</h3>
                        <Link href={'/'} className="text-[#2f66a6] text-lg font-medium space-links">Explore News&nbsp;&gt;&nbsp;</Link>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">{items.nickname}</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>



                                        <hr style={{ color: "#C4C4C4" }} />


                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
