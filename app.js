import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 *  -logo
 *  -nav items
 *
 * body
 *  - search
 *  - Restaurant container
 *    - restaurant card
 *        -img
 *        -name
 *        -star rating
 *        -cuisine
 *        -delivery time
 *
 * footer
 *  - copyright
 *  - quick links
 *  - address , name ,contact information
 */

const Header = () => {
  return (
    <div className="header">
      {/* logo */}
      <div>
        <img
          className="logo"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// dynamic saved data

const resList = [
  {
    info: {
      id: "831065",
      name: "Chinese Wok",
      cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
      locality: "Kaccha Bagh Area",
      areaName: "Omaxe mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4,
      parentId: "61955",
      avgRatingString: "4.0",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 22:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chinese-wok-kaccha-bagh-area-omaxe-mall-delhi-831065",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "804071",
      name: "Pizza Hut",
      cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
      locality: "H.C. Sen Marg",
      areaName: "Omaxe ChandniChowk",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 22:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-h-c-sen-marg-omaxe-chandnichowk-delhi-804071",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "286518",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "ru7j7x8qqtvuzfuw7cdh",
      locality: "Janpath",
      areaName: "Janpath",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
      avgRating: 4.1,
      parentId: "10804",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 16:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-janpath-delhi-286518",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "302684",
      name: "Barbeque Nation",
      cloudinaryImageId: "v4ryntwbvxuogbwfg3kj",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹600 for two",
      cuisines: ["North Indian", "Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
      avgRating: 4.1,
      parentId: "2438",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 16:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barbeque-nation-connaught-place-delhi-302684",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "804724",
      name: "KFC",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804724.JPG",
      locality: "Kaccha Bagh",
      areaName: "Chandni Chowk",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
      avgRating: 4,
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-kaccha-bagh-chandni-chowk-delhi-804724",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "38925",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Netaji Subhash Marg",
      areaName: "Daryaganj",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-17 01:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25397",
      name: "Oven Story Pizza - Standout Toppings",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/22/187972f6-d355-47f8-8fae-f860f9ba520d_25397.JPG",
      locality: "Minto Road",
      areaName: "Connaught Place",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "3534",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "25-35 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-minto-road-connaught-place-delhi-25397",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253765",
      name: "McDonald's",
      cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
      locality: "Kumar Theatre",
      areaName: "Chandni Chowk",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:58:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-kumar-theatre-chandni-chowk-delhi-253765",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "807783",
      name: "Burger King",
      cloudinaryImageId: "533d5ee221cb729dcf42faeb8761f57d",
      locality: "Omaxe Mall",
      areaName: "Chandni Chowk",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 3.8,
      parentId: "166",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-omaxe-mall-chandni-chowk-delhi-807783",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "691734",
      name: "Big Bowl",
      cloudinaryImageId: "c99751d54e4e1847186c62b3309c1327",
      locality: "Eldeco Junction",
      areaName: "Kashmere Gate Metro Station",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "434792",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/big-bowl-eldeco-junction-kashmere-gate-metro-station-delhi-691734",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "64974",
      name: "Wendy's Burgers",
      cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
      locality: "Jawahar Nagar",
      areaName: "Kamla Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.4,
      parentId: "972",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wendys-burgers-jawahar-nagar-kamla-nagar-delhi-64974",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "58217",
      name: "Theobroma",
      cloudinaryImageId: "63dd75492c47fcec191132b8eb299ea5",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-17 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/theobroma-connaught-place-delhi-58217",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "128116",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "hgvtyqrxzvpwmbs361er",
      locality: "Kamla Nagar",
      areaName: "Kamla Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "4961",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-17 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "21383",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-connaught-place-delhi-21383",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "143144",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "vxtmj260dgp7kpjakhzz",
      locality: "E Block",
      areaName: "Connaught Place",
      costForTwo: "₹100 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.5,
      veg: true,
      parentId: "582",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 19:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-e-block-connaught-place-delhi-143144",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "701049",
      name: "NIC Ice Creams",
      cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
      locality: "JAWAHAR NAGAR",
      areaName: "Block-Ua",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-17 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹169",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nic-ice-creams-jawahar-nagar-block-ua-delhi-701049",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "805983",
      name: "FreshMenu",
      cloudinaryImageId: "f5980f4e4888af4e5c275d5dd3ea93f6",
      locality: "SHAKARPUR",
      areaName: "NEHRU ENCLAVE",
      costForTwo: "₹250 for two",
      cuisines: ["Continental", "Chinese", "Oriental", "Asian", "Healthy Food", "Fast Food", "Indian", "Desserts"],
      avgRating: 4.1,
      parentId: "398",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/freshmenu-shakarpur-nehru-enclave-delhi-805983",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "62965",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "q4gkxjginxsehi2f8q1e",
      locality: "Minto Road",
      areaName: "Connaught Place",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Punjabi", "Healthy Food", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4925",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-minto-road-connaught-place-delhi-62965",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "157768",
      name: "The Good Bowl",
      cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
      locality: "Minto Road",
      areaName: "Connaught Place",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "7918",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-16 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-minto-road-connaught-place-delhi-157768",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27797",
      name: "Natural Ice Cream",
      cloudinaryImageId: "huwcwcxol7dnbemjlilq",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      parentId: "2093",
      avgRatingString: "4.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-17 00:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Ice-creams.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/natural-ice-cream-connaught-place-delhi-27797",
      type: "WEBLINK",
    },
  },
];

const imageId = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRatingString, locality, cloudinaryImageId, sla } = resList.info;
  return (
    <div className="res-card">
      <img src={imageId + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>
        {avgRatingString} stars &nbsp;&nbsp;&nbsp; ~ {sla.deliveryTime} mins
      </h5>
      <h5>{locality}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* res card */}
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
