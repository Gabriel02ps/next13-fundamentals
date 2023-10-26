interface ProducProps {
  params: {
    data: string[]
  }
}

export default function Product({params}: ProducProps) {
  const [productId, size, color] = params.data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}