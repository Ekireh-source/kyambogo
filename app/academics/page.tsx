import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'

const academics = () => {
  return(
    <section>
      <div className="">
        <Image src="/assets/art.jpg" alt="about image" className="w-full h-[500px]" />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl mx-auto -mt-20 text-white">Academics</h1>
      </div>
      <div className="flex flex-col justify-between my-5">
        <h1 className="text-3xl mx-auto text-[#2f66a6]">School Curriculum</h1>
        <h5 className="text-sm mx-auto text-charcoal">The School offers the teaching of the following subjects.</h5>
      </div>
      <div className="flex justify-around my-5 py-5">
        <Accordion type="single" collapsible className="w-full flex flex-col">
          <AccordionItem value="item-1" className="mx-20">
            <AccordionTrigger className="text-[#2f66a6]">O’ Level Subjects</AccordionTrigger>
            <AccordionContent className="text-charcoal">
              <ol>
                <li>English Language</li>
                <li>Mathematics</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Geography</li>
                <li>History</li>
                <li>Entrepreneurship Education</li>
                <li>Computer Studies</li>
                <li>Religious Studies</li>
                <li>Fine Art</li>
                <li>Agriculture</li>
                <li>Home Management</li>
                <li>Luganda</li>
                <li>French</li>
                <li>Kiswahili Language</li>
                <li>Commerce</li>
                <li>Physical Education</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mx-20">
            <AccordionTrigger className="text-[#2f66a6]">A’ Level Subjects</AccordionTrigger>
            <AccordionContent className="text-charcoal">
            <ol>
              <li>English Language</li>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Geography</li>
              <li>History</li>
              <li>Entrepreneurship Education</li>
              <li>Computer Studies</li>
              <li>Religious Studies</li>
              <li>Fine Art</li>
              <li>Agriculture</li>
              <li>Home Management</li>
              <li>Luganda</li>
              <li>French</li>
              <li>Kiswahili Language</li>
              <li>Commerce</li>
              <li>Physical Education</li>
            </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mx-20">
            <AccordionTrigger className="text-[#2f66a6]">O’ Level Optional Subject Groupings</AccordionTrigger>
            <AccordionContent className="text-charcoal">
            <ol>
            <li>Computer Studies</li>
            <li>Agriculture</li>
            <li>Fine Art</li>
            <li>Technical Drawing</li>
            <li>Home Management</li>
            <li>Entrepreneurship Education</li>
            </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="mx-20">
            <AccordionTrigger className="text-[#2f66a6]">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-charcoal">
            <ol>
            <li>
            A. Sciences with Sub ICT:
            PCM, PEM, MEG, BCM, PMART, PMT, METD, MEET, MEART
            </li>
            <li>
            B. Sciences with Sub Math:       PCB, BCFN, BCAGRIC
            </li>
            <li>
            C. Arts with Sub ICT: (All arts subjects with Entrepreneurship)
            HENTL, HDENT, HLD HAENT, HLENT, HLLUG, HGENT, LDENT.
            </li>
            <li>
            D. Arts with Sub Math: (Any arts subject with economics)
            HEG, HEL, DEG, HEA, LEG, GEA.
            </li>
            </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </section>

  )
}


export default academics;
