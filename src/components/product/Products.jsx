import { lazy, memo, Suspense, useState } from "react"
import PropTypes from "prop-types"
import ProductCardLoading from "./ProductCardLoading"

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Button } from "@mui/material"
const ProductCarousel = lazy(() => import("./ProductCarousel"))

const Products = memo(function ProductsFunction({ sectionTitle }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeEndIndex, setActiveEndIndex] = useState(6)
  const products = [
    {
      id: 1,
      title: "Product 1",
      desc: "",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/x/l/-original-imagxyh4qpqcfbmq.jpeg?q=70",
      price: 100,
    },
    {
      id: 2,
      title: "Product 2",
      desc: "",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kfa0b680-0/bedsheet/v/x/c/3d-dbs-1071-3d-dbs-1071-flat-panipat-textile-hub-original-imafvryggg85yznq.jpeg?q=70",
      price: 200,
    },
    {
      id: 3,
      title: "Product 3",
      desc: "",
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",
      price: 300,
    },
    {
      id: 4,
      title: "Product 4",
      desc: "",
      image:
        "https://m.media-amazon.com/images/I/41YFUk64EzL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 400,
    },
    {
      id: 5,
      title: "Product 5",
      desc: "",
      image:
        "https://m.media-amazon.com/images/I/3195EYlykVL.jpg",
      price: 500,
    },
    {
      id: 6,
      title: "Product 6",
      desc: "",
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg",
      price: 600,
    },
    {
      id: 7,
      title: "Product 7",
      desc: "",
      image:
        "https://m.media-amazon.com/images/I/41Fq6UTFhOL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 700,
    },
    {
      id: 8,
      title: "Product 8",
      desc: "",
      image:
        "https://m.media-amazon.com/images/I/41dtRPYZIAL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 800,
    },
    {
      id: 9,
      title: "Product 9",
      desc: "",
      image:
        "https://m.media-amazon.com/images/I/51jkzD-8CFL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 900,
    },
  ]

  const sliderPrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1)
    setActiveEndIndex((prevIndex) => prevIndex - 1)
  }

  const sliderNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1)
    setActiveEndIndex((prevIndex) => prevIndex + 1)
  }

  return (
    <Suspense
      fallback={
        <>
          <ProductCardLoading />
        </>
      }
    >
      <section className="px-12 relative">
        <h2 className="text-2xl font-bold pl-4 py-4">{sectionTitle}</h2>
        <ProductCarousel
          products={products}
          activeIndex={activeIndex}
          activeEndIndex={activeEndIndex}
        />
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className={"z-50 "}
            onClick={sliderPrev}
            sx={{
              position: "absolute",
              color: "black",
              top: "50%",
              left: "2%",
              transform: "translateY(-50%) rotate(90deg)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <KeyboardArrowLeft
              sx={{
                transform: "rotate(-90deg)",
              }}
            />
          </Button>
        )}
        {activeEndIndex < products?.length && (
          <Button
            variant="contained"
            className={"z-50 "}
            onClick={sliderNext}
            sx={{
              position: "absolute",
              color: "black",
              top: "50%",
              right: "2%",
              transform: "translateY(-50%) rotate(-90deg)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <KeyboardArrowRight
              sx={{
                rotate: "90deg",
              }}
            />
          </Button>
        )}
      </section>
    </Suspense>
  )
})

Products.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
}

export default Products
