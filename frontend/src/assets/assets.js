import p_img1 from "../assets/P-Img-1.png"
import p_img2 from "../assets/P-Img-2.png"
import p_img3 from "../assets/P-Img-3.png"
import p_img4 from "../assets/P-Img-4.png"
import p_img5 from "../assets/P-Img-5.png"
import p_img6 from "../assets/P-Img-6.png"
import p_img7 from "../assets/P-Img-7.png"
import p_img8 from "../assets/P-Img-8.png"
import p_img9 from "../assets/P-Img-9.png"
import p_img10 from "../assets/P-Img-10.png"
// import p_img11 from "../assets/P-Img-11.png"
import p_img12 from "../assets/P-Img-12.png"
import p_img13 from "../assets/P-Img-13.png"
import p_img14 from "../assets/P-Img-14.png"
import p_img15 from "../assets/P-Img-15.png"
import p_img16 from "../assets/P-Img-16.png"
import hero_img from "../assets/hero_img.png"
import logo from "../assets/logo.png"
import wLogo from "../assets/w_logo.png"
import brandlogo1 from "../assets/brandlogo-1.png"
import brandlogo2 from "../assets/brandlogo-2.png"
import brandlogo3 from "../assets/brandlogo-3.png"
import brandlogo4 from "../assets/brandlogo-4.png"
import brandlogo5 from "../assets/brandlogo-5.png"
import searchIcon from "../assets/search-icon.png"
import userIcon from "../assets/user-icon.png"
import cartIcon from "../assets/cart-icon.png"
import visaIcon from "../assets/Visa.png"
import mastercardIcon from "../assets/Mastercard.png"
import paypalIcon from "../assets/Paypal.png"
import applepayIcon from "../assets/A_Pay.png"
import googlepayIcon from "../assets/G-Pay.png"


export const assets = {
  logo,
  wLogo,
  hero_img,
  brandlogo1,
  brandlogo2,
  brandlogo3,
  brandlogo4,
  brandlogo5,
  searchIcon,
  userIcon,
  cartIcon,
  visaIcon,
  mastercardIcon,
  paypalIcon,
  applepayIcon,
  googlepayIcon,
}

export const products = [
  {
    _id: "1001",
    name: "T-SHIRT WITH TAPE DETAILS",
    description: "Casual cotton t-shirt with stylish tape detailing on sleeves.",
    price: 120,
    image: [p_img1],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrivals: true
  },
  {
    _id: "1002",
    name: "SKINNY FIT JEANS",
    description: "Denim jeans with a skinny fit, perfect for modern streetwear.",
    price: 240,
    image: [p_img2],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrivals: true
  },
  {
    _id: "1003",
    name: "CHECKERED SHIRT",
    description: "Classic checkered shirt for casual and semi-formal occasions.",
    price: 180,
    image: [p_img3],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrivals: true
  },
  {
    _id: "1004",
    name: "SLEEVE STRIPED T-SHIRT",
    description: "Trendy striped t-shirt with comfortable cotton fabric.",
    price: 130,
    image: [p_img4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrivals: true
  },
  {
    _id: "1005",
    name: "VERTICAL STRIPED SHIRT",
    description: "Smart vertical striped shirt for a polished look.",
    price: 220,
    image: [p_img5],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true
  },
  {
    _id: "1006",
    name: "COURAGE GRAPHIC T-SHIRT",
    description: "Bold graphic tee with motivational print.",
    price: 140,
    image: [p_img6],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true
  },
  {
    _id: "1007",
    name: "CASUAL COTTON TROUSERS",
    description: "Lightweight cotton trousers for everyday wear.",
    price: 80,
    image: [p_img7],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true
  },
  {
    _id: "1008",
    name: "DENIM JOGGERS",
    description: "Comfortable joggers with denim finish.",
    price: 210,
    image: [p_img8],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true
  },
  {
    _id: "1009",
    name: "Girls Round Neck Cotton Top",
    description: "Lightweight cotton top with round neck and short sleeves.",
    price: 240,
    image: [p_img9],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716644245448,
    bestseller: false,
    newArrivals: false
  },
  {
    _id: "1010",
    name: "SKINNY FIT JEANS",
    description: "Denim jeans with a skinny fit, perfect for modern streetwear.",
    price: 220,
    image: [p_img10],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716645345448,
    bestseller: false,
    newArrivals: false
  },
  // {
  //   _id: "1011",
  //   name: "MEN'S HOODED SWEATSHIRT",
  //   description: "Warm hoodie with front pocket and drawstring hood.",
  //   price: 260,
  //   image: [p_img11],
  //   category: "Men",
  //   subCategory: "Topwear",
  //   sizes: ["M", "L", "XL"],
  //   date: 1716645345448,
  //   bestseller: false,
  //   newArrivals: false
  // },
  {
    _id: "1012",
    name: "Gradient Graphic T-shirt",
    description: "Slim-fit t-shirt with gradient print.",
    price: 300,
    image: [p_img12],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716645345448,
    bestseller: false,
    newArrivals: false
  },
  {
    _id: "1013",
    name: "Polo with Tipping Details",
    description: "Lightweight polo with unique tipping details.",
    price: 150,
    image: [p_img13],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716645345448,
    bestseller: false,
    newArrivals: false
  },
  {
    _id: "1014",
    name: "MEN'S LEATHER JACKET",
    description: "Stylish leather jacket with zip closure.",
    price: 500,
    image: [p_img14],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1716645345448,
    bestseller: false,
    newArrivals: false
  },
  {
    _id: "1015",
    name: "Polo with Tipping Details",
    description: "Lightweight polo with unique tipping details.",
    price: 450,
    image: [p_img15],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716645345448,
    bestseller: false,
    newArrivals: false
  },
  {
    _id: "1016",
    name: "One Life Graphic T-shirt",
    description: "Comfortable graphic t-shirt for casual wear.",
    price: 200,
    image: [p_img16],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716645345448,
    bestseller: false,
    newArrivals: false
  }


]