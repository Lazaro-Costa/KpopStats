import './App.css'
import { CardIdol } from './Components/CardIdol/index'
import { Label } from './Components/Label'
import PhotoItem from './Components/Photo/PhotoItem'
function App() {
  return (
  <div>
      <CardIdol.Root>
        <CardIdol.Container>
          <PhotoItem url="https://i.ibb.co/r2RGW9b/Lesserafim.jpg" alt="Lesserafim"/>
          <Label.Root>
            <h1>Hello World</h1>
            {/* Comentar alteracoes - Criar o CSS do Label Root */}
          </Label.Root>
        </CardIdol.Container>
      </CardIdol.Root>
    </div>
  )
}
export default App
