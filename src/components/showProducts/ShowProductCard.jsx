import { memo } from "react"
import PropTypes from "prop-types"
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ShowProductCard = memo(function ShowProductCardFunction({ product }) {
  const { title, desc, image, price } = product
  return (
    <>
      <div className="flex  gap-6 border-b border-gray-300 pb-8">
        <img
          src={image}
          className="h-48 min-w-48 max-w-48 object-cover rounded-md hover:scale-105 transition-all cursor-pointer duration-500"
          alt=""
        />
        <section className="flex flex-col gap-2 w-[800px]">
          <h1 className="text-base font-semibold leading-6">{title}</h1>
          <section className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <button className="bg-green-600 text-white rounded-md w-14 flex items-center gap-1 justify-center">
              4.5 <StarBorderIcon sx={{width:20}} />
            </button>
            <p>3,666 Ratings & 559 Reviews</p>
          </section>
          <p className="text-gray-500 mt-1 text-xs leading-5">
            {desc?.split(".")?.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </p>
        </section>
        <section className="flex flex-col gap-1">
          <p className="text-2xl font-medium">₹ {price}</p>
          <p className="text-sm ">
            {" "}
            <span className="line-through">₹ {parseInt(price) + 99}</span>{" "}
            <span className="text-green-600">50% off</span>
          </p>
          <p className="text-xs">Free delivery</p>
          <p className="text-green-500 text-xs">save extra with combo offers</p>
          <p className="text-xs">Upto 30% off on exchange</p>
        </section>
      </div>
    </>
  )
})

ShowProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}
export default ShowProductCard
