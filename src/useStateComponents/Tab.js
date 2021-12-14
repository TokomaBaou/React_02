import React,{useState} from 'react'
import Count from './Count';
import InputForm from './InputForm';

const Tab = () => {
  const [countTab,setCountTab] = useState(true);
  const countTabClick = () => {
    setCountTab(true);
  }
  const inputTabClick = () => {
    setCountTab(false);
  }

  return (
    <div>
      <button onClick={countTabClick} className = {"text-base text-black-400 p-1 mt-11 w-24 rounded-3xl text-center text-blue-600 font-normal border-2 border-blue-700 hover:bg-blue-700 hover:text-white"}>count</button>
      <button onClick={inputTabClick} className={"text-base text-black-400 p-1 w-24 rounded-3xl text-center text-blue-600 font-normal border-2 border-blue-700 hover:bg-blue-700 hover:text-white"}>input</button>
      {countTab === true ? <Count/> : <InputForm/>}
    </div>
  )
}

export default Tab
