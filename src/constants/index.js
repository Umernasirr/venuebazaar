import { FiSearch, AiFillDollarCircle, GiPriceTag } from "react-icons/all";
export const SEARCH_TYPE = ["Normal", "Banquet"];

export const SEARCH_AREA = ["Abidabad", "Kokan Colony", "Shah Faisal Colony"];

export const SEARCH_VENUE = [
  "Medallion Banquet",
  "Rose Garden",
  "Lalazar",
  "Lily Garden",
];

export const HOW_IT_WORKS_CONTENT = [
  {
    id: 0,
    title: "Search",
    description:
      "Find your perfect wedding venue without all the stress. Search by location, budget, styles, and capacity.",
    iconName: FiSearch,
  },
  {
    id: 1,
    title: "Price",
    description:
      "Build out your ideal wedding and get a budget estimate based on your guest count and selected options.",
    iconName: AiFillDollarCircle,
  },
  {
    id: 2,
    title: "Discount",
    description:
      "Get access to exclusive deals and discounts and save money on venue fees.",
    iconName: GiPriceTag,
  },
];

export const VENUE_CONTENT = [
  {
    id: 0,
    title: "BookEventz Flagship",
    description: "Fully managed venues",
    url: "https://www.thefifthatrockwell.com/wp-content/uploads/2020/04/7th-Birthday-Party-_-March-9-2019-1.jpg",
    alt: "venue",
  },
  {
    id: 1,
    title: "BookEventz Flagship",
    description: "Fully managed venues",
    url: "https://thefifthatrockwell.com/wp-content/uploads/2020/04/7th-Birthday-Party-_-November-17-2018-1.jpg",
    alt: "venue",
  },
  {
    id: 2,
    title: "BookEventz Flagship",
    description: "Fully managed venues",
    url: "https://thefifthatrockwell.com/wp-content/uploads/2020/04/7th-Birthday-Party-_-November-17-2018.2-1.jpg",
    alt: "venue",
  },
  {
    id: 3,
    title: "BookEventz Flagship",
    description: "Fully managed venues",
    url: "https://www.thefifthatrockwell.com/wp-content/uploads/2020/07/Pram-and-Cradle_Julia-Summer-3.jpg",
    alt: "venue",
  },
];

export const VENUE_CONTENT2 = [
  {
    id: 0,
    title: "BookEventz Flagship",
    description: "Fully managed venues",
    url: "https://www.thefifthatrockwell.com/wp-content/uploads/2020/04/7th-Birthday-Party-_-March-9-2019-1.jpg",
    alt: "venue",
  },
  {
    id: 1,
    title: "BookEventz Flagship",
    description: "Fully managed venues",
    url: "https://thefifthatrockwell.com/wp-content/uploads/2020/04/7th-Birthday-Party-_-November-17-2018-1.jpg",
    alt: "venue",
  },
  {
    id: 2,
    title: "BookEventz Flagship",
    description: "Fully managed venues",
    url: "https://thefifthatrockwell.com/wp-content/uploads/2020/04/7th-Birthday-Party-_-November-17-2018.2-1.jpg",
    alt: "venue",
  },
];

export const VENUES = [
  {
    id: 1,
    name: "Medallion Normal",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
  },

  {
    id: 2,
    name: "Rose Garden",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
  },

  {
    id: 3,
    name: "Lily Garden",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Banquet",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
  },

  {
    id: 4,
    name: "Medallion Normal",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
  },

  {
    id: 5,
    name: "Medallion Banquet",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Banquet",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
  },

  {
    id: 6,
    name: "Medallion Normal",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
  },

  {
    id: 7,
    name: "Medallion Normal",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
  },
];

export const BOOKINGS = [
  {
    id: 1,
    name: "Medallion Normal",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
    userName: "Talal Abbas",
    date: new Date().toISOString().slice(0, 10),
  },
  {
    id: 7,
    name: "Medallion Normal",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
    userName: "Talal Abbas",
    date: new Date().toISOString().slice(0, 10),
  },
  {
    id: 7,
    name: "Test Venue 2",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
    userName: "Umer Nasir",
    date: new Date().toISOString().slice(0, 10),
  },
  {
    id: 7,
    name: "Medallion Test",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Normal",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
    userName: "Talal Abbas",
    date: new Date().toISOString().slice(0, 10),
  },
];
