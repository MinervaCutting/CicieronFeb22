import tour1 from "./tour1.jpg";
import tour2 from "./tour2.jpg";
import tour3 from "./tour3.jpg";
import tour4 from "./tour4.jpg";

export const cooking_workshop = {
  title: "",
  cat: "single",
  type: "Activities",
  unitcost: 14000,
  pax: 1,
  date: "8 Feb - Group Activity",
  explanation: ""
};

export const cooking_workshop_data = {
  variant: "h6",
  paras: [
 
    `It can be organized in a colaborative way or as a contest. Due to the timing of the workshop we recommend to cook tapas so guest can enjoy them after the workshop`,
    `Workshop organized in a private venue located in the city center`,
  
   ` <strong>Details</strong>`,
    `  <ul>
    <li>Duration: 3h</li>
    <li>Timing: 15.00h Departure from the hotel  // 15.30h to 18.30h Activity </li>
    <li>Minimum: 10 pax</li>
    <li>Maximum: 60 pax</li>
    <li><strong> Rates per person:78€ VAT inc </strong></li>
  `,
    ` <em>The transportation from the Hotel to the Activity venue is not included</em>`, 
  ],
  images: [
    {
      original: tour1,
      thumbnail: tour1,
      description: "",
    },
    {
      original: tour2,
      thumbnail: tour2,
      description: "",
    },
    {
      original: tour3,
      thumbnail: tour3,
      description: "",
    },
    {
      original: tour4,
      thumbnail: tour4,
      description: "",
    },

  ],
};
