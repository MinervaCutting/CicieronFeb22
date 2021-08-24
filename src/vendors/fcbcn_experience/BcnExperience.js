import ImageGallery from "react-image-gallery";
import { useStyles } from "../vendorStyles/styles";
import { images, text } from "./data";
import Paragraph from "../../utils/Paragraph";

export default function BcnExperience() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <Paragraph variant={text.variant} paras={text.paras} />
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}
