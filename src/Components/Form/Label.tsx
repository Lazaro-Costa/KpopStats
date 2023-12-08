const Label = ({name, id}: {name: string, id: string}) => {
  return (
    <label className='text-slate-200' htmlFor={name} id={id} />
  )
}

export default Label
