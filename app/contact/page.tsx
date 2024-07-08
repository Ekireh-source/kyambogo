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
      <div className="flex my-5 py-3"><h1 className="mx-auto text-3xl">Do You Have Any Questions?</h1></div>
      <div className="flex flex-col md:flex-row md:items-center">

        <div className="flex-1 flex flex-col mx-[10%]">
          <h1 className="py-2">Our Contact Details</h1>
            <p className="py-2">P. O. Box 20142 Kyambogo Kampala</p>
            <p className="py-2">info@kyambogocollege.sc.ug</p>
            <p className="py-2">+256 414 286 571</p>
        </div>
        <div className="flex-1 flex flex-col mx-[10%] py-5">
          <h1 className="mx-auto py-2">Leave A Message</h1>
          <form className="w-full max-w-lg mx-auto">
            <div className="my-3"><Input placeholder="Name" /></div>
            <div className="my-3"><Input type="email" placeholder="Email" /></div>
            <div className="my-3"><Textarea placeholder="Message" /></div>
            <Button type="submit" className="bg-[#d5181a] w-full">Send</Button>
          </form>
        </div>
      </div>
    </section>

  )
}


export default contact;
