import Navbar from "../components/navbar"

const PageLayout = ({children}) => {
    return (
        <>
        <Navbar />
        <div>{children}</div>
        </>
    )
}

export const metadata = {
    title: 'blogs',
    description: "blogs from fake data list"
  }

export default PageLayout