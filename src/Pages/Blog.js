import React from "react";
import Layout from "../Layout";
import BlogList from "../Components/BlogList";
import { blogData } from "../Data";
import { useSelector } from "react-redux";

export default function Blog() {
  const BlogsData = useSelector((state) => state.Blogs.Blogs);
  // //console.log.log(BlogsData);
  return (
    <Layout title="Blog">
      <BlogList data={blogData} data1={BlogsData} />
    </Layout>
  );
}
