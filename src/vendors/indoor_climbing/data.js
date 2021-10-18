import tour1 from "./tour1.jpg";
import tour2 from "./tour2.jpg";
import tour4 from "./tour4.jpg";
import tour5 from "./tour5.jpg";




export const climbat = {
  title: "",
  cat: "single",
  type: "Activities",
  unitcost: 14000,
  pax: 1,
  date: "8 Feb - Group Activity",
  explanation: ""
};

export const climbat_data = {
  variant: "h6",
  paras: [
 
       `During this activity, the guests will be confronted with different challenges as climbing a 12m high wall or rappel 10m down`,
  
   ` <strong>Details</strong>`,
    `  <ul>
    <li>Duration: 2h</li>
    <li>Timing: 15.00h Departure from the hotel  // 15.30h to 17.30h Activity </li>
    <li>Minimum: 10 pax</li>
    <li>Maximum: 40 pax</li>
    <li><strong>Rates per person:42€ VAT inc </strong></li>
    </ul>`,
    ` <em>The transportation from the Hotel to the Activity venue is not included</em>`,
    ` <em>If they were 30 pax or less the activity will have a duration of 1h30minutes</em>`,
 
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
      original: tour4,
      thumbnail: tour4,
      description: "",
    },
    {
      original: tour5,
      thumbnail: tour5,
      description: "",
    },
  ],
};
