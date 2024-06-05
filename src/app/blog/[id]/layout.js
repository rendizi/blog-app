import { Inter } from "next/font/google";
import "@/app/globals.css";
import { data } from "../../../../data/data";

const inter = Inter({ subsets: ["latin"] });

//Generate metadata w title and description 
export async function generateMetadata({ params }){
    const id = params.id;
    if (id >= data.length){
        return {
            title: "Blog",
            description: "Fake data-blogs"
        }
    }
    return {
        title: data[id-1].title, 
        description: data[id-1].description
    }
  }

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}