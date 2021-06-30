function Prato({ nome, preco, quantidade }) {
  return (
    <>
      <label>{nome}</label>
      <br />
      <input type="number" min="0" name={nome} />
      <span> x {`R$ ${preco} = ${preco + quantidade}`}</span>
    </>
  );
}

export default Prato;
