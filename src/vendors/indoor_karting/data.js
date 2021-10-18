import tour1 from "./tour1.jpg";
import tour2 from "./tour2.jpg";
import tour3 from "./tour3.jpg";
import tour4 from "./tour4.jpg";





export const karting = {
  title: "",
  cat: "single",
  type: "Activities",
  unitcost: 14000,
  pax: 1,
  date: "8 Feb - Group Activity",
  explanation: ""
};

export const karting_data = {
  variant: "h6",
  paras: [
 
    `The organization of the Grand Prix eill be:
       <ol>
       <li>Welcome</li>
       <li>Briefing</li>
       <li>Warm Up (one session each 15 pax) 5 minutes per session</li>
       <li>Qualifying sessions (one session each 15 pax) 7 minutes per session</li>
       <li>Finals (one session each 15 pax) 10 minutes per session</li>
       <li>Awards ceremony</li>
       </ol>`,
  
   ` <strong>Details</strong>`,
    `  <ul>
    <li>Duration: Depends on the number of participants*</li>
    <li>Timing: 15.30h Departure from the hotel  // 16.00h to 19.00h Activity </li>
    <li>Minimum: 15 pax</li>
    <li>Maximum: 60 pax</li>
    <li><strong>Rates per person:69€ VAT inc </strong></li>
    </ul>`,
    ` <em>The transportation from the Hotel to the Activity venue is not included</em>`,
    ` <em>*Durantion:  15 pax: 1h35m, from 16 to 30 pax: 2h. from 31 to 45 pax: 2h35min, from 46 to 60 pax: 3h</em>`,
  
 
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
