import React from 'react'
import CardProvider from '../Card/CardProvider/CardProvider'

const UpdateImgs = ({children}: {children: React.ReactNode}) => {
  return (
    <CardProvider>
      {children}
    </CardProvider>
  )
}

export default UpdateImgs
