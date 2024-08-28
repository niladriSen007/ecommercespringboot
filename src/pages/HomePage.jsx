import { lazy } from "react"
const Products = lazy(() => import("../components/product/Products"))
const HeroCarousel = lazy(() => import("../components/shared/HeroCarousel"))

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="featuredProducts mx-6">
        <Products sectionTitle={"Today's Deals"} />
        <Products sectionTitle={"Suggested for you"} />
        <Products sectionTitle={"Shop for Women's ethnic dress"} />
        <Products sectionTitle={"Best of Electronics"} />
      </div>
    </>
  )
}
export default HomePage
