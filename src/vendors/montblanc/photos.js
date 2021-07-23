import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jpg";
import hotel3 from "./hotel3.jpg";
import hotel4 from "./hotel4.jpg";
import hotel5 from "./hotel5.jpg";
import hotel6 from "./hotel6.jpg";
import hotel7 from "./hotel7.jpg";
import hotel8 from "./hotel8.jpg";
import hotel9 from "./hotel9.jpg";

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
