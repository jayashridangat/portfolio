import 'globals.css'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
function _app({ Component, pageProps }) {
  return (
    <>
      <Header/>
     
      <div className="grid grid-cols-12 gap-6 px-5 my-12 lg:px-8 sm:px-20 md:px-32">
        <div className="col-span-3 p-1 bg-royal lg:col-span-1 text-gold">
          <Navbar/>
        </div>
        <div className="flex flex-col col-span-9 p-4 overflow-hidden bg-royal text-gold lg:col-span-9 rounded-2xl font-Montserrat">
          <Component {...pageProps} />
        </div>
      </div> 
      <div className="text-white"><Footer/></div>
      
    </>
  )
}
export default _app
