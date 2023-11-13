import fuerteAvocado from "../assets/images/products/items/fuerteAvocado.png";
import hassAvocado from "../assets/images/products/items/hassAvocado.png";
import appleBanana from "../assets/images/products/items/appleBanana.png";
import pineapple from "../assets/images/products/items/pineapple.png";
import yellowPassion from "../assets/images/products/items/yellowPassionFruit.png";
import rosePassion from "../assets/images/products/items/rosePassionFruit.png";
import bitterLemon from "../assets/images/products/items/bitterLemonFruit.png";
import redPepper from "../assets/images/products/items/redPepper.png";
import longRedPepper from "../assets/images/products/items/longRedPepper.png";
import gardenEgg from "../assets/images/products/items/gardenEgg.png";
import plantain from "../assets/images/products/items/plantain.png";
import carrot from "../assets/images/products/items/carrot.png";

import mediaArticleOne from "../assets/images/mediaArticleOne.png";
import mediaArticleTwo from "../assets/images/mediaArticleTwo.png";
import mediaArticleThree from "../assets/images/mediaArticleThree.png";
import mediaArticleFour from "../assets/images/mediaArticleFour.png";
import mediaArticleFive from "../assets/images/mediaArticleFive.png";
import mediaArticleSix from "../assets/images/mediaArticleSix.png";
import mediaArticleSeven from "../assets/images/mediaArticleSeven.png";
import mediaArticleEight from "../assets/images/mediaArticleEight.png";

import productCategoriesOne from "../assets/images/productCategoriesOne.png";
import productCategoriesTwo from "../assets/images/productCategoriesTwo.png";
import productCategoriesThree from "../assets/images/productCategoriesThree.png";

import customerImage from "../assets/images/customer.png";

import { TbShoppingCartPlus } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

export const fruits = [
  {
    id: 1,
    name: "Fuerte Avocado",
    image: fuerteAvocado,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "Fuerte avocado, or Persea americana 'Fuerte,' is a popular and delicious avocado variety known for its smooth, pear-shaped fruit. This avocado cultivar is native to Central America and is widely cultivated in various parts of the world with suitable climates",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 2,
    name: "Hass Avocado",
    image: hassAvocado,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "The Hass avocado is one of the most well-known and widely cultivated avocado varieties worldwide. It was first discovered and developed by a California postman named Rudolph Hass in the 1920s, and it has since become a staple in the world of avocados. Hass avocados are easily recognizable by their distinctive pebbly-textured, purplish-black skin.",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 3,
    name: "Apple Banana",
    image: appleBanana,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "The apple banana, also known as the Manzano banana or the Apple Cultivar, is a distinct banana variety characterized by its small size and apple-like flavor. Its creamy, sweet flesh and unique taste make it a favorite among banana enthusiasts. ",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 4,
    name: "Pineapple",
    image: pineapple,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "Pineapple is a tropical fruit renowned for its sweet and tangy flavor. It is characterized by its spiky, rough skin and vibrant yellow or orange flesh. Pineapples are known for their juicy, succulent texture and a refreshing taste that strikes a perfect balance between sweetness and acidity.",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 5,
    name: "Yellow Passion Fruit",
    image: yellowPassion,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "Yellow passionfruit, scientifically known as Passiflora edulis f. flavicarpa, is a tropical fruit celebrated for its aromatic, sweet-tart taste and vibrant yellow skin. This fruit is slightly larger than its purple-skinned counterpart and is filled with juicy, seed-studded pulp. The flavor of yellow passionfruit is a tantalizing blend of sweet and tangy, with a tropical, floral undertone.",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 6,
    name: "Rose Passion Fruit",
    image: rosePassion,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description: `"Rose passionfruit," also known as "Passiflora ligularis" or "sweet granadilla," is a captivating tropical fruit with a unique appearance and delightful taste. This fruit is named "rose passionfruit" due to its rosy or pale pink outer skin. The flesh inside is translucent and dotted with black seeds, offering a visually striking contrast.`,
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 7,
    name: "Bitter Lemon Fruit",
    image: bitterLemon,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description: `Bitter lemon, also known as "Citrus limon," is a citrus fruit characterized by its distinctive taste, which is more tart and bitter than that of the common lemon. The fruit typically has a bright yellow or greenish-yellow color, and its peel is rough and textured.`,
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 8,
    name: "Red Pepper",
    image: redPepper,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 9,
    name: "Long Red Pepper",
    image: longRedPepper,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 10,
    name: "Garden Egg",
    image: gardenEgg,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 11,
    name: "Plantain",
    image: plantain,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
  },
  {
    id: 12,
    name: "Carrot",
    image: carrot,
    category: "Root Crops",
    price: "$40.29",
    discount: "$60.29",
  },
];

export const articles = [
  {
    title: `SAKINA USENGIMANA – CEO of Afri-foods Rwanda “Overcoming failures in setting up her agri-business venture”`,
    image: mediaArticleFive,
    descriptionOne:
      "Setting up a business venture is not often without challenges and set-backs, especially in the case of start-ups and emerging ventures.",
    descriptionTwo:
      "While these setbacks can be discouraging, to Sakina Usengimana, they served to equip her with lessons and experiences that eventually led to her success.",
    more: "https://africanleadersmagazine.com/sakina-usengimana-ceo-of-afri-foods-ltd-overcoming-failures-in-setting-up-her-agri-business-venture/",
  },
  {
    title:
      "Exporting chillies from Rwanda: How this entrepreneur built her business",
    image: mediaArticleSix,
    descriptionOne:
      "Afri Foods, a horticultural company in Rwanda, was started in 2019 by Sakina Usengimana. It exports crops such as chilli, avocado, eggplant and passion fruit to Germany, the Netherlands, France, the UK, Belgium and Dubai. How we made it in Africa spoke to Usengimana about how she started and grew the company.",
    more: "https://www.howwemadeitinafrica.com/exporting-chillies-from-rwanda-how-this-entrepreneur-built-her-business/142384/",
  },
  {
    title: "Sakina Usengimana: Seeing Beyond Limitations In Africa",
    image: mediaArticleSeven,
    descriptionOne: `When Sakina Usengimana heard a speaker say something like this—“you have land, yet you are hungry,” it became the momentum to bring about change.
      Two years later, Sakina founded Afri Foods.`,
    descriptionTwo: `The story wasn’t so smooth. She had the passion for agriculture but lacked certain skillsets. The Rwandan entrepreneur started with bell peppers and tomatoes. And then failed beautifully.`,
    more: "https://anewtouchofafrica.com/sakina-usengimana-seeing-beyond-limitations-in-africa/",
  },
  {
    title:
      "Empowering Communities and Transforming Agriculture: The Success Story of Afri Foods in Rwanda",
    image: mediaArticleEight,
    descriptionOne: `Afri Foods sources from more than 500 farmers and 5 cooperatives in Rwanda, 70% of whom are women and youth. The company is committed to improving the lives of their farmers by maintaining a stable flow of income and paying a real living wage for their produce. It also promote capacity building and has trained over 400 farmers on good agricultural practices.`,
    more: "https://agrinnovators.org/business-profile/afri-foods/",
    backgroundColor: "#FFF",
  },
  {
    title:
      "A 28 Ans, Sakina Usengimana Dirige Une Entreprise Prospère D’exportation De Fruits Et Légumes Au Rwanda",
    image: mediaArticleOne,
    descriptionOne:
      "(Agence Ecofin) – Les produits horticoles du Rwanda sont très sollicités sur le marché international. Sakina Usengimana, une jeune entrepreneure, a décidé de s’aventurer dans cette industrie en fondant Afri-Foods. Avec moins de 3 ans d’existence, elle réussit à exporter ses produits en Occident et au Moyen-Orient.",
    descriptionTwo: "",
    more: "https://www.agenceecofin.com/entreprendre/2209-91744-a-28-ans-sakina-usengimana-dirige-une-entreprise-prospere-d-exportation-de-fruits-et-legumes-au-rwanda",
  },
  {
    title:
      "How Agri-Business Entrepreneur Overcame Failures In Setting Up Venture, 2021",
    image: mediaArticleTwo,
    descriptionOne:
      "Setting up a business venture is not often without challenges and setbacks, especially in the case of start-ups and emerging ventures. While these setbacks can be discouraging, to Sakina Usengimana, they served to equip her with lessons and experiences that eventually led to her success.",
    descriptionTwo:
      "The 28-year-old is an entrepreneur with a company known as Afri-foods Ltd, based in Gatsibo and Nyanza Districts – involved in exporting fresh vegetables and fruits.",

    more: "https://www.newtimes.co.rw/article/189534/News/how-agri-business-entrepreneur-overcame-failures-in-setting-up-venture",
  },
  {
    title: "New Finance Boost For Women-Owned Start-Ups, 2021",
    image: mediaArticleThree,
    descriptionOne:
      "Global Women Fresh (GWF), the international network for women in produce, has got together with the ITC’s SheTrades initiative to launch a microfinance pilot programme for women-led SMEs in Rwanda’s Ag Fresh industry.",
    descriptionTwo:
      "Complex sets of circumstances often disqualify women in Africa from receiving investment capital and/or make it impossible to afford. GWF has been working in partnership with the ITC’s SheTrades Initiative for two years, supporting women entrepreneurs in the Ag Fresh industry. Most recently, it has launched a microfinance pilot programme for women-led SMEs in Rwanda.",
    more: "https://www.fruitnet.com/eurofruit/new-finance-boost-for-women-owned-start-ups/186278.article",
  },
  {
    title:
      "Rwanda: Horticulture Exporters Decry Hike In Airfreight Charges, 2020",
    image: mediaArticleFour,
    descriptionOne:
      "Statistics by NAEB show that the value of horticulture exports increased from over $27 million in the fiscal year 2018-2019, to more than $28 million in the year 2019-2020.",
    descriptionTwo:
      "Local exporters of horticulture produce have expressed concerns on the increase in airfreight fare brought about by the Covid-19 pandemic, calling for a review in these charges to ensure smooth operation.",
    more: "https://allafrica.com/stories/202008210927.html",
  },
];

export const products = [
  {
    name: "vegetables",
    image: productCategoriesOne,
  },
  {
    name: "fruits",
    image: productCategoriesTwo,
  },
  {
    name: "root crops",
    image: productCategoriesThree,
  },
  {
    name: "cereals",
    image: productCategoriesOne,
  },
  {
    name: "legumes",
    image: productCategoriesTwo,
  },
  {
    name: "spices",
    image: productCategoriesThree,
  },
];

export const customers = [
  {
    name: "Ignacio Laiseca",
    image: customerImage,
    description:
      "Our company has been working with AfriFoods since February 2020. Ms Sakina and her team have built a relationship based on trust and commitment.",
    title: "CEO, Golden Tree Food Stuff LLC, Dubai, UAE",
  },
  {
    name: "Mary Laiseca",
    image: customerImage,
    description:
      "We have been working with AfriFoods since February 2020. Ms Sakina and her team have built a relationship based on trust and commitment.",
    title: "CTO, Silver Tree Food Stuff LLC, Dubai, UAE",
  },
  {
    name: "Sarah Laiseca",
    image: customerImage,
    description:
      "Rapid response, great communication, and excellent service. We have been working with AfriFoods since February 2020. Ms Sakina and her team have built a relationship based on trust and commitment.",
    title: "MD, Wooden Tree Food Stuff LLC, Dubai, UAE",
  },
  {
    name: "Abraham Laiseca",
    image: customerImage,
    description:
      "Rapid response, great communication, and excellent service. We have been working with AfriFoods since February 2020. Ms Sakina and her team have built a relationship based on trust and commitment.",
    title: "Agricultural Minister, India",
  },
];
