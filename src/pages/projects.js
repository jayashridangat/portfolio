import Head from 'next/head'
export default function projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <p  className="mx-2 my-2 text-center bg-opacity-50 rounded bg-rose text-back">Internship</p>
      <br></br>
      <div className="mx-2">
      Position:- Web-developer
      <br></br>
      Company:- Satkaam(NGO)
      <br></br>
      Duration:- 3 months
      <p className='my-1'>
      Project outline:- Worked as a website 
developer to design a 
website that&apos;s in it&apos;s 
initial stage & needed 
interactive UI/UX and 
different functionalities</p>
      </div>
      <br></br><br></br>

      <p  className="mx-2 my-2 text-center bg-opacity-50 rounded bg-rose text-back">Projects</p>
      <br></br>
      <div className="mx-2">
      Title:- Diabetic retinopathy detection
      <p className='my-1'>Problem statement:- To detect and identify the severity of diabetic retinopathy in patients using retinal fundus images</p> 
      <p className='my-1'>Domain:- Biomedical</p>
      Tech:- Python,Machine learning,Data processing,tkinkter
      <p className='my-1'>
      Duration:- 4 months</p>
      </div>

{
      // <br></br>
      // <div className="mx-2">
      // Title:- Disease detection with ECG
      // <p className='my-1'>Problem statement:- To detect and identify cardiac disease using ECG data</p> 
  //    <p className='my-1'>Domain:- Bio-medical</p>
      // Tech:- Python,Data processing,flask,HTML,js,AD8232
      // <p className='my-1'>
      // Duration:- 4 months</p>
      // </div>


      //Non-CS projects
//       <br></br>
//       <div className="mx-2">
//       Title:- Visitor counter
//       <p className='my-1'>Problem statement:- To count number of people in the room and and switches the lights on/off accordingly</p> 
//<p className='my-1'>Domain:- Microcontrollers</p>
//       Tech:- Arduino UNO, embedded C,IR-sensor, LCD interfacing.
//       <p className='my-1'>
//       Duration:- 4 month</p>
//       </div>

// <br></br>
// <div className="mx-2">
// Title:- Fridge door alarm
// <p className='my-1'>Problem statement:- To activate a buzzer if the fridge is left open for more than 30 secs</p> 
// Domain:- Digital electronics
//Tech:- Timer 555, Circuits.
// <p className='my-1'>
// Duration:- 1 month</p>
// </div>





}
      <br></br>
      <div className="mx-2">
      Title:- Open well level measurement System
      <p className='my-1'>Problem statement:- To measure and send the open well depth to smartphone using Arduino UNO and bluetooth</p>
      <p className='my-1'>Domain:- Microcontrollers </p>
      Tech:- Arduino UNO, embedded C, Bluetooth module, LCD interfacing.
      <p className='my-1'>
      Duration:- 1 month</p>
      </div>
    </div>
  )
}