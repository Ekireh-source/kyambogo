import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



const contact = () => {
  return(
    <section>
      <div>
        <img src="/assets/canteen.jpg" alt="about image" className="w-full h-[400px]" />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl mx-auto -mt-20 text-white">Contact Us</h1>
      </div>
      <div className="flex my-5 py-3"><h1 className="mx-auto text-3xl text-[#2f66a6]">Do You Have Any Questions?</h1></div>
      <div className="flex flex-col md:flex-row md:items-center">

        <div className="flex-1 flex flex-col mx-[10%]">
          <h1 className="py-2 text-charcoal flex gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-[#2f66a6]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>


          Our Contact Details
          </h1>
            <p className="py-2 text-charcoal flex gap-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-[#2f66a6]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            P. O. Box 20142 Kyambogo Kampala
            </p>
            <p className="py-2 text-charcoal flex gap-4 items-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-[#2f66a6]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

            info@kyambogocollege.sc.ug
            </p>
            <p className="py-2 text-charcoal flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-[#2f66a6]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>

            +256 414 286 571
            </p>
        </div>
        <div className="flex-1 flex flex-col mx-[10%] py-5">
          <h1 className="mx-auto py-2 text-[#2f66a6]">Leave A Message</h1>
          <form className="w-full max-w-lg mx-auto">
            <div className="my-3"><Input placeholder="Name" /></div>
            <div className="my-3"><Input type="email" placeholder="Email" /></div>
            <div className="my-3"><Textarea placeholder="Message" /></div>
            <Button type="submit" className="bg-[#d5181a] w-full text-white">Send</Button>
          </form>
        </div>
      </div>
    </section>

  )
}


export default contact;
