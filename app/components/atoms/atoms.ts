import { atom } from "recoil";

const COMPONENT_NAME = "1.0";

export const OpenState = atom<any>({
  key: `${COMPONENT_NAME}/OpenState`,
  default: false,
});

export const MenuState = atom<any>({
  key: `${COMPONENT_NAME}/MenuState`,
  default: false,
});

export const CollectionState = atom<any>({
  key: `${COMPONENT_NAME}/CollectionState`,
  default: '',
});

export const TagState = atom<any>({
  key: `${COMPONENT_NAME}/TagState`,
  default: [],
});

export const PillState = atom<any>({
  key: `${COMPONENT_NAME}/PillState`,
  default: false,
});

export const SearchState = atom<any>({
  key: `${COMPONENT_NAME}/SearchState`,
  default: '',
});

export const DataState = atom<any>({
  key: `${COMPONENT_NAME}/DataState`,
  default: {
    url: "",
    title: "",
    price: 0,
    units: 1,
    house: ``,
    desc: ``,
    collection: ``,
  },
});

export const DataTempState = atom<any>({
  key: `${COMPONENT_NAME}/DataTempState`,
  default: {
    url: "",
    title: "",
    price: 0,
    units: 1,
    house: ``,
    desc: ``,
    collection: ``,
  },
});

export const ProductState = atom<any>({
  key: `${COMPONENT_NAME}/ProductState`,
  default: [
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/4574d431-4d93-495b-884d-22d5a4113e60.jpg?v=1706605785",
      title: "Classic tracksuit (Hoodie + Sweatpants)",
      price: 750,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `Stay warm and stylish with our Classic Tracksuit, featuring a comfortable hoodie and sweatpants. This unisex tracksuit is perfect for any casual occasion, whether you're lounging at home or running errands.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_7527.jpg?v=1706606778",
      title: "Side Bag Jacket",
      price: 1000,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `Say goodbye to bulky bags and hello to convenience with our innovative Side Bag Jacket. This unique jacket features a built-in side bag, allowing you to carry all your essentials without the hassle of a separate bag. Made from high-quality materials, this jacket is not only stylish but also durable and practical.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_3439_8c443032-89e4-4f1e-b6da-d95f9237e3fe.jpg?v=1709070943",
      title: "Classic Cap",
      price: 200,
      units: 1,
      house: "RE-L8",
      collection: "Retro",
      desc: `Upgrade your style game with our Classic Cap from RE-L8. This cap is the perfect blend of classic design and modern functionality. Made from high-quality materials, it offers both comfort and durability. The sleek and timeless design makes it a versatile accessory that can be paired with any outfit.`,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/2570bc76-4aa9-4b59-bd1c-a2ede64c57bc.jpg?v=1706606981",
      title: "RE-L8 T-shirt",
      price: 350,
      units: 1,
      house: "RE-L8",
      collection: "Retro",
      desc: `Upgrade your wardrobe with our stylish and versatile RE-L8 T-shirt. Made from high-quality materials, this shirt is designed to provide both comfort and style. The unique design features a bold and eye-catching 'RE-L8' graphic, making it a must-have for any fashion-forward individual.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_0011.jpg?v=1711052309",
      title: "CAMO Side Bag Jacket",
      price: 1200,
      units: 1,
      house: "RE-L8",
      collection: "1st Edition",
      desc: `Consequat est ipsum qui laborum dolor. Non ipsum voluptate magna adipisicing adipisicing commodo enim incididunt reprehenderit ipsum ut id irure nulla. Consequat mollit veniam non qui qui qui et voluptate velit. Eu enim proident exercitation ullamco ad eu cupidatat quis minim est magna.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_0134.heic?v=1709578753&width=2890",
      title: "Hand Bag Jacket",
      price: 900,
      units: 1,
      house: "RE-L8",
      collection: "1st Edition",
      desc: `Crafted from high-quality materials, the Hand Bag Jacket features a sleek and modern design that will elevate any outfit. The spacious interior allows you to carry all your essentials, while the stylish exterior adds a touch of sophistication to your look.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_1843.heic?v=1709578456&width=2890",
      title: "Denim Side Bag Jacket",
      price: 1400,
      units: 1,
      house: "RE-L8",
      collection: "Club Session",
      desc: `xperience the ultimate combination of fashion and functionality with our innovative Denim Side Bag Jacket. This versatile piece is designed to elevate your style while providing convenience like never before.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_3804.heic?v=1709070990&width=2890",
      title: "Back Pack Jacket",
      price: 1500,
      units: 1,
      house: "RE-L8",
      collection: "Club Session",
      desc: `This innovative jacket is designed to be both stylish and functional, making it the perfect addition to your wardrobe. Made from high-quality materials, it is durable and built to last. The unique feature of this jacket is its built-in backpack, which allows you to easily carry all your essentials without the need for an extra bag.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/b62bd128-c27a-41f1-a412-1f5276835c163.jpg?v=1706607433",
      title: "Cargo tracksuit",
      price: 800,
      units: 1,
      house: "RE-L8",
      collection: "Club Session",
      desc: `Stay stylish and comfortable this summer with our Cargo Tracksuit. Made from lightweight materials, this tracksuit is perfect for any outdoor activity. Whether you're hitting the gym or going for a run, this tracksuit will keep you cool and comfortable.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/41693711-b22b-481e-81bd-5731db14bf492.jpg?v=1706607208",
      title: "Graphic T-shirt",
      price: 400,
      units: 1,
      house: "RE-L8",
      collection: "Retro",
      desc: `Introducing our latest addition to the collection - the Graphic T-shirt. Made from high-quality cotton material, this t-shirt is not only comfortable but also stylish. The graphic design on the front adds a unique touch to the classic t-shirt, making it a must-have for any wardrobe. Available in a variety of sizes and colors, this t-shirt is perfect for both men and women.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_81032.jpg?v=1706606194https://www.re-l8.co.za/cdn/shop/files/41693711-b22b-481e-81bd-5731db14bf492.jpg?v=1706607208",
      title: "Portable Cargo Vest",
      price: 600,
      units: 1,
      house: "RE-L8",
      collection: "Retro",
      desc: `Upgrade your style game with our versatile and functional Portable Cargo Vest. Made from high-quality materials, this vest is designed to keep up with your busy lifestyle. Whether you're running errands, going on a hike, or traveling, this vest has got you covered.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/58d616fe-5b74-400e-8a3d-a50c7015715d.jpg?v=1709071177",
      title: "Oversized Shirt & Pants",
      price: 900,
      units: 1,
      house: "RE-L8",
      collection: "Retro",
      desc: `Upgrade your wardrobe with our stylish and comfortable oversized shirt and pants set. Made from high-quality materials, this set is perfect for any occasion. The oversized shirt features a relaxed fit and a classic collar, while the pants have a loose, wide-leg design for maximum comfort. The shirt and pants can be worn together for a chic and effortless look, or mix and match with other pieces in your wardrobe for endless styling options.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_8522_e5efd1ee-1c10-48d5-a4a2-d1fa3e4215a5.heic?v=1709068787&width=2890",
      title: "PINK FLORAL",
      price: 1800,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `Introducing our latest innovation - PINK FLORAL. This stunning product is a must-have for any fashion-forward individual. With its delicate pink floral design, it adds a touch of elegance and femininity to any outfit. Made from high-quality materials, PINK FLORAL is not only stylish but also durable.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_1003.jpg?v=1709069738",
      title: "Smart Fit",
      price: 700,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `Introducing Smart Fit, the ultimate solution for staying warm and stylish during the colder months. This innovative product is designed to provide maximum comfort and functionality, while also keeping you on-trend.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_5475.jpg?v=1709069951",
      title: "Reversible Jacket",
      price: 1200,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `The Reversible Jacket is a versatile and stylish addition to any wardrobe. Made from high-quality materials, this jacket is designed to provide both comfort and durability. The unique feature of this jacket is its reversible design, allowing you to switch up your look with ease. One side features a sleek and classic design, while the other side boasts a bold and eye-catching pattern. This jacket is perfect for any occasion, whether you're dressing up for a night out or keeping it casual for a day out with friends.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_8769.jpg?v=1709576635",
      title: "Smart Pants",
      price: 950,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `Introducing the ultimate solution for busy individuals who want to look stylish and stay organized at the same time - Smart Pants. These pants are designed with functionality and fashion in mind, making them the perfect addition to your wardrobe.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_3416.heic?v=1709068219&width=2890",
      title: "Tight suit",
      price: 500,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `Introducing our newest product, the Tight Suit! This sleek and stylish suit is perfect for any occasion. Made from high-quality materials, it provides a comfortable and flattering fit for all body types. The suit features a form-fitting design that accentuates your curves and gives you a confident and powerful look.
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_7424.jpg?v=1706606000",
      title: "Sweater + Sweatpants",
      price: 700,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `Stay cozy and stylish with our Sweater + Sweatpants set. Made from a soft and comfortable fabric, this set is perfect for lounging at home or running errands. The sweater features a classic crew neck design and ribbed cuffs, while the sweatpants have an elastic waistband for a comfortable fit. Both pieces are available in a variety of colors to suit your personal style. .
      `,
    },
    {
      url: "https://www.re-l8.co.za/cdn/shop/files/IMG_8722.jpg?v=1709069116",
      title: "Utility Vest",
      price: 500,
      units: 1,
      house: "RE-L8",
      collection: "RE-L8 Classics",
      desc: `Introducing our versatile and stylish Utility Vest, perfect for any occasion. Made from high-quality materials, this vest is designed to provide both functionality and fashion. Whether you're hitting the golf course or running errands, this vest has got you covered.
      `,
    },
  ],
});
