import { data } from "../../../data/data";
import BlogPost from "../components/BlogPost";
import Navbar from "../components/navbar";

const Page = () => {
    return (
        <div className="bg-neutral">
        
        <div className="flex flex-col space-y-5 justify-center items-center min-h-screen pt-5">
            
            {data.map((item) => (
                <BlogPost key={item.id} item={item} />
            ))}
        </div>
        </div>
    );
}

export default Page;
