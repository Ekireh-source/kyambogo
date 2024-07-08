


const about = () => {
  return(
    <section>
      <div className="">
        <img src="/assets/van.jpg" alt="about image" className="w-full h-[400px]" />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl mx-auto -mt-20">About Us</h1>
      </div>
      <div className="container mx-10 px-5 my-10 py-5">
        <p className="">
        Kyambogo College School started in 1954 as a small demonstration Junior Secondary School in the neighborhood of Kyambogo Teacher Training College now known as Kyambogo University.  It is located on the same hill with the Kabaka of Buganda’s palace at Banda.

        It started in a small building with few students and staff with a primary motive of according the college tutors and student teachers opportunity to carry out demonstration lessons.

        Growth and Expansion

        When the Government Teacher Training College became National Teachers’ College in 1965, Kyambogo Demonstration School continued to serve the new college as before.
        </p>
      </div>

      <div className="mx-10 px-5 bg-about py-5">
        <div className="flex justify-between p-4">
          <h1 className="mx-auto text-4xl">What Drives Us</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <div className="flex flex-col hover:bg-[#199326] rounded-[10px]">
            <h1 className="mx-auto p-4 text-2xl">Our Mission</h1>
            <p className="p-3 text-gray-700">To provide affordable, equitable and all round education with scientific, technical and attitude so as to create useful citizens.</p>
          </div>
          <div className="flex flex-col hover:bg-[#199326] rounded-[10px]">
            <h1 className="mx-auto p-4 text-2xl">Our Vision</h1>
            <p className="p-3">To produce a society of diligent, skilled, socially responsible and useful citizens who strive for excellence.</p>
          </div>
          <div className="flex flex-col hover:bg-[#199326] rounded-[10px]">
            <h1 className="mx-auto p-4 text-2xl">Our Values</h1>
            <p className="p-3">God fearing, Responsibility, Honesty, Trustworthiness, Fairness , Humility.</p>
          </div>
        </div>
      </div>

    </section>
  )
};



export default about;
