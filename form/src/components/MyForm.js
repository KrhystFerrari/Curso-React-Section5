import './MyForm.css';
import { useState } from 'react';


const MyForms = () => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }
  //console.log(name)
  //console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Enviando o formulario')
    console.log(name, email)
  }

  return (
    <div>
        {/* 5 - Envio de form */}
        {/* 1 - Criação de Form */}
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" name='name' placeholder='Digite o seu nome:' onChange={handleName} />
          </div>
          {/* 2 - Label envolvendo o Input (sugerida na doc do React) */}
          <label>
            <span>e-mail:</span>
            {/* 4 - Simplificando a manipulação de state */}
            <input type="email" name='email' placeholder='e-mail:' onChange={(e) => setEmail(e.target.value) } />
          </label>
          <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForms