import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jpg";
import hotel3 from "./hotel3.jpg";
import hotel4 from "./hotel4.jpg";
import hotel5 from "./hotel5.jpg";
import hotel6 from "./hotel6.jpg";
import hotel7 from "./hotel7.jpg";
import hotel8 from "./hotel8.jpg";
import hotel9 from "./hotel9.jpg";

export const bcnmontblanc = {
  id: "hotelbcn_catalonia_montblanc",
  cat: "hospitality",
  type: "Hospitality",
  title: "Hotel HCC Montblanc",
  rooms: [
    {
      title: "Double room for ind Use, incl breakfast",
      units: 2,
      occupancy: 1,
      nights: 3,
      unitcost: 137.5,
    },
    {
      title: "Double room, for twin use, incl breakfast",
      units: 7,
      occupancy: 2,
      nights: 3,
      unitcost: 137.5,
    },
    {
      cat: "citytax",
      title: "city tax, per night per person, incl VAT",
      unitcost: 1.54,
    },
  ],
};

export const text = {
  variant: "h6",
  paras: [
    `  The <strong>HCC Montblanc</strong> is a 3-star hotel which could well
    be classified as a 4-star. The location is unbeatable in Via Laietana,
    right in the Gothic district, and close to Plaça Catalunya and metro
    lines.`,

    ` Although located in a buzzing street, all 157 rooms are sound proof,
    the building is new and all rooms are modern and well appointed.
    Double Rooms for single or double use are in average 23sqm. Some rooms
    include 10sqm terraces`,

    ` The property also offers a Restaurant, a Bar/lounge to relax and an a
    spacious outdoor pool.`,

    `   The property is following the strictest of <strong>COVID</strong>
    protocols, including all linens sanitized in high-temperature wash,
    floors marked for social distancing, hand sanitizers available
    everywhere, and regularly sanitized high-traffic areas.`,
  ],
};

export const leftIconsText = [
  "Gothic Quarter",
  "1x Restaurant 1 piano-Bar/Lounge",
  "157rooms",
  "High Speed, available",
];

export const rightIconsText = [
  "1x outdoor pool",
  "checkin/out 2pm / 12pm",
  "2 x meeting rooms",
  "Wheelchair accessible",
];

export const photos = [
  {
    src: hotel1,
    thumbnail: hotel1,
    thumbnailWidth: 271,
    thumbnailHeight: 180,
    tags: [{ value: "Common areas", title: "Nature | Flowers" }],
    caption: "Walkway inside the Hotel",
  },
  {
    src: hotel2,
    thumbnail: hotel2,
    thumbnailWidth: 320,
    thumbnailHeight: 190,
    tags: [
      { value: "Front Desk", title: "Architecture | Outdoors" },
      /*   { value: "Industrial", title: "Industrial" }, */
    ],
    caption: "Front Desk",
  },
  {
    src: hotel3,
    thumbnail: hotel3,
    thumbnailWidth: 320,
    thumbnailHeight: 230,
    tags: [
      { value: "Façade" },
      /*  { value: "Architecture" },
      { value: "Industrial" }, */
    ],
    caption: "Hotel's Façade.",
  },
  {
    src: hotel4,
    thumbnail: hotel4,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    tags: [
      { value: "Nearby Locations" },
      /*   { value: "Industrial" }, */
    ],
    caption: "Centrally Located",
  },
  {
    src: hotel5,
    thumbnail: hotel5,
    thumbnailWidth: 248,
    thumbnailHeight: 180,
    caption: "Breakfast Room",
    tags: [{ value: "Breakfast room" }],
  },
  {
    src: hotel6,
    thumbnail: hotel6,
    thumbnailWidth: 320,
    thumbnailHeight: 220,
    tags: [{ value: "Pool area" }],
    caption: "Swimming Pool outdoors",
  },
  {
    src: hotel7,
    thumbnail: hotel7,
    thumbnailWidth: 313,
    thumbnailHeight: 280,
    caption: "Twin room",
    tags: [{ value: "Twin room" }],
  },
  {
    src: hotel8,
    thumbnail: hotel8,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Well appointed bathroom with amenities",
    tags: [{ value: "Bathroom with amenities" }],
  },
  {
    src: hotel9,
    thumbnail: hotel9,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Terrace",
    tags: [{ value: "Terrace with views" }],
  },
];
