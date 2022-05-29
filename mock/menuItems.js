import { BsLaptop, BsBook } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";
import { RiFireLine } from "react-icons/ri";
import { AiOutlinePercentage } from "react-icons/ai";

const menuItems = [
  {
    category: "Digital",
    icon: BsLaptop,
    productsGroup: [
      {
        title: "Laptop",
        subtitles: [
          "Asus",
          "Apple",
          "Dell",
          "Lenovo",
          "Samsung",
          "HP",
          "HUAWEI",
          "Acer",
          "MSI",
        ],
      },
      {
        title: "Mobile",
        subtitles: [
          "Samsung",
          "Apple",
          "Nokia",
          "Xiaomi",
          "Motorola",
          "LG",
          "Sony",
        ],
      },
      {
        title: "Computer",
        subtitles: ["Monitor", "Mouse", "Keyboard", "Hard"],
      },
      {
        title: "Other",
        subtitles: ["Tablet", "PowerBank", "Speaker", "Headphone"],
      },
    ],
  },
  {
    category: "fashion",
    icon: IoShirtOutline,
    productsGroup: [
      {
        title: "women",
        subtitles: [
          "dress",
          "skirt",
          "jeans",
          "pants",
          "TShirt",
          "Shoes",
          "scarf",
        ],
      },
      {
        title: "men",
        subtitles: ["shirt", "pants", "tie", "TShirt", "Shoes", "jeans"],
      },
      {
        title: "child",
        subtitles: ["Overalls", "Mittens", "BabyApron", "Shoes", "TShirt"],
      },
      {
        title: "Other",
        subtitles: ["watch", "wallet", "hat", "belt"],
      },
    ],
  },
  { category: "toys", icon: MdOutlineToys },
  { category: "Cosmetic", icon: RiHeartPulseLine },
  { category: "Home", icon: AiOutlineHome },
  { category: "Sport", icon: BiFootball },
  { category: "Stationery", icon: BsBook },
];

export default menuItems;

export const extraMenu = [
  { title: "offer", icon: AiOutlinePercentage },
  { title: "bestSells", icon: RiFireLine },
];