"use client"

import React from 'react';
import { data } from '../../../../data/data';
import BlogPost from '@/app/components/BlogPost';

const Page = (props) => {
    const [info, setInfo] = React.useState(null)
    const [found, setFound] = React.useState(false)

    React.useEffect(()=>{
        if (props.params.id > data.length){
            return 
        }
        setInfo(data[props.params.id-1])
        setFound(true)
    },[])

    return (
        <div className='h-screen bg-neutral'>
            <div className='flex align-center justify-center pt-5'>
                {found && info && 
                <BlogPost item={info}/>
                }
                {found === false && 
                <h2>Invalid id</h2>}
            </div>
        </div>
    );
};

export default Page;
