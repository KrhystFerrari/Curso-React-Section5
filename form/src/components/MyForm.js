import './MyForm.css';


const MyForms = () => {
  return (
    <div>
        {/* 1 - Criação de Form */}
        <form >
          <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" name='name' placeholder='Digite o seu nome: ' />
          </div>
          {/* 2 - Label envolvendo o Input (sugerida na doc do React) */}
          <label>
            <span>e-mail: </span>
            <input type="email" name='email' placeholder='e-mail: ' />
          </label>
          <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForms