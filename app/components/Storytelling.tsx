import React from 'react'

const Storytelling = () => {
  return (
    <section
      id="mission"
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
                className="mb-5 block text-xl font-semibold text-primary"
              >
                It all started with a challenge.
              </span>
              <div className="mb-[50px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                  A small business struggled to streamline its operations, relying on manual processes for tasks like client follow-ups, inventory management, and sales tracking. This inefficiency was affecting their growth and productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14 h-[500px]"
            >
              <span
                className="mb-5 block text-xl font-semibold text-primary"
              >
                Then we stepped in.
              </span>
              <div className="mb-[50px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                  At <b>WebpackSolution</b>, we developed a custom web app solution that automated key manual tasks, including client communication and sales tracking. By leveraging advanced digital marketing strategies, we helped the client boost their online presence and target a larger audience effectively. Additionally, we integrated real-time inventory management and task automation features into the app, making operations faster and more efficient.
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
                className="mb-5 block text-xl font-semibold text-primary"
              >
                The outcome?
              </span>
              <div className="mb-[50px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                  The solution led to a <b>40% reduction in manual labor</b> and a <b>25% increase in sales</b> within the first three months of implementation. The client’s online visibility grew significantly, with a <b>50% increase in website traffic</b>, resulting in more qualified leads and a stronger brand presence in their market.
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