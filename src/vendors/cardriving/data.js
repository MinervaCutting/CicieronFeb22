import tour1 from "./tour1.jpg";
import tour2 from "./tour2.jpg";
import tour3 from "./tour3.jpg";
import tour4 from "./tour4.jpg";

export const cardriving = {
  title: "",
  cat: "single",
  type: "Activities",
  unitcost: 14000,
  pax: 1,
  date: "8 Feb - Group Activity",
  explanation: ""
};

export const cardriving_data = {
  variant: "h6",
  paras: [
 
    `2 laps of the circuit driving a Ferrari or Lamborghini `,
    `This activity can be organised at the Catalunya F1 circuit, but they are doing some renovations that are expected to be finished on the 7th of February. `,
    `The Circuit is not committed to provide availability on February 9th, although it will probably be ready for our activity. `,
    `That's why we recommend to organise this activity at the Circuit de Castelloli or, at least, to book this circuit as well in case the works are not finished on the expected date.`,
  
   ` <strong>Details - Option 1h</strong>`,
    `  <ul>
    <li>Duration: 1h</li>
    <li>Timing: 15.00h Departure from the hotel  // 16.00h to 17.00h Activity </li>
    <li>Minimum: 60 pax</li>
    <li>Maximum: 60 pax</li>
    <li><strong>Castellolí Rates per one hour:20500€ VAT inc </strong></li>
    <li><strong>Circuit de Catalunya Rates per one hour:24000€ VAT inc </strong></li>
    </ul>`,
    ` <em>The transportation from the Hotel to the Activity venue is not included</em>`,

    ` <strong>Details - Option 2h - Only in CastellOlí</strong>`,
    `  <ul>
    <li>Duration: 2h</li>
    <li>Timing: 15.00h Departure from the hotel  // 16.00h to 18.00h Activity </li>
    <li>Minimum: 61 pax</li>
    <li>Maximum: 120 pax</li>
    <li><strong>Rates per one hour:31600€ VAT inc</strong></li>
    </ul>`,
    ` <em>The transportation from the Hotel to the Activity venue is not included</em>`,
  
  
 
  ],
  images: [
    {
      original: tour1,
      thumbnail: tour1,
      description: "Castellolí Circuit",
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
