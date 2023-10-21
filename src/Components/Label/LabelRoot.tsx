import React from 'react'
type ILabelRoot = {
  children: React.ReactNode;
}
const LabelRoot = ({children}: ILabelRoot ) => {
  return (
    <div>{children}</div>
  )
}

export default LabelRoot
