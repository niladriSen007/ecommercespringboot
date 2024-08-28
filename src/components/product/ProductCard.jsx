import { memo } from "react"
import PropTypes from "prop-types"

const ProductCard = memo(function ProductCardFunction({ product }) {
  const { title, desc, image } = product
  return (
    <section className="  cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-4">
      <section className="h-[13rem] w-[10rem] ">
        <img
          src={image}
          alt="product"
          className="hover:scale-105 w-full transition-all duration-300 h-full object-cover object-top rounded-md"
        />
      </section>
      <section className="p-4">
        <h3>{title}</h3>
        <p>{desc}</p>
      </section>
    </section>
  )
})

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
