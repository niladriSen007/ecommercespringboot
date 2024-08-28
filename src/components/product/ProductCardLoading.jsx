const ProductCardLoading = () => {
  return (
    // Wrap the JSX expression in parentheses
    <section className="flex items-center gap-4">
  
     { Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="border border-gray-200 p-4 rounded-md w-72">
          <div className="animate-pulse h-36 bg-gray-200 rounded-md"></div>
          <div className="flex items-center justify-between mt-4">
            <div className="h-4 bg-gray-200 w-16 rounded-md"></div>
            <div className="h-4 bg-gray-200 w-16 rounded-md"></div>
          </div>
        </div>
      ))}
    
    </section>
  )
}
export default ProductCardLoading