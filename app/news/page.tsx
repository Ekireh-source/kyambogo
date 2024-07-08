"use client"

import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



interface DataType {
    heading: string;
    nickname: string;
    imgSrc: string;
    news: string

}

const newsData: DataType[] = [
    {
      heading: 'Clarification on Term One 2024 Fees Structure at Kyambogo College School',
      nickname: 'Fees',
      imgSrc: '/assets/obs.jpeg',
      news: "In response to recent discussions stemming from partial school circulars shared online, Kyambogo College School aims to clarify the 2024 term one fees structure.<br><br>Contrary to social media claims, there was no arbitrary fee increase. Over the years, fees in term one have consistently been higher than in the second and third terms due to items paid once a year, such as Uneb registration, PTA Subscription, Students’ attendance swiping card, Calendar, and Magazine.<br><br>It’s essential to note that the only new fee included in the structure for the year 2024 is the Kyambogo College School Platinum celebration of Ug shs 50,000/=, as agreed upon in the Annual General Parent’s meeting to be paid in term one and two 2024.<br><br>Kyambogo College School is a government school with some staff on the government payroll; however, it differs from USE schools – relying on supplementary fees for certain operational costs, meals, and developments.<br><br>We appreciate public feedback and are committed to transparency. For inquiries or additional information, please contact the school administration. We value your understanding and continued support in ensuring each student receives the best possible education at Kyambogo College School.<br><br>Sincerely,<br>Mugume Stanley,<br>Headteacher"

    },
    {
        heading: 'Sports',
        nickname: 'Sports',
        imgSrc: '/assets/obs.jpeg',
        news: "The one-month sports session at Kyambogo College School showcased the talent and dedication of the six houses: Panther, Elephant, Cheetah, Lion, Rhino, and Tiger. The session included various outdoor and indoor games, culminating in an Athletics competition.<br><br>\
            Esteemed guests such as Mr. Mukesh Babubhai Shukla, Hon. Peter Ogwang, and Prof. Eli Katunguka Rwakishaya graced the sports day, highlighting the event's significance in promoting sports and unity.<br><br>\
            The sports session featured competitive fixtures in Volleyball, Basketball, Netball, Handball, Touch Rugby, Chess, Badminton, Ludo, Table Tennis, and a football tournament. A challenging Cross Country event tested participants' endurance, with girls running 5km and boys 7.5km.<br><br>\
            The Athletics competition included sprints, relays, and various age categories. The event concluded with the winning house receiving cash prizes and a healthy cow.<br><br>\
            The sports session was a resounding success, promoting physical fitness, teamwork, and sportsmanship, and creating lasting memories and anticipation for future events."

    },
    {
        heading: 'Top performers',
        nickname: 'academics',
        imgSrc: '/assets/pic1.jpg',
        news: "Kyambogo College School has demonstrated its excellence by producing top performers in the recent UNEB senior six results. Six outstanding students have made the school proud:<br><br>\
            - Muyanja Wilberforce (PEM) and Mwima Caleb (PCM) both scored 18 points.<br>\
            - Kayanja S Titus (HEG) scored 18 points.<br>\
            - Jibwa Deborah (HED) scored 17 points.<br>\
            - Wamala Mike (MEG) scored 17 points.<br>\
            - Asingye Samuel (HEL) scored 17 points.<br><br>\
            Their exceptional performances reflect their hard work and the quality of education at Kyambogo College School. The school's commitment to holistic education, character development, and leadership skills has enabled its students to excel. These achievements set a high standard for academic excellence and will inspire future generations of students.<br><br>\
            DUC IN ALTUM"

    }

]



const news = () => {
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




  return(
    <section>
      <div>
        <img src="/assets/canteen.jpg" alt="about image" className="w-full h-[400px]" />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl mx-auto -mt-20">School News</h1>
      </div>


      <Slider {...settings}>
          {newsData.map((items, i) => (
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
                          <hr style={{ color: "#C4C4C4" }} />
                      </div>
                      <div>

                        <Dialog>
                          <DialogTrigger><h1 className="bg-[#199326] rounded-[5px] mt-5 p-3">Read More...</h1></DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Are you absolutely sure?</DialogTitle>
                              <DialogDescription>
                                {items.news}
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </div>

                  </div>
              </div>
          ))}
      </Slider>

    </section>

  )
}


export default news;
