import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLoaderData } from 'react-router-dom';
const About = () => {
    const LoadData=useLoaderData()
    console.log(LoadData);
    
    const WithStyles = ({ description, headline, image }) => (
        <div className="p-4">
            <img src={image} alt={headline} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-4">{headline}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
    
    return (
        <div>
            <div className="bg-common">
                <div className="w-7/12 text-center py-7 mx-auto">
                    <h1 className="text-3xl text-white">About Gadget Heaven</h1>
                    <p className="text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
            <div className="flex space-x-5 w-11/12 mx-auto ">
                <div className="w-8/12  rounded-lg shadow-2xl mt-7 p-3">
                 <h1 className='text-xl'>About Us</h1>
                 <p className='py-5'>Welcome to Gadget Heaven your number one source for all things tech! We're dedicated to providing you with the very best of electronic devices, with a focus on reliability, customer service, and uniqueness.</p>
                 <p>Founded in 2000 Gadget Heaven has come a long way from its beginnings. When we first started out, our passion for technology drove us to do tons of research, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the country, and are thrilled to be a part of the quirky wing of the tech industry.</p>
                
                 <p>Thank you for choosing Gadget Heaven! We look forward to serving you and helping you find the perfect tech products for your needs.</p>

                 <p className='pt-7 text-xl'>Our Values</p>
                 <ul>
                    <li>Quality: We ensure that all our products meet high-quality standards.</li>
                    <li>Innovation: We stay ahead of the trends to bring you the latest technology.</li>
                    <li>Customer Satisfaction: Our goal is to provide exceptional service and support.</li>

                 </ul>

                </div>
                <div className="w-4/12 mt-7 rounded-lg ">
                <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Contact </h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                        <input 
                            id="name" 
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-common" 
                            type="text" 
                            placeholder="Enter your name" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                        <input 
                            id="email" 
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-common" 
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                        <textarea 
                            id="message" 
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-common" 
                            rows="4" 
                            placeholder="Type your message here" 
                            required 
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full p-2 bg-common text-white rounded hover:bg-common transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
</div>




                </div>
            </div>
            <h1 className='text-center mt-12 mb-7 text-5xl'>Our All Branch</h1>
            <div className="w-11/12 mx-auto">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    customTransition="all 1s linear"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                    transitionDuration={2000}
                    >
                    {
                        LoadData?.map(data=>
                        <WithStyles
                        description={data.location}
                        headline={data.store_name}
                        image={data.image}
                    />
                        )
                    }
                    
                </Carousel>
            </div>
        </div>
    );
};

export default About;