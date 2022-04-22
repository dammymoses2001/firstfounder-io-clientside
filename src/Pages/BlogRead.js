import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../Layout";
// import BlogList from "../Components/BlogList";
import BlogHeader from "../Components/BlogHeader";
import BlogRead from "../Components/BlogRead";
// import { blogData } from "../Data";

export default function Blog() {
  let { id } = useParams();
  const history = useHistory();

  const BlogsData = useSelector((state) => state.Blogs.Blogs);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // //console.log.log(BlogsData, id, 'blogdata');
    if (id && BlogsData.length) {
      const blog = BlogsData.find((blog) => blog.id === Number(id));
      ////console.log.log(blog, 'blog');

      if (blog?.title) {
        setCurrentBlog(blog);
        setLoading(true);
      } else {
        history.push("/blog");
      }
    }
  }, [BlogsData, id, history]);
  //console.log.log(currentBlog);
  return loading && currentBlog && currentBlog.title ? (
    <Layout title={`Blog | ${currentBlog && currentBlog.title}`}>
      <BlogHeader data={currentBlog} />
      <BlogRead data={currentBlog} data1={BlogsData} />
    </Layout>
  ) : (
    "loading"
  );
}
