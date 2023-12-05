import heroOne from "../assets/images/home/home_1.png";
import heroTwo from "../assets/images/home/home_2.png";
import heroThree from "../assets/images/home/home_3.png";
import heroFour from "../assets/images/home/home_4.png";
import heroFive from "../assets/images/home/home_5.png";

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

export const heroImages = [
  {
    id: 1,
    title: "heroOne",
    image: heroOne,
  },
  {
    id: 2,
    title: "heroTwo",
    image: heroTwo,
  },
  {
    id: 3,
    title: "heroThree",
    image: heroThree,
  },
  {
    id: 4,
    title: "heroFour",
    image: heroFour,
  },
  {
    id: 5,
    title: "heroFive",
    image: heroFive,
  },
];

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
    productDetails: [
      {
        textOne:
          "The Fuerte avocado is a popular and delicious variety of avocado (Persea americana) known for its unique characteristics. It was first developed in California in the early 20th century and is now widely cultivated in various avocado-growing regions.",
      },
      {
        textTwo:
          "The Fuerte avocado is pear-shaped with smooth, medium-thick skin that changes from green to purplish-black as it ripens. Its creamy, pale green flesh has a slightly nutty flavor and a smooth, buttery texture. One of the key features of the Fuerte avocado is its extended harvesting season, typically from late fall through early spring, making it available for an extended period.",
      },
      {
        textThree:
          "This variety is prized for its versatility in culinary applications, from making creamy guacamole to enhancing salads and sandwiches, and it is a favorite among avocado enthusiasts for its rich, well-balanced flavor.",
      },
      {
        textFour:
          "Fuerte avocados have a smooth medium-thin skin which is easy to peel and dense, pale green flesh with some dark speckling. Fuerte avocados are rich and creamy with notes of hazelnuts and a clean, grassy finish.",
      },
    ],
    healthBenefit:
      "The avocado is a superfood worthy of the name. It contains more protein, potassium, magnesium, folic acid, thiamin, riboflavin, niacin, biotin, pantothenic acid, vitamin E, and vitamin K per ounce than any other fruit. The avocado also has monounsaturated fat, such as oleic acid that acts as a “nutrient booster”. It enables the human body to absorb more fat-soluble nutrients, such as alpha and beta-carotene and lutein, from other foods eaten with the fruit.",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason: "Late Fall through Early Spring",
      },
      {
        nutritionalContent:
          "Healthy monounsaturated fats, Fiber, vitamin K, vitamin C, vitamin E, and several B vitamins",
      },
      {
        storage:
          "For best results, Fuerte avocados should be stored at room temperature until they reach the desired level of ripeness. Once ripe, they can be refrigerated to extend their shelf life.",
      },
      {
        culinaryUses:
          "Fuerte avocados used in a wide range of dishes, from guacamole and dips to salads, sandwiches, and as a versatile ingredient in both savory and sweet recipes.",
      },
    ],
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  // {
  //   id: 2,
  //   name: "Hass Avocado",
  //   image: hassAvocado,
  //   category: "Fruits",
  //   price: "$40.29",
  //   discount: "$60.29",
  //   description:
  //     "The Hass avocado is one of the most well-known and widely cultivated avocado varieties worldwide. It was first discovered and developed by a California postman named Rudolph Hass in the 1920s, and it has since become a staple in the world of avocados. Hass avocados are easily recognizable by their distinctive pebbly-textured, purplish-black skin.",
  //   productDetails: [
  //     {
  //       textOne:
  //         "The Fuerte avocado is a popular and delicious variety of avocado (Persea americana) known for its unique characteristics. It was first developed in California in the early 20th century and is now widely cultivated in various avocado-growing regions.",
  //     },
  //     {
  //       textTwo:
  //         "The Fuerte avocado is pear-shaped with smooth, medium-thick skin that changes from green to purplish-black as it ripens. Its creamy, pale green flesh has a slightly nutty flavor and a smooth, buttery texture. One of the key features of the Fuerte avocado is its extended harvesting season, typically from late fall through early spring, making it available for an extended period.",
  //     },
  //     {
  //       textThree:
  //         "This variety is prized for its versatility in culinary applications, from making creamy guacamole to enhancing salads and sandwiches, and it is a favorite among avocado enthusiasts for its rich, well-balanced flavor.",
  //     },
  //     {
  //       textFour:
  //         "Fuerte avocados have a smooth medium-thin skin which is easy to peel and dense, pale green flesh with some dark speckling. Fuerte avocados are rich and creamy with notes of hazelnuts and a clean, grassy finish.",
  //     },
  //   ],
  //   healthBenefit:
  //     "The avocado is a superfood worthy of the name. It contains more protein, potassium, magnesium, folic acid, thiamin, riboflavin, niacin, biotin, pantothenic acid, vitamin E, and vitamin K per ounce than any other fruit. The avocado also has monounsaturated fat, such as oleic acid that acts as a “nutrient booster”. It enables the human body to absorb more fat-soluble nutrients, such as alpha and beta-carotene and lutein, from other foods eaten with the fruit.",
  //   specifications: [
  //     {
  //       weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
  //     },
  //     {
  //       harvestingSeason: "Late Fall through Early Spring",
  //     },
  //     {
  //       nutritionalContent:
  //         "Healthy monounsaturated fats, Fiber, vitamin K, vitamin C, vitamin E, and several B vitamins",
  //     },
  //     {
  //       storage:
  //         "For best results, Fuerte avocados should be stored at room temperature until they reach the desired level of ripeness. Once ripe, they can be refrigerated to extend their shelf life.",
  //     },
  //     {
  //       culinaryUses:
  //         "Fuerte avocados used in a wide range of dishes, from guacamole and dips to salads, sandwiches, and as a versatile ingredient in both savory and sweet recipes.",
  //     },
  //   ],
  //   cartAdd: TbShoppingCartPlus,
  //   wishlist: AiOutlineHeart,
  // },
  {
    id: 3,
    name: "Apple Banana",
    image: appleBanana,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "The apple banana, also known as the Manzano banana or the Apple Cultivar, is a distinct banana variety characterized by its small size and apple-like flavor. Its creamy, sweet flesh and unique taste make it a favorite among banana enthusiasts. ",
    productDetails: [
      {
        textOne:
          "Apple Bananas, characterized by a slender yet robust profile, are relatively small fruits. Their peel transitions from a vibrant green to a yellow hue as they ripen, contributing to their petite size and appealing appearance.",
      },
      {
        textTwo:
          "Distinguished by its creamy, sweet flesh, the Apple Banana sets itself apart from traditional bananas. With a unique taste carrying subtle notes reminiscent of apples and a smooth texture, it proves to be a delightful treat for banana enthusiasts.",
      },
      {
        textThree: "",
      },
      {
        textFour: "",
      },
    ],
    healthBenefit:
      "The avocado is a superfood worthy of the name. It contains more protein, potassium, magnesium, folic acid, thiamin, riboflavin, niacin, biotin, pantothenic acid, vitamin E, and vitamin K per ounce than any other fruit. The avocado also has monounsaturated fat, such as oleic acid that acts as a “nutrient booster”. It enables the human body to absorb more fat-soluble nutrients, such as alpha and beta-carotene and lutein, from other foods eaten with the fruit.",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason:
          "Apple Bananas are available year-round, offering a consistent supply of freshness.",
      },
      {
        nutritionalContent:
          "Free from artificial additives or preservatives, these snacks are naturally rich in potassium, vitamins, and dietary fiber, making them a wholesome choice for a quick and nutritious treat.",
      },
      {
        storage:
          "Keep Apple Bananas in a cool, dry place, allowing them to ripen at room temperature. Optional refrigeration can be employed to extend their shelf life.",
      },
      {
        culinaryUses:
          "Ideal for snacking with its convenient size and naturally sweet flavor, the Apple Banana is a versatile fruit that blends seamlessly into smoothies, adds a fruity twist to cereals, yogurt, or salads, and imparts a unique apple-like essence to baked goods. Additionally, freezing ripe bananas offers a refreshing and creamy homemade banana ice cream, showcasing the fruit's adaptability to various culinary delights.",
      },
    ],
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
    productDetails: [
      {
        textOne:
          "Renowned for its sweet and tangy flavor, the pineapple (scientifically known as Ananas comosus) is a tropical delight cherished for its distinctive characteristics. ",
      },
      {
        textTwo:
          "The appearance of pineapples is easily recognizable due to their spiky, textured exterior and vibrant yellow or orange flesh. The fruit's inviting exterior showcases a unique combination of roughness and allure, making it a visually appealing tropical treat.",
      },
      {
        textThree:
          "Pineapples offer a delightful experience with their juicy and succulent flesh. Each bite transforms into a refreshing sensation, highlighting the harmonious tropical taste achieved through the perfect balance between sweetness and acidity. Overall, pineapples not only captivate with their distinctive appearance but also deliver a flavorful and satisfying tropical indulgence.",
      },
      {
        textFour: "",
      },
    ],
    healthBenefit:
      "Boosting immune health with high vitamin C content, aiding digestion with enzymes like bromelain, and providing antioxidant properties for overall well-being, pineapples are a powerhouse of health benefits.",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason:
          "Available throughout the year guaranteeing a steady supply of tropical goodness.",
      },
      {
        nutritionalContent:
          "Completely free from artificial additives or preservatives, pineapples are a natural source of essential nutrients, including vitamin C, manganese, and antioxidants.",
      },
      {
        storage:
          "To maintain the freshness of pineapples, store them in a cool, well-ventilated place. While refrigeration is optional, it can enhance the fruit's shelf life, ensuring a longer-lasting and crisp texture.",
      },
      {
        culinaryUses:
          "Slice for a refreshing snack, blend into smoothies for tropical flavor, enhance salads and desserts with sweet tanginess, grill for savory notes, or extract fresh juice for a revitalizing beverage.",
      },
    ],

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
    productDetails: [
      {
        textOne:
          "Slightly larger than its purple-skinned counterpart, the vibrant yellow-skinned passion fruit conceals a treasure trove of juicy, seed-studded pulp. Its larger size holds the promise of a more abundant and flavorful experience.",
      },
      {
        textTwo:
          "In terms of flavor, the passion fruit offers a tantalizing blend of sweet and tangy notes, creating a uniquely tropical taste with a subtle floral undertone. This combination makes it a delightful and exotic addition to a variety of culinary creations",
      },
      {
        textThree: "",
      },
      {
        textFour: "",
      },
    ],
    healthBenefit:
      "A good source of essential vitamins, including vitamin C, and contains antioxidants that contribute to overall well-being. Additionally, its dietary fiber content supports healthy digestion, making it a beneficial choice for overall nutritional balance.",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason:
          "Typically available year-round, ensuring a consistent supply of tropical goodness.",
      },
      {
        nutritionalContent:
          "Free from artificial additives or preservatives, this product is rich in vitamins, antioxidants, and dietary fiber, providing a wholesome and natural source of essential nutrients.",
      },
      {
        storage:
          "For best results, Fuerte avocados should be stored at room temperature until they reach the desired level of ripeness. Once ripe, they can be refrigerated to extend their shelf life.",
      },
      {
        culinaryUses:
          "Enjoy the passion fruit as a standalone snack by scooping out the flavorful pulp. Elevate fruit salads, desserts, or beverages with its exotic taste, or use it to create refreshing juices, cocktails, or sorbets for a delightful culinary experience.",
      },
    ],
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  // {
  //   id: 6,
  //   name: "Rose Passion Fruit",
  //   image: rosePassion,
  //   category: "Fruits",
  //   price: "$40.29",
  //   discount: "$60.29",
  //   description: `"Rose passionfruit," also known as "Passiflora ligularis" or "sweet granadilla," is a captivating tropical fruit with a unique appearance and delightful taste. This fruit is named "rose passionfruit" due to its rosy or pale pink outer skin. The flesh inside is translucent and dotted with black seeds, offering a visually striking contrast.`,
  //   productDetails: [
  //     {
  //       textOne:
  //         "The Fuerte avocado is a popular and delicious variety of avocado (Persea americana) known for its unique characteristics. It was first developed in California in the early 20th century and is now widely cultivated in various avocado-growing regions.",
  //     },
  //     {
  //       textTwo:
  //         "The Fuerte avocado is pear-shaped with smooth, medium-thick skin that changes from green to purplish-black as it ripens. Its creamy, pale green flesh has a slightly nutty flavor and a smooth, buttery texture. One of the key features of the Fuerte avocado is its extended harvesting season, typically from late fall through early spring, making it available for an extended period.",
  //     },
  //     {
  //       textThree:
  //         "This variety is prized for its versatility in culinary applications, from making creamy guacamole to enhancing salads and sandwiches, and it is a favorite among avocado enthusiasts for its rich, well-balanced flavor.",
  //     },
  //     {
  //       textFour:
  //         "Fuerte avocados have a smooth medium-thin skin which is easy to peel and dense, pale green flesh with some dark speckling. Fuerte avocados are rich and creamy with notes of hazelnuts and a clean, grassy finish.",
  //     },
  //   ],
  //   healthBenefit:
  //     "The avocado is a superfood worthy of the name. It contains more protein, potassium, magnesium, folic acid, thiamin, riboflavin, niacin, biotin, pantothenic acid, vitamin E, and vitamin K per ounce than any other fruit. The avocado also has monounsaturated fat, such as oleic acid that acts as a “nutrient booster”. It enables the human body to absorb more fat-soluble nutrients, such as alpha and beta-carotene and lutein, from other foods eaten with the fruit.",
  //   specifications: [
  //     {
  //       weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
  //     },
  //     {
  //       harvestingSeason: "Late Fall through Early Spring",
  //     },
  //     {
  //       nutritionalContent:
  //         "Healthy monounsaturated fats, Fiber, vitamin K, vitamin C, vitamin E, and several B vitamins",
  //     },
  //     {
  //       storage:
  //         "For best results, Fuerte avocados should be stored at room temperature until they reach the desired level of ripeness. Once ripe, they can be refrigerated to extend their shelf life.",
  //     },
  //     {
  //       culinaryUses:
  //         "Fuerte avocados used in a wide range of dishes, from guacamole and dips to salads, sandwiches, and as a versatile ingredient in both savory and sweet recipes.",
  //     },
  //   ],
  //   cartAdd: TbShoppingCartPlus,
  //   wishlist: AiOutlineHeart,
  // },
  {
    id: 7,
    name: "Bitter Lemon Fruit",
    image: bitterLemon,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description: `Bitter lemon, Commonly known as "Bitter Lemon," this citrus fruit, scientifically referred to as Citrus limon, is renowned for its distinctive taste, offering a profile more tart and bitter than the common lemon. `,
    productDetails: [
      {
        textOne:
          "Characterized by a unique blend of tartness and bitterness, this product offers a distinct flavor profile that sets it apart. Its bold and zesty essence makes it a versatile ingredient, providing a lively addition to various culinary creations.",
      },
      {
        textTwo:
          "Whether used to enhance savory dishes or to add a kick to desserts and beverages, the pronounced tartness and bitterness of this product can elevate the overall taste experience. Consider incorporating it into sauces, dressings, or cocktails for a bold flavor infusion that brings a dynamic twist to your favorite recipes.",
      },
      {
        textThree:
          "Typically displaying a bright yellow or greenish-yellow color, this product's peel is rough and textured, contributing to its visual appeal. The vibrant hues and distinctive texture make it easily recognizable and add to the overall aesthetic appeal of this unique product.",
      },
      {
        textFour: "",
      },
    ],
    healthBenefit:
      "Contribute to immune health with the vitamin C content of this product, while antioxidants provide support for overall well-being. ",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason:
          "Available seasonally, adding a bold twist to seasonal culinary experiences.",
      },
      {
        nutritionalContent:
          "Free from artificial additives or preservatives, this product serves as a natural source of vitamin C and antioxidants, offering a refreshing and nutritious boost to your diet.",
      },
      {
        storage:
          "Store Bitter Lemons in a cool, well-ventilated place, and while refrigeration is optional, it can extend their shelf life.",
      },
      {
        culinaryUses:
          "Elevate beverages with a zesty kick, perfect for cocktails. Ideal for tangy dressings, marinades, and bold citrus-infused desserts.",
      },
    ],
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  // {
  //   id: 8,
  //   name: "Red Pepper",
  //   image: redPepper,
  //   category: "Vegetables",
  //   price: "$40.29",
  //   discount: "$60.29",
  //   description: `Bitter lemon, Commonly known as "Bitter Lemon," this citrus fruit, scientifically referred to as Citrus limon, is renowned for its distinctive taste, offering a profile more tart and bitter than the common lemon. `,

  //   productDetails: [
  //     {
  //       textOne:
  //         "The Fuerte avocado is a popular and delicious variety of avocado (Persea americana) known for its unique characteristics. It was first developed in California in the early 20th century and is now widely cultivated in various avocado-growing regions.",
  //     },
  //     {
  //       textTwo:
  //         "The Fuerte avocado is pear-shaped with smooth, medium-thick skin that changes from green to purplish-black as it ripens. Its creamy, pale green flesh has a slightly nutty flavor and a smooth, buttery texture. One of the key features of the Fuerte avocado is its extended harvesting season, typically from late fall through early spring, making it available for an extended period.",
  //     },
  //     {
  //       textThree:
  //         "This variety is prized for its versatility in culinary applications, from making creamy guacamole to enhancing salads and sandwiches, and it is a favorite among avocado enthusiasts for its rich, well-balanced flavor.",
  //     },
  //     {
  //       textFour:
  //         "Fuerte avocados have a smooth medium-thin skin which is easy to peel and dense, pale green flesh with some dark speckling. Fuerte avocados are rich and creamy with notes of hazelnuts and a clean, grassy finish.",
  //     },
  //   ],
  //   healthBenefit:
  //     "The avocado is a superfood worthy of the name. It contains more protein, potassium, magnesium, folic acid, thiamin, riboflavin, niacin, biotin, pantothenic acid, vitamin E, and vitamin K per ounce than any other fruit. The avocado also has monounsaturated fat, such as oleic acid that acts as a “nutrient booster”. It enables the human body to absorb more fat-soluble nutrients, such as alpha and beta-carotene and lutein, from other foods eaten with the fruit.",
  //   specifications: [
  //     {
  //       weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
  //     },
  //     {
  //       harvestingSeason: "Late Fall through Early Spring",
  //     },
  //     {
  //       nutritionalContent:
  //         "Healthy monounsaturated fats, Fiber, vitamin K, vitamin C, vitamin E, and several B vitamins",
  //     },
  //     {
  //       storage:
  //         "For best results, Fuerte avocados should be stored at room temperature until they reach the desired level of ripeness. Once ripe, they can be refrigerated to extend their shelf life.",
  //     },
  //     {
  //       culinaryUses:
  //         "Fuerte avocados used in a wide range of dishes, from guacamole and dips to salads, sandwiches, and as a versatile ingredient in both savory and sweet recipes.",
  //     },
  //   ],
  //   cartAdd: TbShoppingCartPlus,
  //   wishlist: AiOutlineHeart,
  // },
  {
    id: 9,
    name: "Bird Chilli",
    image: longRedPepper,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
    description: `Revered as one of the most potent chillies globally, the Bird Chilli, also known as Pili-pili, is a small yet mighty red pepper harvested in Rwanda, often referred to as "the country of Thousand Hills." Scientifically classified as Capsicum frutescens, it belongs to the Solanaceae family. 
    `,

    productDetails: [
      {
        textOne:
          "Packing a powerful punch and contributing intense heat to various culinary creations, this product is a fiery addition to dishes, elevating their flavor profiles. Its unique ability to enhance the spiciness of dishes makes it a sought-after ingredient for those who enjoy bold and zesty flavors.",
      },
      {
        textTwo:
          "Cultivated in the rich soils of Rwanda, renowned for its high-quality produce, this product originates from an area known for its commitment to agricultural excellence. Its cultivation adds a touch of African flair to global cuisines, offering a distinctive flavor that reflects the vibrancy of the region's culinary traditions.",
      },
      {
        textThree:
          "Compact in size and typically small and red in color, this product belongs to the Capsicum family, showcasing its close relation to other hot peppers. Its appearance hints at the intensity of its flavor, making it a standout ingredient for those seeking to infuse dishes with a touch of heat.",
      },
      {
        textFour: "",
      },
    ],
    healthBenefit:
      "Capsaicin may have metabolism-boosting properties, and this product provides a source of vitamins, including vitamin C.",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason: "",
      },
      {
        nutritionalContent:
          "No artificial additives. Fiery nature from capsaicin",
      },
      {
        storage:
          "Store in a cool, dry place, and using air-tight containers can help preserve their potency.",
      },
      {
        culinaryUses:
          "Adds intense heat to dishes, perfect for spicy food enthusiasts. Key in traditional African cuisines, especially in Uganda, for crafting flavorful hot sauces, marinades, and condiments.",
      },
    ],
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 10,
    name: "Eggplant",
    image: gardenEgg,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
    description: `Also known as aubergine, brinjal, or baigan, the Eggplant is a versatile plant species belonging to the nightshade family Solanaceae. Scientifically referred to as Solanum melongena, it is cultivated globally for its edible fruit. `,
    productDetails: [
      {
        textOne:
          "Most commonly recognized in a vibrant purple hue, this spongy and absorbent fruit stands at the heart of diverse cuisines, contributing its unique flavor and texture to a variety of dishes. Its distinctive appearance and rich color make it a visually appealing addition to both the kitchen and the plate.",
      },
      {
        textTwo:
          "Classified as a berry by botanical definition, this fruit defies expectations with its unique structure and culinary versatility. Despite its berry categorization, its spongy texture and robust flavor set it apart from more typical berries, offering a delightful contrast in both taste and mouthfeel.",
      },
      {
        textThree:
          "Part of the Solanaceae family, this fruit shares its botanical lineage with tomatoes and peppers, showcasing the diverse array of flavors and textures that can emerge from this plant family. The culinary possibilities are broad, and its role in various global cuisines highlights its adaptability and importance in creating distinctive and flavorful meals.",
      },
      {
        textFour: "",
      },
    ],
    healthBenefit:
      "Low in calories and a good source of vitamins, including vitamin C and B6, this product contains compounds with potential health benefits, contributing to overall well-being.",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason:
          "Grown and enjoyed worldwide, eggplant adapts to various climates, and its availability depends on the regional growing season.",
      },
      {
        nutritionalContent:
          "No artificial additives. Packed with fiber and essential vitamins.",
      },
      {
        storage:
          "Keep in a cool, well-ventilated place, and while refrigeration can help maintain freshness, it is not mandatory..",
      },
      {
        culinaryUses:
          "Adds unique texture and flavor to stews, curries, and grilled dishes. Versatile in roasting, grilling, frying, or stuffing.",
      },
    ],
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
    description: `A fruit resembling a banana, the plantain is a culinary delight that is almost always cooked to perfection. Known for its deliciousness, especially when fried, plantains offer a unique taste and texture. `,
    productDetails: [
      {
        textOne:
          "Resembling a banana in appearance but larger and typically more angular, this unique fruit presents a distinctive variation in the familiar banana aesthetic. While sharing some visual similarities with its smaller counterpart, the larger size and angular contours set it apart, making it easily recognizable in the produce aisle.",
      },
      {
        textTwo:
          "The peel of this fruit adds to its intrigue, showcasing a spectrum of colors ranging from green to yellow to black, indicative of various stages of ripeness. The evolving hues provide visual cues for consumers to choose the desired level of ripeness, offering flexibility in incorporating this fruit into culinary endeavors at different flavor profiles.",
      },
      {
        textThree: "",
      },
      {
        textFour: "",
      },
    ],
    healthBenefit:
      "Provides essential nutrients like potassium, dietary fiber, and vitamins, offering a wholesome and satisfying alternative to traditional fruits.",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason: "",
      },
      {
        nutritionalContent:
          "No artificial additives. Packed with fiber and essential vitamins.",
      },
      {
        storage:
          "Keep plantains at room temperature until ripe, and while refrigeration can extend shelf life, it is not mandatory.",
      },
      {
        culinaryUses:
          "Commonly fried for delightful crispiness, this versatile fruit can be boiled, baked, or grilled, adding a starchy and slightly sweet flavor to savory dishes.",
      },
    ],
  },
  {
    id: 12,
    name: "Carrot",
    image: carrot,
    category: "Root Crops",
    price: "$40.29",
    discount: "$60.29",
    description: `A biennial vegetable belonging to the family Apiaceae, the carrot is a culinary staple celebrated for its fleshy, edible, and colorful roots. 
    `,

    productDetails: [
      {
        textOne:
          "Varies in color from yellow, orange, light purple, deep red to deep violet, this fruit presents a captivating visual spectrum that adds a burst of vibrancy to the produce aisle. Among its diverse palette, it is distinctly known for its vibrant orange hue, catching the eye with its bold and appealing coloration.",
      },
      {
        textTwo:
          "This unique fruit's striking variety in color not only makes it visually enticing but also allows consumers to select based on ripeness and personal preference. Whether in the form of the warm tones of yellow and orange or the deeper shades of purple and red, this fruit brings a pop of color to both culinary creations and the overall aesthetic of the dining experience.",
      },
      {
        textThree: "",
      },
      {
        textFour: "",
      },
    ],
    healthBenefit:
      "Promotes eye health with high beta-carotene content and provides essential nutrients contributing to overall well-being.",
    specifications: [
      {
        weight: `0.5kg, 1.5kg, 1kg, 2.5kg, 5kg`,
      },
      {
        harvestingSeason: "Late Fall through Early Spring",
      },
      {
        nutritionalContent:
          "Free from additives or preservatives, this product is a rich source of beta-carotene, vitamins, and dietary fiber, offering a natural and nutritious choice.",
      },
      {
        storage:
          "Keep carrots refrigerated for prolonged freshness, and store in a cool, dry place to maintain their crisp texture.",
      },
      {
        culinaryUses:
          "Sweet and crisp, versatile in salads, soups, and standalone snacks. A key ingredient globally.",
      },
    ],
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

export const termOfService = [
  {
    text: {
      title: "1. Acceptance of Terms",
      description:
        "  By accessing or using the AFRI-FOODS website, you agree to comply with and be bound by these terms and conditions.",
    },
  },
  {
    text: {
      title: "2. Use of the Website",
      description:
        " You agree to use the AFRI-FOODS website for lawful purposes and in a manner consistent with all applicable laws and regulations.",
    },
  },
  {
    text: {
      title: "3. Intellectual Property ",
      description:
        " All content on the AFRI-FOODS website, including text, graphics, logos, images, and software, is the property of AFRI-FOODS and is protected by intellectual property laws. ( we don’t have yet but who make them us;) ",
    },
  },
  {
    text: {
      title: "4. Privacy Policy",
      description:
        " Your use of the AFRI-FOODS website is also governed by our Privacy Policy, outlining how we collect, use, and protect your personal information.",
    },
  },
  {
    text: {
      title: "5. Product Information",
      description:
        " While we make every effort to offer precise and current information about our products, please note that we cannot guarantee the absolute accuracy or completeness of such details. We encourage users to verify product information independently or contact us directly for the most up-to-date and accurate insights. ",
    },
  },
  {
    text: {
      title: "6. Ordering and Purchases ",
      description:
        "When placing an order on the AFRI-FOODS website, you agree to provide accurate and complete information. AFRI-FOODS reserves the right to cancel or refuse any order.",
    },
  },

  {
    text: {
      title: "7. Third-Party Links",
      description:
        "The AFRI-FOODS website may contain links to third-party websites. We are not responsible for the content or accuracy of these websites. ",
    },
  },
  {
    text: {
      title: "8. Limitation of Liability",
      description:
        "AFRI-FOODS is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website.",
    },
  },
  {
    text: {
      title: "9. Changes to Terms and Conditions ",
      description:
        "AFRI-FOODS reserves the right to modify these terms and conditions at any time. Your continued use of the website after such changes constitutes acceptance of the updated terms.",
    },
  },
  {
    text: {
      title: "10. Governing Law",
      description:
        "These terms and conditions are governed by the laws of Republic of Rwanda.",
    },
  },
];
