import CadCompany from "./CadCompany"
import CadGroup from "./CadGroup"
import CadIdol from "./CadIdol"

const Cadastro = () => {

  return (
    <div className={`glass border-glass-full container h-full w-full flex flex-col p-4 gap-4`}>
      <h1 className='text-3xl text-slate-200'>Cadastro</h1>
      <section className="grid grid-flow-col gap-6 w-full p-4 justify-center">
        <CadCompany/>
        <CadGroup/>
        <CadIdol/>
      </section>

    </div>
    //* Precisa criar os componentes de Select para Solista e ID.
  )
}

export default Cadastro
