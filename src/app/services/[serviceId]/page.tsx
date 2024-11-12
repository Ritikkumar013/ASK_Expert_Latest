"use client"; 
// import servicesData from "@/assets/assets";
import servicesData from "@/assets/assets";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import Image from "next/image";
const defImage = '/default-image.jpg';


const ServicePage = () => {
  const params = useParams(); // Use useParams to get dynamic route parameters
  const serviceId = params?.serviceId; // Extract serviceId from params

  // If serviceId is not a valid key in servicesData, handle 404 or show a default message.
  const serviceContent = servicesData[serviceId as string];

  if (!serviceContent) {
    return (
      <div className="text-center mt-8 text-red-500">Service not found!</div>
    );
  }

  return (
    <>
      {/* Section 1 */}
      <div className='w-full h-[55vh] md:h-[70vh] px-5 md:px-14  flex items-center bg-cover bg-center lg:h-[80vh]' style={{ backgroundImage: `url(${serviceContent[0].backgroundImage})` }}
      >
        <div className="container max-w-screen-xl mx-auto text-white lg:mb-[-80px]">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {serviceContent[0].heading}
          </h1>
        </div>
      </div>

      {/* Section 2*/}
      <div className="py-14 px-5 md:px-14">
        <div className="max-w-screen-xl container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:basis-3/4 md:pr-14">
              <h2 className="text-3xl lg:text-4xl mb-4 leading-10">
                {serviceContent[1].heading}
              </h2>
              <p className="text-base">{serviceContent[1].content}</p>
            </div>
            <div className="w-full md:basis-1/4">
              <Image
              className="bg-transparent w-full"
                src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
                width={250}
                height={250}
                alt="Service Image"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Section 3*/}
      <div className="py-14 px-5 md:px-14 min-h-[400px] bg-fixed"  style={{ backgroundImage: `url(${serviceContent[2].backgroundImage})` }}>
        <div className="max-w-screen-xl container mx-auto">
        </div>
      </div>

      {/* Section 4 */}
      <div className="py-14 mt-5 px-5 md:px-14 ">
        <div className="max-w-screen-xl container mx-auto">
          <div className="flex md:items-center flex-col md:flex-row gap-5 md:gap-10">
            <div className="basis-1/2">
                <Image
                 src={serviceContent[3].image || defImage}
                  className="w-full md:max-w-[500px] lg:max-w-[600px] rounded-xl"
                  alt="Service Image"
                  width={650}
                  height={650}
                />
            </div>
            <div className="basis-1/2">
              <h3 className=" text-3xl mb-3">{serviceContent[3].title}</h3>
              <p className="text-base mb-3">{serviceContent[3].content}</p>
              
              <p className="underline underline-offset-4 text-sm font-bold">
                <a className="text-black" href="#">
                  Chat Now!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="pb-14 pt-5 px-5 md:px-14 lg:mb-5">
        <div className="max-w-screen-xl container mx-auto">
          <div className="flex flex-col-reverse md:items-center md:flex-row gap-5 md:gap-10">
            <div className="basis-1/2">
              <h3 className="text-3xl mb-3">{serviceContent[4].title}</h3>
              <p className="text-md mb-3">{serviceContent[4].content}</p>
              <ul className="list-disc ml-4 mb-4">
                <li>{serviceContent[4]?.sub?.[0].Point1}</li>
                <li> {serviceContent[4]?.sub?.[0].Point2}</li>
                <li> {serviceContent[4]?.sub?.[0].Point3}</li>
              </ul>
              <p className="underline underline-offset-4 text-sm font-bold">
                <a className="text-black" href="#">
                  Explore More!
                </a>
              </p>
            </div>
            <div className="basis-1/2">
              <Image 
              src={serviceContent[4].image || defImage} 
              width={650}
              height={650}
              className="w-full md:max-w-[500px] lg:max-w-[600px] ml-auto rounded-xl"
              alt="Service Image"
               />
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="py-14  bg-gray-100 px-5 md:px-14">
        <div className="max-w-screen-xl container mx-auto text-center">
          <div className="mb-14 md:mb-10">
          <h2 className="text-3xl md:text-4xl mb-4">
            {serviceContent[5].title}
          </h2>
          <p className="max-w-3xl mx-auto text-sm">
            {serviceContent[5].intro}
          </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-5 mb-4 text-left">
            <div className="basis-1/3 border bg-white rounded-lg shadow-md">
              <Image
               src={serviceContent[5]?.reads?.[0].image || defImage} 
               alt="Servive Image"
               className="rounded-t-lg roun-r-lg" 
               width={650}
               height={650}
               />
              <div className="p-5 flex flex-col gap-2">
                <h5 className="text-lg">{serviceContent[5]?.reads?.[0].title}</h5>
                <p className="text-sm mb-2 text-gray-600">
                  {serviceContent[5]?.reads?.[0].content}
                </p>
                <p className="text-sm">
                  <a
                    className="underline-offset-2 underline text-black font-semibold"
                    href="#"
                  >
                    Explore More!
                  </a>
                </p>
              </div>
            </div>
            <div className="basis-1/3 border bg-white  rounded-lg  shadow-md">
              <Image 
              width={650}
              height={650}
              alt="Service Image"
              src={serviceContent[5]?.reads?.[1].image || defImage} className="rounded-t-lg roun-r-lg" />
              <div className="p-5 flex flex-col gap-2">
                <h5 className="text-lg">{serviceContent[5]?.reads?.[1].title}</h5>
                <p className="text-sm mb-2 text-gray-600">
                {serviceContent[5]?.reads?.[1].content}
                </p>
                <p className="text-sm">
                <a
                    className="underline-offset-2 underline text-black font-semibold"
                    href="#"
                  >
                    Explore More!
                  </a>
                </p>
              </div>
            </div>
            <div className="basis-1/3 border bg-white  rounded-lg  shadow-md">
              <Image
              width={650}
              height={650}
              alt="Service Image"
              src={serviceContent[5]?.reads?.[2].image || defImage} className="rounded-t-lg roun-r-lg" />
              <div className="p-5 flex flex-col gap-2 ">
                <h5 className="text-lg">{serviceContent[5]?.reads?.[2].title}</h5>
                <p className="text-sm mb-2 text-gray-600">
                {serviceContent[5]?.reads?.[2].content}
                </p>
                <p className="text-sm">
                <a
                    className="underline-offset-2 underline text-black font-semibold"
                    href="#"
                  >
                    Explore More!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
