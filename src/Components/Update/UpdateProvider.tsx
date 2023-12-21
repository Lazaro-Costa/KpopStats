import Head from "../Helper/Head"
import UpdateCompany from "./UpdateCompany"


const UpdateProvider = () => {

  return (
    <div className={`glass border-glass-full container h-full w-full flex flex-col p-4 gap-4`}>
      <Head title="Update" description="Update Info"/>
      <h1 className='text-3xl text-slate-200'>Update</h1>
      <section className="grid grid-flow-col gap-6 w-full p-4 justify-center">
        <UpdateCompany/>
      </section>

    </div>
  )
}

export default UpdateProvider
