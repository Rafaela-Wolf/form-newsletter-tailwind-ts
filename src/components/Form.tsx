const Form = () => {
  return (
    <form>
      <div>
        <label>Nome</label>
        <input 
          type="text"
          placeholder="Digite seu nome" 
        />
      </div>

      <div>
        <label>E-mail</label>
        <input 
          type="text"
          placeholder="Insira seu e-mail" 
        />
      </div>

      <div>
        <a href="#">Leia os termos</a>
        <div>
          <input 
            type="checkbox"
          />
          <label>Concordo com os termos</label>
        </div>

        <button type="submit">Cadastrar</button>
      </div>
    </form>
  )
}

export default Form;