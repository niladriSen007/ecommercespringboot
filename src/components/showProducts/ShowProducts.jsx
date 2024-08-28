import { lazy, memo } from "react"
const ShowProductCard = lazy(() => import("./ShowProductCard"))

const products = [
  {
    id: 1,
    title: "DELL S Series 60.96 cm (24 inch) Full HD IPS Panel with 3-Years warranty, 99% sRGB, Low Blue Light tec",
    desc: `
    60 cm (24 inch) Full HD (1920 x 1080) IPS Panel.
    3-Side Borderless Design.
    99% sRGB with Low Blue Light Technology.
    178°/178° Viewing Angle.
    16 Million Colors
    `,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/x/l/-original-imagxyh4qpqcfbmq.jpeg?q=70",
    price: 100,
  },

  {
    id: 2,
    title: "aniket 180 TC Cotton Double Printed Flat Bedsheet  (Pack of 1, Multicolor)",
    desc: `
      Blue bed cover.
      100% cotton.
      Washable.
      Lowest price ever.
      12*34*56 cm 
    `,
    image:
      "https://rukminim2.flixcart.com/image/612/612/kfa0b680-0/bedsheet/v/x/c/3d-dbs-1071-3d-dbs-1071-flat-panipat-textile-hub-original-imafvryggg85yznq.jpeg?q=70",
    price: 200,
  },

  {
    id: 3,
    title: "Product 3",
    desc: "derger gegerg ergergergev",
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
    image: "https://m.media-amazon.com/images/I/3195EYlykVL.jpg",
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
      "https://m.media-amazon.com/images/I/41Fq6UTFhOL._SX300_SY300_QL70_FMwebp_.jpg",
    price: 800,
  },
]

const ShowProducts = memo(function ShowProductsFunction() {
  return (
    <>
      <section className="mx-6 my-6">
        <section></section>
        <section className="">
          <section className="flex flex-col space-y-8  ">
            {products.map((product) => (
              <ShowProductCard key={product.id} product={product} />
            ))}
          </section>
        </section>
      </section>
    </>
  )
})
export default ShowProducts
