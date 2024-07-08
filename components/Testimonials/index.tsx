"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Opio Raymond",
        profession: 'Student, S6',
        comment: 'Kyambogo College School provides a strong academic foundation, and the teachers are dedicated to helping students excel.',
        imgSrc: '/assets/testimonial/user.svg',
    },
    {
        name: "Mugisha Samson",
        profession: 'Student, S4',
        comment: 'The school offers a supportive and nurturing environment that encourages students to reach their full potential.',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        name: "Cody Fisher",
        profession: 'Teacher',
        comment: 'Kyambogo College School has a wide range of extracurricular activities that cater to diverse interests, helping students develop holistically.',
        imgSrc: '/assets/mentor/user3.png',
    },
    {
        name: "Robert Fox",
        profession: 'Parent',
        comment: 'The teachers and staff are highly qualified and passionate about their subjects, making learning enjoyable and engaging.',
        imgSrc: '/assets/mentor/user1.png',
    },
    {
        name: "Ssemba Mark",
        profession: 'Student, S6',
        comment: 'The school boasts excellent facilities, including well-equipped classrooms, science labs, and sports amenities.',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        name: "Opit michael",
        profession: 'Student, S2',
        comment: 'Kyambogo College School is committed to innovative teaching methods and integrating technology into the curriculum.',
        imgSrc: '/assets/mentor/user3.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
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
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute top-[-45px]">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={100} height={100} className="inline-block" />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-lightgray" />
                                        </div>
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
