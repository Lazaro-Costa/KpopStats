import React from 'react'
import Input from '../InputPlaceholder/Input'
import { ICreateBanner, ICreateProfile } from '../../../../Interfaces/Interfaces.api'

type IBP = {
  banner: ICreateBanner['url']
  profile: ICreateProfile['url']
  onBanner: (event: React.ChangeEvent<HTMLInputElement>) => void
  onProfile: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputBP = ({banner, profile, onBanner, onProfile}: IBP) => {
  const [keywords, setKeywords] = React.useState<string[]>([])
  const [iban, setIban] = React.useState<string>('')

  const banHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIban(event.target.value)
    onBanner(event)
  }

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      if (banner.trim() !== '') {
        setKeywords([...keywords, banner.trim()]);
        setIban('');
      }
    }
  }

  return (
    <div className='flex flex-col gap-3 p-2 bg-zinc-900 rounded-lg max-w-max'>

      <div className='flex flex-wrap items-center'>
      {keywords && keywords.map((keyword, index) => (
        <div
          key={index}
          className="bg-blue-900 rounded-full py-1 px-3 mr-2 mb-2 flex items-center"
        >
          <span className="mr-2">{keyword}</span>
          <button
            onClick={() => setKeywords([...keywords.slice(0, index), ...keywords.slice(index + 1)])}
            className="focus:outline-none"
          >
            X
          </button>
        </div>
      ))}
      </div>

      <Input req content={'Banners'} value={iban} onChange={banHandler} onKeyDown={handleKey}/>
      <Input req content={'Profiles'} value={profile} onChange={onProfile} />

      <pre>{JSON.stringify(keywords, null, 2)}</pre>
    </div>
  )
}

export default InputBP
