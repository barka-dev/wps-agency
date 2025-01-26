import React from 'react'
import TeamMember from './TeamMember'

const Teams = () => {
  return (
        <section
        id="team"
        className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                Meet Our Team
                </span>
                <h2
                  className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                >
                  Our Creative Team
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                Our team consists of skilled developers, marketers, and strategists dedicated to delivering exceptional results.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <TeamMember name="Abdessalam BARKA" role="Co-CEO, Web & Mobile Development and Product Management"/>
            <TeamMember name="Abdelghani ANOUAR" role="Co-CEO, Digital Marketing and Client Relations"/>
            <TeamMember name="Omar ABRAOUCH" role="QA Lead and Technical Support Specialist"/>
            <TeamMember name="Badr BERRA" role="Design & User Experience Lead | Social Media Content Specialist"/>
          </div>
        </div>
      </section>
  )
}

export default Teams