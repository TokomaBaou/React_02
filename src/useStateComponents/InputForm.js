import React,{useState} from 'react'

const InputForm = () => {
  const [text,setText] = useState("ここに反映されます");
  const onChangeText = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <h1 className="m-4">インプットフォームページです</h1>
      <input className="mx-4 text-blue-600 font-normal border-2 border-blue-700 p-2 rounded-lg" onChange={onChangeText} type="text" placeholder="文字を入力してください"/>
      <p className="m-4 bg-gray-300 w-40 text-gray-600 text-center p-1.5 h-9 rounded-lg" >{text}</p>
    </div>
  )
}

export default InputForm
