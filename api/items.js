const items = [
  // COMPUTER PARTS (10)
  {
    id: 1,
    name: "Gaming Laptop",
    category: "Computer Parts",
    price: 1499.99,
    stock: 15,
    description: "High-performance laptop with RTX 4070 GPU and 32GB RAM.",
    image:
      "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Computer Parts",
    price: 120.0,
    stock: 50,
    description: "RGB backlit mechanical keyboard with hot-swappable keys.",
    image:
      "https://images.unsplash.com/photo-1602025882379-e01cf08baa51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Wireless Mouse",
    category: "Computer Parts",
    price: 45.5,
    stock: 80,
    description: "Ergonomic wireless mouse with adjustable DPI settings.",
    image:
      "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Gaming Monitor",
    category: "Computer Parts",
    price: 299.99,
    stock: 25,
    description: "27-inch 165Hz QHD gaming monitor with G-Sync support.",
    image:
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Graphics Card RTX 4090",
    category: "Computer Parts",
    price: 1999.99,
    stock: 5,
    description: "Latest NVIDIA RTX 4090 GPU for extreme gaming performance.",
    image:
      "https://images.unsplash.com/photo-1716967318503-05b7064afa41?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Gaming Chair",
    category: "Computer Parts",
    price: 250.0,
    stock: 30,
    description: "Comfortable ergonomic gaming chair with adjustable height.",
    image:
      "https://images.unsplash.com/photo-1619725002198-6a689b72f41d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Motherboard Z790",
    category: "Computer Parts",
    price: 350.0,
    stock: 18,
    description: "High-end Z790 chipset motherboard with DDR5 support.",
    image:
      "https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Liquid CPU Cooler",
    category: "Computer Parts",
    price: 180.0,
    stock: 40,
    description: "RGB liquid cooling system for maximum CPU performance.",
    image:
      "https://images.unsplash.com/photo-1658673609646-9c7ba9514b89?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "PC Case ATX",
    category: "Computer Parts",
    price: 150.0,
    stock: 25,
    description: "Tempered glass ATX case with optimized airflow.",
    image:
      "https://images.unsplash.com/photo-1591238372408-8b98667c0460?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "1TB NVMe SSD",
    category: "Computer Parts",
    price: 120.0,
    stock: 60,
    description: "Ultra-fast NVMe SSD with 1TB storage capacity.",
    image:
      "https://media.istockphoto.com/id/1219612026/photo/m-2-nand-ssd-solid-state-drive-technology-engineer-person-hold-hardware-device-to-upgrade.webp?a=1&b=1&s=612x612&w=0&k=20&c=-XMIVVZI2cRQuR1ioI2dxYm1lm-kL6vJL_NNFSd3Gwg=",
  },

  // CLOTHING (10)
  {
    id: 11,
    name: "Leather Jacket",
    category: "Clothing",
    price: 200.0,
    stock: 40,
    description: "Classic black leather jacket with premium stitching.",
    image:
      "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVhdGhlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    name: "White Sneakers",
    category: "Clothing",
    price: 90.0,
    stock: 100,
    description: "Comfortable everyday white sneakers.",
    image:
      "https://images.unsplash.com/photo-1597350584914-55bb62285896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2hpdGUlMjBTbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    name: "Denim Jeans",
    category: "Clothing",
    price: 60.0,
    stock: 120,
    description: "Blue denim jeans with a slim fit design.",
    image:
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Hoodie",
    category: "Clothing",
    price: 50.0,
    stock: 90,
    description: "Soft cotton hoodie for casual wear.",
    image:
      "https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Sunglasses",
    category: "Clothing",
    price: 45.0,
    stock: 150,
    description: "Polarized sunglasses for UV protection.",
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Baseball Cap",
    category: "Clothing",
    price: 25.0,
    stock: 200,
    description: "Adjustable cotton baseball cap.",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "Dress Shirt",
    category: "Clothing",
    price: 70.0,
    stock: 80,
    description: "Formal dress shirt with slim fit design.",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Wool Scarf",
    category: "Clothing",
    price: 30.0,
    stock: 60,
    description: "Warm wool scarf for cold seasons.",
    image:
      "https://images.unsplash.com/photo-1599948126830-89f10444e491?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Backpack",
    category: "Clothing",
    price: 80.0,
    stock: 70,
    description: "Durable backpack with multiple compartments.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "Running Shorts",
    category: "Clothing",
    price: 35.0,
    stock: 100,
    description: "Lightweight shorts for running and sports.",
    image:
      "https://images.unsplash.com/photo-1626121321765-ddd60a18666b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // HOME DEVICES (10)
  {
    id: 21,
    name: "Smart TV",
    category: "Home Devices",
    price: 899.99,
    stock: 25,
    description: "4K UHD Smart TV with HDR support.",
    image:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    name: "Bluetooth Speaker",
    category: "Home Devices",
    price: 120.0,
    stock: 50,
    description: "Portable Bluetooth speaker with deep bass.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    name: "Air Purifier",
    category: "Home Devices",
    price: 180.0,
    stock: 40,
    description: "HEPA filter air purifier for home use.",
    image:
      "https://images.unsplash.com/photo-1632928274371-878938e4d825?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    name: "Robot Vacuum",
    category: "Home Devices",
    price: 300.0,
    stock: 35,
    description: "Smart robot vacuum cleaner with app control.",
    image:
      "https://images.unsplash.com/photo-1603618090561-412154b4bd1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    name: "Microwave Oven",
    category: "Home Devices",
    price: 150.0,
    stock: 60,
    description: "Countertop microwave oven with quick heating.",
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 26,
    name: "Coffee Maker",
    category: "Home Devices",
    price: 100.0,
    stock: 70,
    description: "Automatic drip coffee maker with timer.",
    image:
      "https://images.unsplash.com/photo-1565452344518-47faca79dc69?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 27,
    name: "Blender",
    category: "Home Devices",
    price: 85.0,
    stock: 80,
    description: "High-speed blender for smoothies and soups.",
    image:
      "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    name: "Smart Light Bulb",
    category: "Home Devices",
    price: 25.0,
    stock: 150,
    description: "WiFi-enabled smart bulb with color changing options.",
    image:
      "https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    name: "Electric Kettle",
    category: "Home Devices",
    price: 40.0,
    stock: 90,
    description: "Stainless steel electric kettle with auto shut-off.",
    image:
      "https://images.unsplash.com/photo-1738520420652-0c47cea3922b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    name: "Washing Machine",
    category: "Home Devices",
    price: 650.0,
    stock: 15,
    description: "Front-load washing machine with smart settings.",
    image:
      "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
module.exports = (req, res) => {
  res.status(200).json({ items });
};
