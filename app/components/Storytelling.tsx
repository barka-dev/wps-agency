import React from 'react'

const Storytelling = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              {/* <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span> */}
              <h2
                className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
              >
                Our Journey, Your Success
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
              At <b>WebpackSolution</b>, we believe every business has a unique journey, and we’re here to make that journey as seamless and successful as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14 h-[430px]"
            >
              <span
                className="mb-5 block text-xl font-medium text-primary"
              >
                It all started with a challenge.
              </span>
              <div className="mb-[50px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                  Many businesses face the struggle of managing complex tasks manually, which slows down growth and hinders potential. When we began working with our first clients, they were overwhelmed by inefficiencies—managing multiple processes across departments without a unified system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14 h-[430px]"
            >
              <span
                className="mb-5 block text-xl font-medium text-primary"
              >
                Then we stepped in.
              </span>
              <div className="mb-[50px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                  We didn’t just create solutions; we created transformations. We worked closely with each client, understanding their unique challenges and goals. Our team of developers and digital marketers crafted tailored tools, designed websites, and automated manual processes that empowered these businesses to operate faster, smarter, and more effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14 h-[430px]"
            >
              <span
                className="mb-5 block text-xl font-medium text-primary"
              >
                The outcome?
              </span>
              <div className="mb-[50px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                  Businesses that once struggled to keep up with their competitors now experienced accelerated growth. With the tools we provided, they cut down operational costs, improved customer interactions, and gained a competitive edge in the digital world. Success wasn’t just an outcome—it was a journey, and we were with them every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Storytelling