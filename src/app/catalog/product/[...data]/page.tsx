'use client'

interface ProducProps {
  params: {
    data: string[]
  }
}

export default function Product({params}: ProducProps) {
  const [productId, size, color] = params.data

  console.log(params);

  function addToCart() {
    console.log(`Adicionou: ${productId}, ${size}, ${color}`) 
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  )
}