import ImageGallery from "react-image-gallery";
import { useStyles } from "../vendorStyles/styles";
import { images } from "./photos";
import Paragraph from "../../utils/Paragraph";

const text = {
  variant: "h6",
  paras: [
    `   The <strong>FC Barcelona Experience</strong> includes entrance to the
    museum and a tour inside the largest Stadium in Europe - with a seating
    capacity of 99.354pax. No wonder, the museum is the most visited in
    Barcelona.`,

    ` The <em>museum</em> showcases a dedicated area to <em>Leo Messi</em>,
    the trophy cabinet- where the Club's most important trophies are kept,
    the interactive room, and the gift shop with all traded FCBarcelona
    products.`,

    ` Once inside, the group can enjoy a great panoramic of this magnificent
    stadium.`,

    `The whole tour takes between 2 and 3 hours, plus transportation time to
    the stadium, which is like 25mins from the city center on a non-match
    day.`,
  ],
};

export default function BcnExperience() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <Paragraph variant={text.variant} paras={text.paras} />
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}
