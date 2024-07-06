import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { blogsData as initialBlogsData } from '../constants';

const Blogs = () => {
    const [blogs, setBlogs] = useState(initialBlogsData);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/blogs')
            .then(response => {
                // Assuming response.data is an array of blog objects
                setBlogs(prevBlogs => [...prevBlogs, ...response.data]);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl text-center my-8">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {blogs.map(blog => (
                    <div key={blog.id} className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl mt-4">{blog.title}</h3>
                        <p className="mt-2">{blog.content}</p>
                        <p className="mt-2 text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
