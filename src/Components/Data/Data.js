// src/Data/Data.js

import shoe1 from "../Assets/shoe1.png";
import shoe2 from "../Assets/shoe2.png";
import shoe3 from "../Assets/shoe3.png";
import shoe4 from "../Assets/shoe4.png";
import shoe5 from "../Assets/shoe5.png";
import shoe6 from "../Assets/shoe6.png";
import shoe7 from "../Assets/shoe7.png";
import shoe8 from "../Assets/shoe8.png";
import shoe9 from "../Assets/shoe9.png";
import shoe10 from "../Assets/shoe10.png";
import shoe11 from "../Assets/shoe11.png";
import shoe12 from "../Assets/shoe12.png";
import shoe13 from "../Assets/shoe13.png";
import shoe14 from "../Assets/shoe14.png";
import shoe15 from "../Assets/shoe15.png";
import shoe16 from "../Assets/shoe16.png";
import shoe17 from "../Assets/shoe17.png";
import shoe18 from "../Assets/shoe18.png";

import shoe19 from "../Assets/shoe19.png";
import shoe20 from "../Assets/shoe20.png";
import shoe21 from "../Assets/shoe21.png";
import shoe22 from "../Assets/shoe22.png";
import shoe23 from "../Assets/shoe23.png";
import shoe24 from "../Assets/shoe24.png";
import shoe25 from "../Assets/shoe25.png";
import shoe26 from "../Assets/shoe26.png";
import shoe27 from "../Assets/shoe27.png";
import shoe28 from "../Assets/shoe28.png";
import shoe29 from "../Assets/shoe29.png";
import shoe30 from "../Assets/shoe30.png";
import shoe31 from "../Assets/shoe31.png";
import shoe32 from "../Assets/shoe32.png";
import shoe33 from "../Assets/shoe33.png";
import shoe34 from "../Assets/shoe34.png";
import shoe35 from "../Assets/shoe35.png";
import shoe36 from "../Assets/shoe36.png";

import shoe37 from "../Assets/shoe37.png";
import shoe38 from "../Assets/shoe38.png";
import shoe39 from "../Assets/shoe39.png";
import shoe40 from "../Assets/shoe40.png";
import shoe41 from "../Assets/shoe41.png";
import shoe42 from "../Assets/shoe42.png";
import shoe43 from "../Assets/shoe43.png";
import shoe44 from "../Assets/shoe44.png";
import shoe45 from "../Assets/shoe45.png";
import shoe46 from "../Assets/shoe46.png";
import shoe47 from "../Assets/shoe47.png";
import shoe48 from "../Assets/shoe48.png";
import shoe49 from "../Assets/shoe49.png";
import shoe50 from "../Assets/shoe50.png";

const shoesData = [
  // Men shoes
  { id: 1, name: "Nike Air Max 270", price: 12000, discount: 15, image: shoe1, category: "men", sizes: [7, 8, 9, 10, 11] },
  { id: 2, name: "Adidas Ultraboost 21", price: 14000, discount: 10, image: shoe2, category: "men", sizes: [8, 9, 10, 11, 12] },
  { id: 3, name: "Puma RS-X³", price: 11000, discount: 12, image: shoe3, category: "men", sizes: [7, 8, 9, 10] },
  { id: 4, name: "Reebok Nano X1", price: 10500, discount: 8, image: shoe4, category: "men", sizes: [8, 9, 10] },
  { id: 5, name: "New Balance 990v5", price: 13000, discount: 20, image: shoe5, category: "men", sizes: [7, 8, 9, 10, 11] },
  { id: 6, name: "Asics Gel-Kayano 27", price: 11500, discount: 7, image: shoe6, category: "men", sizes: [8, 9, 10, 11] },
  { id: 7, name: "Under Armour HOVR Phantom", price: 12500, discount: 10, image: shoe7, category: "men", sizes: [7, 8, 9] },
  { id: 8, name: "Saucony Endorphin Speed", price: 10000, discount: 15, image: shoe8, category: "men", sizes: [8, 9, 10] },
  { id: 9, name: "Jordan Air Zoom", price: 13500, discount: 5, image: shoe9, category: "men", sizes: [9, 10, 11] },
  { id: 10, name: "Nike React Infinity Run", price: 13000, discount: 12, image: shoe10, category: "men", sizes: [7, 8, 9, 10, 11] },
  { id: 11, name: "Adidas NMD R1", price: 11500, discount: 10, image: shoe11, category: "men", sizes: [7, 8, 9] },
  { id: 12, name: "Puma Clyde Court", price: 11000, discount: 9, image: shoe12, category: "men", sizes: [8, 9, 10] },
  { id: 13, name: "Reebok Classic Leather", price: 9500, discount: 7, image: shoe13, category: "men", sizes: [7, 8, 9] },
  { id: 14, name: "New Balance Fresh Foam", price: 12000, discount: 15, image: shoe14, category: "men", sizes: [8, 9, 10, 11] },
  { id: 15, name: "Asics Gel-Nimbus 23", price: 12500, discount: 10, image: shoe15, category: "men", sizes: [7, 8, 9, 10] },
  { id: 16, name: "Under Armour Charged Assert", price: 11000, discount: 8, image: shoe16, category: "men", sizes: [7, 8, 9] },
  { id: 17, name: "Saucony Jazz Original", price: 9000, discount: 20, image: shoe17, category: "men", sizes: [8, 9, 10] },
  { id: 18, name: "Jordan Max Aura", price: 14000, discount: 15, image: shoe18, category: "men", sizes: [9, 10, 11] },

  // Women shoes
  { id: 19, name: "Nike Air Zoom Pegasus", price: 11000, discount: 12, image: shoe19, category: "women", sizes: [5, 6, 7, 8, 9] },
  { id: 20, name: "Adidas Solar Glide", price: 12000, discount: 10, image: shoe20, category: "women", sizes: [6, 7, 8, 9, 10] },
  { id: 21, name: "Puma Cali Sport", price: 10500, discount: 15, image: shoe21, category: "women", sizes: [5, 6, 7, 8] },
  { id: 22, name: "Reebok Floatride Run", price: 10000, discount: 7, image: shoe22, category: "women", sizes: [6, 7, 8] },
  { id: 23, name: "New Balance 1080v10", price: 11500, discount: 10, image: shoe23, category: "women", sizes: [5, 6, 7, 8, 9] },
  { id: 24, name: "Asics Gel-Cumulus 22", price: 11000, discount: 12, image: shoe24, category: "women", sizes: [6, 7, 8] },
  { id: 25, name: "Under Armour HOVR Sonic", price: 10500, discount: 9, image: shoe25, category: "women", sizes: [5, 6, 7] },
  { id: 26, name: "Saucony Kinvara 12", price: 9500, discount: 10, image: shoe26, category: "women", sizes: [5, 6, 7, 8] },
  { id: 27, name: "Jordan React Elevation", price: 12500, discount: 15, image: shoe27, category: "women", sizes: [6, 7, 8, 9] },
  { id: 28, name: "Nike Free RN 5.0", price: 11000, discount: 8, image: shoe28, category: "women", sizes: [5, 6, 7, 8] },
  { id: 29, name: "Adidas Pureboost", price: 11500, discount: 10, image: shoe29, category: "women", sizes: [6, 7, 8] },
  { id: 30, name: "Puma Muse", price: 10000, discount: 12, image: shoe30, category: "women", sizes: [5, 6, 7] },
  { id: 31, name: "Reebok Princess", price: 9500, discount: 7, image: shoe31, category: "women", sizes: [6, 7, 8] },
  { id: 32, name: "New Balance 996", price: 10500, discount: 10, image: shoe32, category: "women", sizes: [5, 6, 7] },
  { id: 33, name: "Asics Gel-Quantum 180", price: 11000, discount: 8, image: shoe33, category: "women", sizes: [6, 7, 8] },
  { id: 34, name: "Under Armour Charged", price: 10000, discount: 15, image: shoe34, category: "women", sizes: [5, 6, 7] },
  { id: 35, name: "Saucony Jazz Low Pro", price: 9000, discount: 10, image: shoe35, category: "women", sizes: [6, 7, 8] },
  { id: 36, name: "Jordan Air Latitude", price: 13000, discount: 12, image: shoe36, category: "women", sizes: [5, 6, 7, 8] },

  // Kids shoes
  { id: 37, name: "Nike Revolution 5 Kids", price: 7000, discount: 10, image: shoe37, category: "kids", sizes: [1, 2, 3, 4, 5] },
  { id: 38, name: "Adidas Duramo SL", price: 6500, discount: 8, image: shoe38, category: "kids", sizes: [2, 3, 4, 5] },
  { id: 39, name: "Puma Flyer Runner", price: 7200, discount: 12, image: shoe39, category: "kids", sizes: [1, 2, 3, 4] },
  { id: 40, name: "Reebok Zig Kinetica", price: 6800, discount: 7, image: shoe40, category: "kids", sizes: [2, 3, 4] },
  { id: 41, name: "New Balance 680v6 Kids", price: 7000, discount: 10, image: shoe41, category: "kids", sizes: [1, 2, 3, 4, 5] },
  { id: 42, name: "Asics Gel-Contend 6 Kids", price: 6900, discount: 9, image: shoe42, category: "kids", sizes: [2, 3, 4] },
  { id: 43, name: "Under Armour Assert 8 Kids", price: 7200, discount: 11, image: shoe43, category: "kids", sizes: [3, 4, 5] },
  { id: 44, name: "Saucony Cohesion 13 Kids", price: 6400, discount: 8, image: shoe44, category: "kids", sizes: [1, 2, 3, 4] },
  { id: 45, name: "Jordan Max Aura 3 Kids", price: 7500, discount: 10, image: shoe45, category: "kids", sizes: [3, 4, 5] },
  { id: 46, name: "Nike Team Hustle D9", price: 6800, discount: 9, image: shoe46, category: "kids", sizes: [2, 3, 4] },
  { id: 47, name: "Adidas Tensaur Run", price: 6600, discount: 7, image: shoe47, category: "kids", sizes: [1, 2, 3] },
  { id: 48, name: "Puma Axelion Kids", price: 6900, discount: 10, image: shoe48, category: "kids", sizes: [2, 3, 4] },
  { id: 49, name: "Reebok Rush Runner 3 Kids", price: 6700, discount: 8, image: shoe49, category: "kids", sizes: [3, 4, 5] },
  { id: 50, name: "New Balance FuelCore Kids", price: 7000, discount: 12, image: shoe50, category: "kids", sizes: [2, 3, 4, 5] },
];

export default shoesData;
