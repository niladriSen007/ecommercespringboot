import { memo } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { carouselData } from "../../utils/carouselData"
import { useNavigate } from "react-router-dom"

const HeroCarousel = memo(function HeroCarouselFunction() {
  const navigateTo = useNavigate()
  const items = carouselData.map((item, index) => (
    <img
      onClick={() => navigateTo(`${item?.path}`)}
      key={index}
      src={item?.image}
      className="cursor-pointer object-cover h-full" 
    />
  ))
  return (
    <AliceCarousel
      items={items}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={1000}
      disableDotsControls
      animationDuration={2000}
      infinite
    />
  )
})
export default HeroCarousel
