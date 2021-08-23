import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jpg";
import hotel3 from "./hotel3.jpg";
import hotel4 from "./hotel4.jpg";
import hotel5 from "./hotel5.jpg";
import hotel6 from "./hotel6.jpg";
import hotel7 from "./hotel7.jpg";
import hotel8 from "./hotel8.jpg";
import hotel9 from "./hotel9.jpg";

export const bcnjazz = {
  id: "hotelbcn_jazz",
  title: "Hotel Jazz",
  cat: "hospitality",
  type: "Hospitality",
  rooms: [
    {
      title: "Doble room for ind Use, incl breakfast",
      units: 2,
      occupancy: 1,
      nights: 3,
      unitcost: 130,
    },
    {
      title: "Double room for twin use, incl breakfast",
      units: 7,
      occupancy: 2,
      nights: 3,
      unitcost: 140,
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
    `  The <strong>Hotel Jazz</strong> is one of our 3star superior
    favourites in the city. The location could not be better, only a few
    steps away from Plaça Catalunya, and the upper side of
    <em>Les Rambles</em>`,

    ` The property is very close to many of Barcelona's attractions, and it
    offers 108 really modern and elegant rooms- some of them are adapted
    for handicapped people. It really looks like a 4-star.`,
  ],
};

export const leftIconsText = [
  "Off Plaça Catalunya",
  "1x Lounge Bar",
  "108 rooms",
  "High Speed, available",
];

export const rightIconsText = [
  "1x outdoor pool",
  "checkin/out 3pm / 12pm",
  "2 x meeting rooms",
  "Wheelchair accessible",
];

export const photos = [
  {
    src: hotel1,
    thumbnail: hotel1,
    thumbnailWidth: 271,
    thumbnailHeight: 180,
    caption: "Front Façade of the Hotel",
    tags: [{ value: "Façade " }],
  },
  {
    src: hotel2,
    thumbnail: hotel2,
    thumbnailWidth: 320,
    thumbnailHeight: 190,
    caption: "Only steps away from Plaça Catalunya",
    tags: [{ value: "Barcelona " }],
  },
  {
    src: hotel3,
    thumbnail: hotel3,
    thumbnailWidth: 320,
    thumbnailHeight: 230,
    caption: "Front Desk",
    tags: [{ value: "Front Desk " }],
  },
  {
    src: hotel4,
    thumbnail: hotel4,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Rooftop Pool",
    tags: [{ value: "Swimming Pool " }],
  },
  {
    src: hotel5,
    thumbnail: hotel5,
    thumbnailWidth: 248,
    thumbnailHeight: 180,
    caption: "Bar/Lounge",
    tags: [{ value: "Bar/Lounge " }],
  },
  {
    src: hotel6,
    thumbnail: hotel6,
    thumbnailWidth: 320,
    thumbnailHeight: 200,
    caption: "Superior Room",
    tags: [{ value: "Superior Room " }],
  },
  {
    src: hotel7,
    thumbnail: hotel7,
    thumbnailWidth: 313,
    thumbnailHeight: 230,
    caption: "Amazing toilet",
    tags: [{ value: "Bathroom" }],
  },
  {
    src: hotel8,
    thumbnail: hotel8,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Time to relax",
    tags: [{ value: "Relax/Sunbathe " }],
  },
  {
    src: hotel9,
    thumbnail: hotel9,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Front Façade of the Hotel",
    tags: [{ value: "Façade " }],
  },
];
