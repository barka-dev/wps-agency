import React from 'react'

interface TestimonialSlideProps {
    message: string,
    name: string,
    role: string,
    image: string
}

const TestimonialSlide = ({message, name, role, image}: TestimonialSlideProps) => {
  return (
    <div className="swiper-slide">
                <div
                  className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
                >
                  <div className="mb-[18px] flex items-center gap-[2px]">
                    <img
                      src="./assets/images/testimonials/icon-star.svg"
                      alt="star icon"
                    />
                    <img
                      src="./assets/images/testimonials/icon-star.svg"
                      alt="star icon"
                    />
                    <img
                      src="./assets/images/testimonials/icon-star.svg"
                      alt="star icon"
                    />
                    <img
                      src="./assets/images/testimonials/icon-star.svg"
                      alt="star icon"
                    />
                    <img
                      src="./assets/images/testimonials/icon-star.svg"
                      alt="star icon"
                    />
                  </div>

                  <p className="mb-6 text-base text-body-color dark:text-dark-6">
                    “{message}’’
                  </p>

                  <a href="#" className="flex items-center gap-4">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                      <img
                        src={image}
                        alt="author"
                        className="h-[50px] w-[50px] overflow-hidden rounded-full"
                      />
                    </div>

                    <div>
                      <h3
                        className="text-sm font-semibold text-dark dark:text-white"
                      >
                        {name}
                      </h3>
                      <p className="text-xs text-body-secondary">
                      {role}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
  )
}

export default TestimonialSlide