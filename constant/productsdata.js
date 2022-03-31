//Products Data

const products = [
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://m.media-amazon.com/images/I/61FtvyhgswS._AC_UL480_QL65_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61FtvyhgswS._AC_UL480_QL65_.jpg', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    { 
        id: 'product6',
        url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        detailUrl: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", 
        title: {
            shortTitle: 'White Gold Plated Princess',
            longTitle: "White Gold Plated Princess"
        }, 
        price: {
            mrp: 1205,
            cost: 597,
            discount: '40%'
        },
        description: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentines Day...',
        discount: 'From ₹499', 
        tagline: 'White Gold Plated Princess' 
    },
    { 
        id: 'product7',
        url: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        detailUrl: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", 
        title: {
            shortTitle: 'Solid Gold Petite Micropave',
            longTitle: "Solid Gold Petite Micropave"
        }, 
        price: {
            mrp: 1500,
            cost: 555,
            discount: '40%'
        },
        description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        discount: 'From ₹499', 
        tagline: 'Solid Gold Petite Micropave' 
    },
    { 
        id: 'product8',
        url: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', 
        detailUrl: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        title: {
            shortTitle: 'Womens T Shirt Casual',
            longTitle: 'DANVOUY Womens T Shirt Casual Cotton Short'
        }, 
        price: {
            mrp: 1250,
            cost: 750,
            discount: '46%'
        },
        description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
        discount: 'Extra 20% Off', 
        tagline: 'Deal of the day' 
    },

    { 
        id: 'product9',
        url: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg', 
        detailUrl: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        title: {
            shortTitle: 'womens clothing',
            longTitle: 'Opna Womens Short Sleeve Moisture'
        }, 
        price: {
            mrp: 1125,
            cost: 756,
            discount: '48%'
        },
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        discount: 'Extra 25% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product10',
        url: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg', 
        detailUrl: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        title: {
            shortTitle: 'womens clothing',
            longTitle: 'MBJ Womens Solid Short Sleeve Boat Neck V '
        }, 
        price: {
            mrp: 1450,
            cost: 895,
            discount: '38%'
        },
        description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        discount: 'Extra 15% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product11',
        url: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg', 
        detailUrl: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED '
        }, 
        price: {
            mrp: 25000,
            cost: 12000,
            discount: '25%'
        },
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
        discount: 'Extra 15% Off', 
        tagline: 'Deal of the day' 
    },{ 
        id: 'product12',
        url: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg', 
        detailUrl: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin'
        }, 
        price: {
            mrp: 45000,
            cost: 15000,
            discount: '35%'
        },
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        discount: 'Extra 15% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product13',
        url: 'https://m.media-amazon.com/images/I/71UcgVe9x1L._SX679_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71UcgVe9x1L._SX679_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'realme narzo 50 (Speed Black, 6GB RAM+128GB Storage) Helio G96 Processor | 50MP AI Triple Camera | 120Hz Ultra Smooth Display'
        }, 
        price: {
            mrp: 17999,
            cost: 15499,
            discount: '2,500'
        },
        description: 'realme narzo 50 (Speed Black, 6GB RAM+128GB Storage) Helio G96 Processor | 50MP AI Triple Camera | 120Hz Ultra Smooth Display',
        discount: 'Extra 15% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product14',
        url: 'https://m.media-amazon.com/images/I/61qkg85MG4L._SY450_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61qkg85MG4L._SY450_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'HP 15s 11th Gen Intel Core i5 15.6 inches FHD Anti-Glare Display Laptop (8GB RAM/512GB SSD Micro-Edge/Iris Xe Graphics/Backlit Keyboard/Windows 11/Alexa/Dual Speakers/MS Office, 15s- fq4021TU, 1.69Kg)'
        }, 
        price: {
            mrp: 70170.00,
            cost: 53799,
            discount: '₹16,371.00'
        },
        description: ' Processor:Intel Core i5-1155G7(up to 4.5 GHz with Intel Turbo Boost Technology(2g),8 MB L3 cache, 4 cores, 8 threads)| Memory & Storage: 8 GB DDR4-3200 MHz RAM (2 x 4 GB), Upto 16 GB DDR4-3200 MHz RAM (2 x 8 GB)| Storage: 512 GB PCIe NVMe M.2 SSD  ',
        discount: 'Extra 15% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product15',
        url: 'https://m.media-amazon.com/images/I/91e7aIOirPL._UY550_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/91e7aIOirPL._UY550_.jpg',
        title: {
            shortTitle: 'Bag',
            longTitle: 'Amazon Brand - Solimo Polyester Laptop Backpack for 15.6-inch Laptops, 27L (Red)'
        }, 
        price: {
            mrp: 1100,
            cost: 813,
            discount: '25%'
        },
        description: '  3 spacious compartments; 1 easy-access front pocket with organizer section and 2 mesh side pockets for water bottles and small accessories  ',
        discount: 'Extra 15% Off', 
        tagline: 'Deal of the day' 
    },
    
    
]

module.exports = products