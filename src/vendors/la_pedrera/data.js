import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jpg";
import hotel3 from "./hotel3.jpg";
import hotel4 from "./hotel4.jpg";
import hotel5 from "./hotel5.jpg";
import hotel6 from "./hotel6.jpg";
import hotel7 from "./hotel7.jpg";
import hotel8 from "./hotel8.jpg";
import hotel9 from "./hotel9.jpg";

export const bcnlapedrera = {
  id: "hotelbcn_catalonia_lapedrera",
  title: "Hotel Catalonia La Pedrera",
  cat: "hospitality",
  type: "Hospitality",
  rooms: [
    {
      title: "Doble room for ind Use, incl breakfast",
      units: 2,
      occupancy: 1,
      nights: 3,
      unitcost: 125,
    },
    {
      title: "Double room for twin use, incl breakfast",
      units: 7,
      occupancy: 2,
      nights: 3,
      unitcost: 145,
    },
    {
      cat: "citytax",
      title: "city tax, per night per person, incl VAT",
      unitcost: 2.04,
    },
  ],
};

export const lapedrera_data = {
  variant: "h6",
  title: "Hotel La Pedrera",
  stars: 4,
  category: "",
  paras: [
    `    The <strong>Hotel La Pedrera</strong> occupies a prime location on the
    modernist route, close to <strong>Sagrada Familia</strong> and the
    famous <em>Passeig de Gràcia</em>`,

    `<strong>La Pedrera</strong> is a small/medium sized hotel, with 79
    rooms -broken down into double rooms, premium, superior, superior with
    terrace and junior suites.`,

    ` Other facilities include Free-wifi, a Bar a snack Bar, a Swiming Pool
    and a restaurant`,
  ],
  leftIconsText: [
    "Close to Sagrada Familia",
    "1 x Restaurant, 2 x bars",
    "79 rooms",
    "High Speed, available",
  ],
  rightIconsText: [
    "1x outdoor, 1x Spa center",
    "checkin/out 3pm / 12pm",
    "1 x meeting room for 60pax",
    "Wheelchair accessible",
  ],
  photos: [
    {
      src: hotel1,
      thumbnail: hotel1,
      thumbnailWidth: 271,
      thumbnailHeight: 180,
      tags: [{ value: "Hotel Façade" }],
      caption: "Hotel Façade",
    },
    {
      src: hotel2,
      thumbnail: hotel2,
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      tags: [
        { value: "Common areas" },
        /*   { value: "Industrial", title: "Industrial" }, */
      ],
      caption: "Common areas",
    },
    {
      src: hotel3,
      thumbnail: hotel3,
      thumbnailWidth: 320,
      thumbnailHeight: 230,
      tags: [
        { value: "Double or Twin Room" },
        /*  { value: "Architecture" },
        { value: "Industrial" }, */
      ],
      caption: "Double or Twin Room",
    },
    {
      src: hotel4,
      thumbnail: hotel4,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      tags: [
        { value: "Room Terrace" },
        /*   { value: "Industrial" }, */
      ],
      caption: "Some rooms include terrace",
    },
    {
      src: hotel5,
      thumbnail: hotel5,
      thumbnailWidth: 248,
      thumbnailHeight: 180,
      caption: "Outdoor Pool",
      tags: [{ value: "Outdoor Pool" }],
    },
    {
      src: hotel6,
      thumbnail: hotel6,
      thumbnailWidth: 320,
      thumbnailHeight: 220,
      tags: [{ value: "Lobby" }],
      caption: "Lobby- Public areas",
    },
    {
      src: hotel7,
      thumbnail: hotel7,
      thumbnailWidth: 313,
      thumbnailHeight: 280,
      caption: "Breakfast room",
      tags: [{ value: "Breakfast room" }],
    },
    {
      src: hotel8,
      thumbnail: hotel8,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Front Desk",
      tags: [{ value: "Front Desk" }],
    },
    {
      src: hotel9,
      thumbnail: hotel9,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Bar",
      tags: [{ value: "Snack Bar" }],
    },
  ],
};
