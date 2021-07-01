function Prato({ nome, preco, quantidade, setQuantidade }) {
  return (
    <>
      <label >{nome} <br/>
        <input type="number" min="0"  value={quantidade} onChange={e => setQuantidade(e.target.valueAsNumber)}/>
      </label>
      <span> x {`R$ ${preco} = ${preco * quantidade}`}</span>
    </>
  );
}

export default Prato;
