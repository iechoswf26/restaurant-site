import gyozaImage from "../assets/1_fire_nation_gyoza.png"
import edamameImage from "../assets/2_air_nomad_edamame_pods.png"
import avatarTonkotsuImage from "../assets/3_avatars_tonkotsu.png"
import zukosShoyuImage from "../assets/4_zukos_fiery_shoyu.png"
import tophsMisoImage from "../assets/5_tophs_earthy_miso.png"
import waterTribeVeganImage from "../assets/6_water_tribe_vegan.jpg"
import waterImage from "../assets/7_water.jpg"
import jazmineTeaImage from "../assets/8_jasmine_air_temple_tea.jpg"
import whiteLotusImage from "../assets/9_white_lotus_brew.jpg"
import fireFizzImage from "../assets/10_fire_nation_fizz.jpg"
import lighteningLemonadeImage from "../assets/11_lightning_bolt_lemonade.jpg"
import waterTribeMilkTeaImage from "../assets/12_water_tribe_milk_tea.jpg"
import emberBobaImage from "../assets/13_ember_mango_boba.jpg"
import earthBobaImage from "../assets/14_earth_kingdom_matcha_boba.jpg"

const menuItems = [
    {
        id: 1,
        name: "Fire Nation Gyoza",
        element: "Spicy, bold, and full of flavor—perfect nod to the Fire Nation’s fiery cuisine.",
        price: 5.99,
        category: "Appetizer",
        img: gyozaImage
    },

    {
        id: 2,
        name: "Air Nomad Edamame Pods",
        element: "Light, healthy, and simple—evoking the airy, peaceful lifestyle of the Air Nomads.",
        price: 3.99,
        category: "Appetizer",
        img: edamameImage
    },

    {
        id: 3,
        name: "Avatar's Tonkotsu",
        element: "Pork Bone Broth, Chashu Pork, Ajitama Egg, Kikurage, Scallions, Sesame Seeds.",
        price: 16.99,
        category: "Dinner",
        img: avatarTonkotsuImage
    },

    {
        id: 4,
        name: "Zuko's Fiery Shoyu",
        element: "Pork Bone Broth, Soy Sauce Blend, Chashu Pork, Ajitama Egg, Menma, Scallions, Nori, Pepper.",
        price: 19.99,
        category: "Dinner",
        img: zukosShoyuImage
    },

    {
        id: 5,
        name: "Toph's Earthy Miso",
        element: "Pork Bone Broth, Miso Blend, Goma Pork, Ajitama Egg, Scallions, Napa Cabbage, Bean Sprout, Corn, Sesame Seeds.",
        price: 16.99,
        category: "Lunch",
        img: tophsMisoImage
    },

    {
        id: 6,
        name: "Water Tribe Vegan",
        element: "Almond Milk Tonkotsu, Shroom Abura, Spinach, Assuage Tofu, Scallions, Corn, Kikurage.",
        price: 12.99,
        category: "Lunch",
        img: waterTribeVeganImage
    },

    {
        id: 7,
        name: "Water",
        element: "Pure water restores balance, refreshing body and spirit.",
        price: 1.00,
        category: "Drinks",
        img: waterImage
    },

    {
        id: 8,
        name: "Jasmine Air Temple Tea",
        element: "Light, floral, and calming - brewed for peaceful balance.",
        price: 3.99,
        category: "Drinks",
        img: jazmineTeaImage
    },

    {
        id: 9,
        name: "White Lotus Brew",
        element: "A smooth, wise blend steeped to quiet the mind and strengthen the spirit.",
        price: 4.99,
        category: "Drinks",
        img: whiteLotusImage
    },

    {
        id: 10,
        name: "Fire Nation Fizz",
        element: "Bright, bold, and sparkling with unstoppable energy.",
        price: 2.99,
        category: "Drinks",
        img: fireFizzImage
    },

    {
        id: 11,
        name: "Lightning Bolt Lemonade",
        element: "Sweet with a sharp citrus kick — fast, powerful, refreshing.",
        price: 2.99,
        category: "Drinks",
        img: lighteningLemonadeImage
    },

    {
        id: 12,
        name: "Water Tribe Milk Tea",
        element: "Classic milk tea with tapioca pearls — smooth, flowing, and comforting.",
        price: 4.99,
        category: "Drinks",
        img: waterTribeMilkTeaImage
    },

    {
        id: 13,
        name: "Ember Mango Boba",
        element: "Mango milk tea with golden pearls — sweet heat with a fiery finish.",
        price: 3.99,
        category: "Drinks",
        img: emberBobaImage
    },

    {
        id: 14,
        name: "Earth Kingdom Matcha Boba",
        element: "Rich matcha with brown sugar pearls — grounded, creamy, and strong.",
        price: 5.99,
        category: "Drinks",
        img: earthBobaImage
    }];

export default menuItems;