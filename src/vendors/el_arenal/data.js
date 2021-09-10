import img1 from "./rest1.jpg";
import img2 from "./rest2.jpg";
import img3 from "./rest3.jpg";
import img4 from "./rest4.jpg";
import img5 from "./rest5.jpg";
import img6 from "./rest6.jpg";
import menus from "./menus.pdf";

export const elarenal = {
  title: "Beach Restaurant El Arenal",
  cat: "single",
  type: "Meals",
  unitcost: 51,
  pax: 16,
  date: "Lunch",
  explanation:
    "3-course lunch, coffee, wine : 1 bottle x 3 pax, beer and soft drinks not incl",
};

export const elarenal_data = {
  variant: "h6",
  title: "Restaurant El Arenal",
  pdf: menus,
  paras: [
    ` <strong>El Arenal</strong> is one of the few restaurants in
    <em>Barcelona</em> that are located just by the beach - near
    <strong>Port Olímpic</strong> in la <strong>Barceloneta Beach</strong>
    . When we say, by the beach, we mean - almost at the
    <strong>sand</strong> - El Arenal meaning the
    <strong>sandy area</strong> in English.`,

    ` The restaurant can lay a couple of tables of 8, for a group of 16 in
    the terrace, al fresco, overlooking the Mediterranean, and dining in
    the sand.`,

    `Their food is varied, but this would be the perfect spot to enjoy a
    Paella by the beach. Their cuisine is strong in rices and paellas,
    fish and seafood dishes.`,

    ` The terrace can fit up to 40pax , and the total capacity of the
    restaurant is 100pax including the inner dining room.`,
  ],
  items: [
    {
      caption: "It's right on the beach of Barceloneta",
      photo: img1,
    },
    {
      caption: "Tables are laid out perpendicular to the Sea",
      photo: img2,
    },
    {
      caption: "The tented area can protect during mild bad weather",
      photo: img3,
    },
    {
      caption: "Next to all the trendy clubs",
      photo: img4,
    },
    {
      caption: "The restaurant is only a few steps away from the Port Olimpic",
      photo: img5,
    },
    {
      caption: "There is back up in case of bad weather",
      photo: img6,
    },
  ],
};
