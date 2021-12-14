import React,{useState} from 'react'

const Count = () => {
  const [num,setNum] = useState(0);
  const countUp = () => {
    setNum(prevState => prevState+1);
  }
  const countDown = () => {
    setNum(prevState => prevState-1);
  }
  return (
    <div>
      <h1 className="m-4">カウントページです</h1>
      <button onClick={countUp} className={"text-base text-white p-1  w-40 rounded-3xl text-center bg-pink-600 font-normal border-8 border-white shadow"}>カウントアップ</button>
      <button onClick={countDown} className={"text-base text-white p-1  w-40 rounded-3xl text-center bg-pink-600 font-normal border-8 border-white shadow"}>カウントダウン</button>
      <p className="m-8 w-10 h-10 p-1.5 text-white text-center rounded-lg bg-green-300">{num}</p>
    </div>
  )
}

export default Count
