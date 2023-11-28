import React from 'react'
import Input from '../InputPlaceholder/Input'

type IURL= {
  label: string
  state: string
  setState: React.Dispatch<React.SetStateAction<string[]>>
}
const Url = ({state, setState, label}: IURL) => {
  const [keywords, setKeywords] = React.useState<string[]>([]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      if (state.trim() !== '') {
        setKeywords([...keywords, state.trim()]);
        setState([...keywords]);
      }
    }
  }

  const handleInputChange = ({target}) => {
    setState(target.value)
  }

  const removeKeyword = (index: number) => {
    const newKeywords = [...keywords];
    newKeywords.splice(index, 1);
    setKeywords(newKeywords);
  }

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className="bg-blue-900 rounded-full py-1 px-3 mr-2 mb-2 flex items-center"
          >
            <span className="mr-2">{keyword}</span>
            <button
              onClick={() => removeKeyword(index)}
              className="focus:outline-none text-xs font-mono font-bold flex justify-center items-center w-4 h-4 bg-red-500 rounded-[50%]"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <Input req content={label} value={state} onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
    </div>
  )
}

export default Url
