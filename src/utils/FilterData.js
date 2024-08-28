export const colors = [
  "white",
  "black",
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
]

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      {
        value: "white",
        label: "White",
      },
      {
        value: "red",
        label: "Red",
      },
      {
        value: "blue",
        label: "Blue",
      },
      {
        value: "green",
        label: "Green",
      },
      {
        value: "yellow",
        label: "Yellow",
      },
      {
        value: "pink",
        label: "Pink",
      },
      {
        value: "purple",
        label: "Purple",
      },
      {
        value: "orange",
        label: "Orange",
      },
      {
        value: "brown",
        label: "Brown",
      },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      {
        value: "xs",
        label: "XS",
      },
      {
        value: "s",
        label: "S",
      },
      {
        value: "m",
        label: "M",
      },
      {
        value: "l",
        label: "L",
      },
      {
        value: "xl",
        label: "XL",
      },
    ],
  }
]


export const singleFilters = [
  {
    id: "price",
    name: "Price",
    options :[
      {
        value : '0-499',
        label : "₹0 to ₹499"
      },
      {
        value: '500-999',
        label: "₹500 to ₹999"
      },
      {
        value: '999-1299',
        label: "₹999 to ₹1299"
      },
      {
        value: '1299-2000',
        label: "₹1299 to ₹2000"
      }
    ]
  },
  {
    id: 'discount',
    name:"Discount range",
    option:[
      {
        value:'10',
        label:'10% and above'
      },
      {
        value:'20',
        label:'20% and above'
      },
      {
        value:'30',
        label:'30% and above'
      },
      {
        value:'40',
        label:'40% and above'
      },
      {
        value:'50',
        label:'50% and above'
      }
    ]
  },
  {
    id:'stock',
    name:"Availability",
    options:[
      {
        value:'in_stock',
        label:'In stock'
      },
      {
        value:'out_of_stock',
        label:'Out of stock'
      }
    ]
  }
]
