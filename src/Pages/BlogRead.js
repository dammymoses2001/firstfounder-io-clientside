import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import BlogHeader from "../Components/BlogHeader";
import BlogRead from "../Components/BlogRead";

export default function Blog() {
  let { id } = useParams();
  const history = useHistory();

  const BlogsData = useSelector((state) => state.Blogs.Blogs);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id && BlogsData.length) {
      const blog = BlogsData.find((blog) => blog.id === Number(id));

      if (blog?.title) {
        setCurrentBlog(blog);
        setLoading(true);
      } else {
        history.push("/blog");
      }
    }
  }, [BlogsData, id, history]);
  return loading && currentBlog && currentBlog.title ? (
    <Layout title={`Blog | ${currentBlog && currentBlog.title}`}>
      <BlogHeader data={currentBlog} />
      <BlogRead data={currentBlog} data1={BlogsData} />
    </Layout>
  ) : (
    "loading"
  );
}
