
export default function Footer() {
  return (
    <div >
      <div >
       <p className="px-4 text-xs font-thin text-right text-rose">Tools used for this website</p>
       <div className="flex justify-end px-4 my-3 md:w-full"> 
      <img src="../tools/nextjs.png" className="w-6 h-6 mx-1 rounded-full" alt=""/>
      <img src="../tools/react.png" className="w-6 h-6 mx-1 rounded-full " alt=""/>
       <img src="../tools/tailwind.png" className="w-6 h-6 mx-1" alt=""/>
       <img src="../tools/js.png" className="w-6 h-6 mx-1" alt=""/>
       <img src="../tools/html.png" className="w-6 h-6 mx-1 " alt=""/>
       {
      // <img src="../tools/git.png" className="w-8 h-8 mx-2"/>
       //<img src="../tools/vs_code.png" className="w-8 h-8 mx-2"/>
      }</div>
      </div>
    </div>
  )
}