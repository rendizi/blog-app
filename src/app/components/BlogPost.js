"use client";

import { useRouter } from 'next/navigation';


const BlogPost = (props) => {
    const router = useRouter();

    function changeUrl(){
        router.push(`/blog/${props.item.id}`);
    }

    return (
        <div className="min-h-32 bg-base-300 rounded-3xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 sm:p-6 md:p-8 transition-transform duration-300 ease-in-out transform hover:scale-105" onClick={changeUrl}>
            <h2 className="text-3xl font-bold ml-5 mt-3">{props.item.id}. {props.item.title}</h2>
            <div className="flex flex-col sm:flex-row justify-between ml-5 mr-5 mt-3 sm:mt-0">
                <h3 className="text-lg font-medium text-gray-700">by {props.item.author}</h3>
                <h3 className="text-lg font-medium text-gray-700">created at: {props.item.date}</h3>
            </div>
            <p className="ml-5 mt-3 mb-3">{props.item.description}</p>
        </div>
    );
}

export default BlogPost;
