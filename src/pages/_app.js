import 'globals.css'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
function _app({ Component, pageProps }) {
  return (
    <div className="font-century_gothic text-gold">
      <Header/>
      <div className="grid grid-cols-12 gap-4 px-5 my-8 lg:gap-x-6 text-s lg:px-8 sm:px-20 md:px-32 md:text-xl lg:text-2xl">
        <div className="col-span-3 p-1 text-s lg:col-span-1 md:text-l lg:text-xl ">
          <Navbar/>
        </div>
        <div className="flex flex-col col-span-9 p-4 overflow-y-auto lg:col-span-10 bg-royal rounded-2xl " >
          <Component {...pageProps} />
        </div>
      </div> 
      <div className="text-white "><Footer/></div>    
    </div>
  )
}
export default _app
