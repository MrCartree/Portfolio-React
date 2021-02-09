import React from "react";
import { Blog } from "../Blog.js";
import Header from '../component/Header/Header.js';
import BlogCard from "../component/BlogCard/BlogCard";

function Portfolio() {
    function renderProjects() {
        return Blog.map((blog) => {
            return (
                <BlogCard key={blog.id} {...blog} />
            )
        })
    }
    return (
        <React.Fragment>
            <Header page="Blog" />
            <div className="">
                {renderProjects()}
            </div>
        </React.Fragment>
    )
}

export default Portfolio;