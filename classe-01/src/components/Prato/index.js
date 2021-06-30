function Prato({ nome, preco, quantidade }) {
  return (
    <>
      <label name={nome}>Alo</label>
      <br />
      <input type="number" min="0" name={nome} />
      <span> x {`R$ ${preco} = ${preco + quantidade}`}</span>
    </>
  );
}

export default Prato;
