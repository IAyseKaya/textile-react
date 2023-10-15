import { useState } from 'react';
import slides from '../datas/slides.js';

function MainPage() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

    };

    return(
        <div className="main flex flex-col items-center justify-center">
             <div className="slider-container lg:w-4/5 w-full ">
                <div className='w-full h-[700px] m-auto relative group '>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='slider-control w-full h-full bg-center bg-cover lg:rounded-xl sm:rounded-none'
                    >
                        <div className="slider-text absolute flex items-center justify-center h-full w-full">
                            <div className="text flex items-center justify-center h-full w-full">
                                <div className="flex flex-col items-center justify-center m-10 h-full w-full">
                                    <h1 className="mt-28 text-4xl text-white font-bold tracking-tight drop-shadow-lg ">
                                        {slides[currentIndex].header}
                                    </h1>
                                    <p className="mt-4 text-xl text-white drop-shadow-lg ">
                                        {slides[currentIndex].description}
                                    </p>
                                    <a
                                        href={slides[currentIndex].href}
                                        className="font-semibold text-white text-lg leading-6 "
                                    >
                                        {slides[currentIndex].button} <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Arrow */}
                    <div className=' group-hover:block absolute top-[50%] -translate-x-0  left-5 text-2xl p-2  cursor-pointer'>

                        <i className="fa-solid fa-chevron-left text-white" onClick={prevSlide} size={30} ></i>
                    </div>
                    {/* Right Arrow */}
                    <div className=' group-hover:block absolute top-[50%] -translate-x-0  right-5 text-2xl  p-2  cursor-pointer'>

                        <i className="fa-solid fa-chevron-right text-white " onClick={nextSlide} size={30}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;