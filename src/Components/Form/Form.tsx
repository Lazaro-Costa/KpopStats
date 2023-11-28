import React from 'react'

const Form = ({children}: {children: React.ReactNode}) => {
  return (
    <form className='flex flex-col'>
      {children}
    </form>
  )
}

export default Form
