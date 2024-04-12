import React from 'react'
import data from "../../Data/data.json";
import Title from '../../UI/Title';
import { Link } from 'react-router-dom';
import { BlogsCard } from '../Blogs/Blogs';
const BlogsList = () => {
  return (
    <>
       <Title text=" خواندنی ها"/>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.blogs.slice(0, 2).map(({ id, src, title }) => {
          return (
            <React.Fragment key={id}>
              <BlogsCard id={id} src={src} title={title}/>
            </React.Fragment>
          );
        })}
      </div>
       <Link to="/blogs">
       <Title text="نمایش بیشتر..."/>
    </Link>
    </>
  )
}

export default BlogsList
