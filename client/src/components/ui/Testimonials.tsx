import React from 'react'
import { Rating } from "@mui/material";


type TestimonialsProps = {
  name: string;
  title: string;
  comment: string;
  stars: number;
  imageUrl: string;
};


const Testimonials = ({name, title, comment, stars, imageUrl}: TestimonialsProps) => {
  return (
    <>
      <div className="testimonials-container text-colummn bg-[#F4F4F4] p-6 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
        <div className="star">
          <Rating value={stars} readOnly />
        </div>
        <div className="comment font-black text-gray-600 text-[18px]">
          <p>
           “{comment}”
          </p>
        </div>
        <div className="testimonial-perfil flex items-center mt-4 gap-4">
          <img src={imageUrl} alt="" 
          style={{width:'60px'}}/>
          <div className="titulos">
            <h6 className='font-bold text-[17px]'>
              {name}
            </h6>
            <p className='text-[15px] text-gray-500'>
             {title}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
