import tour1 from "./tour1.jpg";
import tour2 from "./tour2.jpg";
import tour3 from "./tour3.jpg";
import tour4 from "./tour4.jpg";
import tour5 from "./tour5.jpg";
import tour6 from "./tour6.jpg";

export const walkingtour = {
  title: "Half Day Walking Tour city center",
  cat: "multiple",
  type: "Activities",
  unitcost: 20,
  pax: 16,
  date: "Before lunch",
};

export const walkingtour_data = {
  variant: "h6",
  paras: [
    `   Since the program has included extensive visits to the
    <strong>Gothic District</strong>, -the old Town of Barcelona, the beach
    area, and the district where the Stadium is located, we will now visit
    the <strong>Eixample</strong>, so-called the
    <strong>Art-Nouveau</strong> district, to complete our in-depth visit to
    Barcelona.`,

    `  We will start walking down <em>Passeig de Gràcia</em>, and along the way
    - we will see some art-nouveau masterpieces by <em>Antoni Gaudí</em> or
    <em>Puig i Cadafalch</em>,among them <em>La Pedrera</em>,
    <em>Casa Fuster</em> or <em>Casa Batlló.</em>`,

    `  We can later take the subway, and take a look at the famous{" "}
    <em>Sagrada Familia</em>, and <em>Hospital de Sant Pau</em> , to
    complete the visit.`,

    ` <strong>CUTT/events</strong> work with some of the most fun and
    entertining local guides in Barcelona - which we have worked with for
    many years. A local guide will be necessary for the tour, since a local
    licensed guide is required by law in all tours - unfortunately the Local
    mayor gives tickets to groups that they find are guided by unlicensed
    guides.`,

    `The tour will include the cost of a local guide, headphones, and a
    return metro ticket to <strong>Sagrada Familia</strong>, and it will
    take around 3hours. it does not include any entrance tickets though,
    since going inside, for instance,
    <strong>La Sagrada Familia</strong>, would add another 90 minutes to the
    tour, minimum.
    `,
  ],
  images: [
    {
      original: tour1,
      thumbnail: tour1,
      description: "Passeig de Gràcia - The golden mile of Barcelona",
    },
    {
      original: tour2,
      thumbnail: tour2,
      description: "Lateral view of Casa Batlló",
    },
    {
      original: tour3,
      thumbnail: tour3,
      description: "La Pedrera is another masterpiece by Antoni Gaudí",
    },
    {
      original: tour4,
      thumbnail: tour4,
      description: "Casa Batlló by night",
    },
    {
      original: tour5,
      thumbnail: tour5,
      description: "The Sagrada Familia",
    },
    {
      original: tour6,
      thumbnail: tour6,
      description: "Hospital de Sant Pau",
    },
  ],
};
