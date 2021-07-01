function Prato({ nome, preco, quantidade, setQuantidade }) {
  return (
    <>
      <label>{nome}</label>
      <br />
      <input type="number" min="0" name={nome} value={quantidade} onChange={e => setQuantidade(e.target.valueAsNumber)}/>
      <span> x {`R$ ${preco} = ${preco * quantidade}`}</span>
    </>
  );
}

export default Prato;
