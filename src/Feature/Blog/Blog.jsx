import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import data from "../../Data/data.json";
import Title from '../../UI/Title';
import { Image } from "@nextui-org/react";
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
const Blog = () => {
    const blogID = useParams()
    const [blogDetails , setBlogDetails] = useState([])
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    useEffect(() => {
        const filteredBlog = data.blogs.filter(blogItem => blogItem.id === +blogID.id)  
       setBlogDetails(filteredBlog[0])
    }, [blogID.id])
  return (
    <section className='container my-8'>
      <div className='flex flex-col items-center gap-6'>
         <Title text={`${blogDetails.title}`}/>
         <img
          width={512}
          height={512}
          alt="ghorbani-dev.ir"
          src={`./../${blogDetails.src}`}
          isZoomed
          className="object-fill rounded-xl max-w-full"
        />
        <div className='flex-center gap-3 max-w-lg'>
          <div className='flex-center gap-1'>
            <HiOutlineCalendar /> {blogDetails.date}
          </div>
          <div className='flex-center gap-1'>
          <HiOutlineClock /> {blogDetails.time}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: blogDetails.content}}></div>
         
      </div>

    </section>
  )
}

export default Blog
