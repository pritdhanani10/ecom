import img1 from './product_1.png'
import img2_1 from './product_2_1.png'
import img2_2 from './product_2_2.png'
import img2_3 from './product_2_3.png'
import img2_4 from './product_2_4.png'
import img3 from './product_3.png'
import img4_1 from './product_4_1.png'
import img4_2 from './product_4_2.png'
import img4_3 from './product_4_3.png'
import img4_4 from './product_4_4.png'
import img5 from './product_5.png'
import img6 from './product_6.png'
import img7 from './product_7.png'
import img8 from './product_8.png'
import img9 from './product_9.png'
import img10 from './product_10.png'
import img11 from './product_11.png'
import img12 from './product_12.png'
import img13 from './product_13.png'
import img14 from './product_14.png'
import img15 from './product_15.png'
import img16 from './product_16.png'
import img17 from './product_17.png'
import img18 from './product_18.png'
import img19 from './product_19.png'
import img20 from './product_20.png'
import img21 from './product_21.png'
import img22 from './product_22.png'
import img23 from './product_23.png'
import img24 from './product_24.png'
import img25 from './product_25.png'
import img26 from './product_26.png'
import img27 from './product_27.png'
import img28 from './product_28.png'
import img29 from './product_29.png'
import img30 from './product_30.png'
import img31 from './product_31.png'
import img32 from './product_32.png'
import img33 from './product_33.png'
import img34 from './product_34.png'
import img35 from './product_35.png'
import img36 from './product_36.png'
import img37 from './product_37.png'
import img38 from './product_38.png'
import img39 from './product_39.png'
import img40 from './product_40.png'
import img41 from './product_41.png'
import img42 from './product_42.png'
import img43 from './product_43.png'
import img44 from './product_44.png'
import img45 from './product_45.png'
import img46 from './product_46.png'
import img47 from './product_47.png'
import img48 from './product_48.png'
import img49 from './product_49.png'
import img50 from './product_50.png'
import img51 from './product_51.png'
import img52 from './product_52.png'

// Blogs
import blog1 from "../assets/blogs/blog1.png"
import blog2 from "../assets/blogs/blog2.png"
import blog3 from "../assets/blogs/blog3.png"
import blog4 from "../assets/blogs/blog4.png"


export const products = [
    {
        _id: "1",
        name: "Elegant Cotton Round Neck Top",
        description: "This lightweight cotton top is perfect for casual outings, featuring a relaxed fit and durable material.",
        price: 150,
        image: [img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        popular: false
    },
    {
        _id: "2",
        name: "Men Premium Cotton Tee",
        description: "A premium t-shirt offering exceptional comfort and a smooth texture, great for everyday wear.",
        price: 220,
        image: [img2_1, img2_2, img2_3, img2_4],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        popular: false
    },
    {
        _id: "3",
        name: "Casual Girls Cotton Top",
        description: "Soft cotton top for girls, ideal for both active play and relaxation.",
        price: 200,
        image: [img3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        popular: true
    },
    {
        _id: "4",
        name: "Classic Men Casual T-Shirt",
        description: "A casual t-shirt made from breathable cotton, suitable for any informal occasion.",
        price: 180,
        image: [img4_1, img4_2, img4_3, img4_4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        popular: false
    },
    {
        _id: "5",
        name: "Stylish Women Basic Tee",
        description: "An everyday essential cotton tee for women, offering simplicity and comfort.",
        price: 140,
        image: [img5],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        popular: false
    },
    {
        _id: "6",
        name: "Graphic Tee for Kids",
        description: "Fun and vibrant graphic tee, perfect for kids’ outdoor play and adventures.",
        price: 160,
        image: [img6],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["XS", "S", "M"],
        date: 1716623345448,
        popular: true
    },
    {
        _id: "7",
        name: "Women Soft Knit Sweater",
        description: "A comfortable, lightweight knit sweater ideal for layering during cool weather.",
        price: 320,
        image: [img7],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624345448,
        popular: false
    },
    {
        _id: "8",
        name: "Casual Men Hoodie",
        description: "Warm and comfortable hoodie with an adjustable hood and front pockets.",
        price: 420,
        image: [img8],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716625345448,
        popular: true
    },
    {
        _id: "9",
        name: "Girls Cozy Hoodie",
        description: "A casual hoodie designed for boys, featuring a soft material for all-day comfort.",
        price: 230,
        image: [img9],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716626345448,
        popular: false
    },
    {
        _id: "10",
        name: "Men Jogger Pants",
        description: "These high-waisted joggers are ideal for casual wear and feature a relaxed fit for added comfort.",
        price: 260,
        image: [img10],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627345448,
        popular: false
    },
    {
        _id: "11",
        name: "Classic Slim Fit Jeans",
        description: "Durable and stylish slim fit jeans, suitable for both casual and formal outfits.",
        price: 380,
        image: [img11],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716628345448,
        popular: true
    },
    {
        _id: "12",
        name: "Men Playtime Joggers",
        description: "Comfortable joggers made for active kids, featuring an elastic waistband for easy wear.",
        price: 170,
        image: [img12],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716629345448,
        popular: false
    },
    {
        _id: "13",
        name: "Women Skinny Fit Jeans",
        description: "Trendy mid-rise skinny jeans, made to pair well with any top for a chic look.",
        price: 290,
        image: [img13],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716630345448,
        popular: true
    },
    {
        _id: "14",
        name: "Functional Kids Cargo Pants",
        description: "Rugged cargo pants featuring multiple pockets, ideal for casual or outdoor adventures.",
        price: 290,
        image: [img14],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716631345448,
        popular: false
    },
    {
        _id: "15",
        name: "Boys Adventure Shorts",
        description: "Comfortable elastic waist shorts designed for active boys, ideal for play and outdoor activities.",
        price: 150,
        image: [img15],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M"],
        date: 1716632345448,
        popular: true
    },
    {
        _id: "16",
        name: "Floral Print Leggings",
        description: "Soft and stretchy floral print leggings, perfect for comfort and style.",
        price: 210,
        image: [img16],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716633345448,
        popular: true
    },
    {
        _id: "17",
        name: "Men Lightweight Puffer Jacket",
        description: "Stylish and warm puffer jacket, great for layering in chilly weather.",
        price: 490,
        image: [img17],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        popular: true
    },
    {
        _id: "18",
        name: "Classic Women Trench Coat",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion.",
        price: 610,
        image: [img18],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635345448,
        popular: false
    },
    {
        _id: "19",
        name: "Boys Winter Parka",
        description: "Warm winter parka with a durable build, designed to withstand cold temperatures.",
        price: 350,
        image: [img19],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716636345448,
        popular: false
    },
    {
        _id: "20",
        name: "Girls Classic Denim Trouser",
        description: "A versatile denim jacket for girls, great for layering in all seasons.",
        price: 260,
        image: [img20],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L"],
        date: 1716637345448,
        popular: true
    },
    {
        _id: "21",
        name: "Women Wool Blend Sweater",
        description: "This warm wool blend sweater provides both comfort and a stylish look.",
        price: 360,
        image: [img21],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638345448,
        popular: true
    },
    {
        _id: "22",
        name: "Men Rugged Denim Trouser",
        description: "Durable denim jacket with a vintage finish, suitable for layering in all seasons.",
        price: 400,
        image: [img22],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716639345448,
        popular: false
    },
    {
        _id: "23",
        name: "Kids Fleece Hoodie",
        description: "Soft and cozy fleece hoodie, perfect for active kids.",
        price: 190,
        image: [img23],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716640345448,
        popular: false
    },
    {
        _id: "24",
        name: "Kids Faux Leather Moto Jacket",
        description: "Trendy faux leather jacket with sleek zipper details, adding an edgy touch to any outfit.",
        price: 470,
        image: [img24],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716641345448,
        popular: true
    },
    {
        _id: "25",
        name: "Kids Winter Tshirt",
        description: "Soft winter gloves with a fleece lining, designed to keep hands warm.",
        price: 100,
        image: [img25],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["M", "L"],
        date: 1716642345448,
        popular: true
    },
    {
        _id: "26",
        name: "Women Cashmere Scarf",
        description: "Elegant cashmere scarf, ideal for adding warmth and a touch of luxury.",
        price: 80,
        image: [img26],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["One Size"],
        date: 1716643345448,
        popular: false
    },
    {
        _id: "27",
        name: "Kids Cozy Beanie",
        description: "Warm and comfortable beanie, ideal for keeping kids warm during cold days.",
        price: 60,
        image: [img27],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["One Size"],
        date: 1716644345448,
        popular: false
    },
    {
        _id: "28",
        name: "Men Classic Leather Belt",
        description: "High-quality leather belt with a durable buckle, perfect for formal wear.",
        price: 140,
        image: [img28],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716645345448,
        popular: false
    },
    {
        _id: "29",
        name: "Women Sun Hat",
        description: "Wide-brimmed sun hat, perfect for beach days and outdoor activities.",
        price: 120,
        image: [img29],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["One Size"],
        date: 1716646345448,
        popular: true
    },
    {
        _id: "30",
        name: "Kids Polarized Sunglasses",
        description: "Stylish polarized sunglasses for kids, providing excellent UV protection.",
        price: 60,
        image: [img30],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["One Size"],
        date: 1716647345448,
        popular: true
    },

    {
        _id: "31",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [img31],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        popular: false
    },
    {
        _id: "32",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [img32],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        popular: false
    },
    {
        _id: "33",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [img33],
        category: "Kids",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        popular: false
    },
    {
        _id: "34",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [img34],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        popular: false
    },
    {
        _id: "35",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [img35],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        popular: false
    },
    {
        _id: "36",
        name: "Women Zip-Front Relaxed black T-shirt",
        description: "Soft and stretchy floral print leggings, perfect for comfort and style.",
        price: 270,
        image: [img36],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        popular: false
    },
    {
        _id: "37",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [img37],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        popular: false
    },
    {
        _id: "38",
        name: "Kids Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [img38],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        popular: false
    },
    {
        _id: "39",
        name: "Men Printed Plain Cotton Shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [img39],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        popular: false
    },
    {
        _id: "40",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "An everyday essential cotton tee for women, offering simplicity and comfort.",
        price: 290,
        image: [img40],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        popular: false
    },
    {
        _id: "41",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [img41],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        popular: false
    },
    {
        _id: "42",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "An everyday essential cotton tee for women, offering simplicity and comfort.",
        price: 300,
        image: [img42],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        popular: false
    },
    {
        _id: "43",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [img43],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        popular: false
    },
    {
        _id: "44",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion",
        price: 310,
        image: [img44],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        popular: false
    },
    {
        _id: "45",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [img45],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        popular: false
    },
    {
        _id: "46",
        name: "Men Slim Fit Relaxed Denim Shirt",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion.",
        price: 320,
        image: [img46],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        popular: false
    },
    {
        _id: "47",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [img47],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        popular: false
    },
    {
        _id: "48",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion.",
        price: 330,
        image: [img48],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        popular: false
    },
    {
        _id: "49",
        name: "Women Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [img49],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716665145448,
        popular: false
    },
    {
        _id: "50",
        name: "Kids Tapered Slim Fit Trouser",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion.",
        price: 340,
        image: [img50],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716666245448, popular: false
    },
    {
        _id: "51",
        name: "Women Zip-Front Relaxed Fit Shirt",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion",
        price: 320,
        image: [img51],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        popular: false
    },
    {
        _id: "52",
        name: "Men Slim Fit Relaxed Denim Shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 350,
        image: [img52],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        popular: false
    }

]

export const blogs = [
    {title:"Top Shopping Tips for Smart Buyers", category: "Men", image: blog1 },
    {title:"Latest Trends in Online Shopping 2024", category: "Women", image: blog2 },
    {title:"How to Spot the Best Deals Online", category: "Kids", image: blog3 },
    {title:"Why E-Commerce is the Future of Shopping", category: "Topwear", image: blog4 }
  ]