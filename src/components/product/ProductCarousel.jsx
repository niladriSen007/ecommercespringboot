import PropTypes from "prop-types"
import { lazy, memo } from "react"
import "react-alice-carousel/lib/alice-carousel.css"
const ProductCard = lazy(() => import("./ProductCard"))

const ProductCarousel = memo(function ProductCarouselFunction({
  products,
  activeIndex,
  activeEndIndex,
}) {
  return (
    <section className="flex items-center gap-6">
      {products.length > 0 &&
        products
          ?.slice(activeIndex, activeEndIndex)
          .map((product) => <ProductCard key={product.id} product={product} />)}
    </section>
  )
})
ProductCarousel.propTypes = {
  products: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  activeEndIndex: PropTypes.number.isRequired,
}

export default ProductCarousel
