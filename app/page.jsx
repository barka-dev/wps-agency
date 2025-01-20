import Image from "next/image";
import CounterSection from "./components/CounterSection";
import TeamMemberCard from "./components/TeamMemberCard";

const Home = () => {
  return (
    <section className="text-black body-font lg:pt-20">
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
            <div className="flex flex-col w-full mb-2 text-left md:text-center ">
                <h1 className="mb-2 text-5xl font-bold tracking-tighter text-white lg:text-8xl md:text-5xl">
                    {/* <span>We are making </span>
                    <br className="hidden lg:block"></br>
                    Stunning websites */}
                    Empowering Businesses with Cutting-Edge Digital Solutions
                </h1>
                <br></br>
                <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
                    {/* <span className="text-orange-500">webpacksolution</span> is a free to use template website for websites made with{" "}
                    <a href="https://nextjs.org/" className="underline">
                    Next.js
                    </a>{" "}
                    and styled with Tailwind CSS */}
                    Transform manual tasks into seamless digital workflows, boost online sales, and attract more clients with our expert digital marketing, web, and mobile solutions.
                </p>
            </div>
        </div>
        <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
            <Image priority
            className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
            alt="hero"
            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1920}
            height={1080} 
            />
        </div>
        <section className="text-gray-600 body-font">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <CounterSection/>
                        <CounterSection/>
                        <CounterSection/>
                    </div>
                </div>
            </section>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <Image priority
                    alt="feature"
                    className="object-cover object-center h-full w-full"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={2100}  // Add appropriate width
                    height={2100} 
                    />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                            <h2 className="text-white text-2xl title-font font-medium mb-3">
                            Digital Marketing
                            </h2>
                            <p className="leading-relaxed text-lg">
                            From SEO to social media campaigns, we craft strategies to boost your online visibility and drive conversions.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                            <h2 className="text-white text-2xl title-font font-medium mb-3">
                            Website Development
                            </h2>
                            <p className="leading-relaxed text-lg">
                            Responsive, user-friendly websites designed to captivate your audience and deliver results.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                            <h2 className="text-white text-2xl title-font font-medium mb-3">
                            Web App Development
                            </h2>
                            <p className="leading-relaxed text-lg">
                            Custom web applications tailored to your business needs for enhanced functionality and efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                            <h2 className="text-white text-2xl title-font font-medium mb-3">
                            Mobile App Development
                            </h2>
                            <p className="leading-relaxed text-lg">
                            Intuitive mobile apps that bring your business closer to your customers anytime, anywhere.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                            <h2 className="text-white text-2xl title-font font-medium mb-3">
                            Automation Solutions
                            </h2>
                            <p className="leading-relaxed text-lg">
                            Streamline manual processes with automation to save time and reduce errors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="sm:text-5xl font-medium title-font text-white mb-4">Our Team</h2>
                    <p className="text-base leading-relaxed md:w-2/3 xl:w-1/3 lg:w-2/4 mx-auto text-gray-500s">Our team consists of skilled developers, marketers, and strategists dedicated to delivering exceptional results.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
                    </div>
                    <div className="container px-5 py-16 mx-auto">
                        <div className="flex flex-wrap -m-4 justify-center">
                            <TeamMemberCard 
                                imageUrl="" 
                                name="Abdessalam BARKA" 
                                role="CEO - Senior Web & Mobile Developer" 
                                description="A visionary developer who transforms complex business challenges into elegant web and mobile solutions, specializing in creating scalable, user-centric applications that drive digital innovation."
                            />
                            <TeamMemberCard 
                                imageUrl="" 
                                name="Abdelghani ANOUAR" 
                                role="CEO - Degital Marketer" 
                                description="A strategic digital marketing expert who crafts data-driven campaigns and optimizes online presence to boost brand visibility, engage target audiences, and drive sustainable business growth."
                            />
                            <TeamMemberCard 
                                imageUrl="" 
                                name="Omar ABRAOUCH" 
                                role="QA Lead" 
                                description="An experienced quality assurance leader who ensures the delivery of flawless digital solutions through meticulous testing processes, fostering reliability and user satisfaction."
                            />
                            <TeamMemberCard 
                                imageUrl="" 
                                name="Badr BERRA" 
                                role="UX/UI Designer" 
                                description="A creative UX/UI designer who crafts intuitive and engaging interfaces, enhancing user experiences and bridging the gap between design and functionality."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  );
}

export default Home;