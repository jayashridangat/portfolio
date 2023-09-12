import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
function _app({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
export default _app