import './App.css'
import Heading from './component/Heading'

function App() {
  return (
    <>
      <div className='py-[300px] bg-blue-900'>
        <Heading htext={"RAFID"} className={"text-center relative before:absolute before:h-2 before:w-[80px] before:bg-teal-600 before:-bottom-[0px] before:left-0 inline-block ml-[50%] translate-x-[-50%] after:absolute after:h-2 after:w-[80px] after:bg-teal-600 after:-bottom-[-75px] after:right-0 before:hover:bg-white after:hover:bg-white hover:text-teal-400"} />
      </div>
    </>
  )
}

export default App 
