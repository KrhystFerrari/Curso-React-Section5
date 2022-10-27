import './MyForm.css';
import { useState } from 'react';


const MyForms = () => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }
  console.log(name)
  console.log(email)

  return (
    <div>
        {/* 1 - Criação de Form */}
        <form >
          <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" name='name' placeholder='Digite o seu nome:' onChange={handleName} />
          </div>
          {/* 2 - Label envolvendo o Input (sugerida na doc do React) */}
          <label>
            <span>e-mail: </span>
            <input type="email" name='email' placeholder='e-mail:' onChange={(e) => setEmail(e.target.value) } />
          </label>
          <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForms