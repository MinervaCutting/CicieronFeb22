import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import parse from "html-react-parser";
import Paragraph from "../../utils/Paragraph";
import ArrowRightAltTwoToneIcon from "@material-ui/icons/ArrowRightAltTwoTone";
import infographic from "../../assets/infographic.jpeg";

const textLeft = {
  variant: "h6",
  paras: [
    ` <strong> Cutting Edge Events</strong> offers a fresh approach to the world of [Meetings & Events]. As the name of the company suggests, we are on top of the latest technologies, and apply them every day to stay on top of the game.`,

    `We at <strong>Cutting Edge Events</strong> are very proud of our progress, from a two man operation back in 2008, to the award winning agency that we are today.`,

    `Here’s a brief list of our main Unique Selling Points and typical workflow, which combines with a honest passion for the industry.`,
  ],
};

const listItems = [
  `When you send us a <strong>RFP</strong>, rather than a 26-page <strong>pdf</strong> and an <strong>excel sheet budget</strong>, you get a <strong>private website link</strong> containing all the information you need, in a beautiful structured layout including maps, and program overviews.`,

  `As a special service, we offer to build the very same <strong>website</strong> using your logo, so that you can directly send the link to your client. If you send us the text in your language, we can place it in the <strong>website</strong> - <em>t&c apply</em>`,

  `If the program is confirmed, we will assign your project to an experienced project manager that will be your main point of contact. All the documents, contracts, financials, and communications leading up to the Event will be added to the original <strong>website</strong> , so that you - the client - get easy access to the information at all times.
  `,

  `We will share working documents in the cloud, like the day-by-day and transfer lists, so that rather than exchanging thousands of emails, you will be able to edit just one document. <strong>It just works!</strong>`,

  `All our hard and honest work during the past 10 years is paying off, and we currently enjoy a vast network of vendors within the industry across all our destinations - namely <strong>Spain and Portugal</strong> Thanks to this network, we are able to offer a wide range of <strong>MICE products</strong> and mind-blowing activities.`,

  ` All in all, we encourage you to try us - and experience an Agency that works like no other in the industry !
  `,
];

const textRight = {
  variant: "h6",
  paras: [
    ` You can find plenty of references within our Curriculum, but here’s what some of our latest clients had to say about our work - (<em>all groups had above 70pax attendance</em>):`,
  ],
};

const recommendations = {
  variant: "h6",
  paras: [
    ` <em>
    Just a short note that I got some feedback from our client this morning. They were really pleased with all our arrangements. Good hotels, very good restaurants and very good organised all in all. They are really happy and want to book next year’s trip soon . Thank you both for excellent cooperation, it is a pleasure working with you, as always! - Frowald Strallhofer, <strong>A Company</strong>, - February, 2019
    </em>`,

    ` <em>
    Once again, THANK YOU for your great contribution to the success of last week event in Sitges! We have received so much praise and acknowledgement for the flawless execution of the event and of course for the hotel, meeting facilities and restaurants. We couldn?t have done it without your experience and deep knowledge. You really did a great job! -Anne Orthmann,  <strong>Oticon</strong>, - May, 2018
    </em>`,

    `<em>
    As a partner at Better Travel & Events , I have had the pleasure of collaborating with Cutting Edge Events on several occasions. On each event, I have experienced a very high level of professionalism, personal service, flexibility, and good understanding of our needs and briefing, for different clients and nationalities. It is always a great pleasure to work with Cutting Edge Events and a solid partnership - Mette Ingsgrup, <strong>Better travel</strong>, - March, 2019
    </em>`,
  ],
};

const Credentials = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textColumns}>
        <div className={classes.left}>
          <Paragraph variant={textLeft.variant} paras={textLeft.paras} />
          <List>
            {listItems.map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <ArrowRightAltTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  primary={parse(item)}
                  className={classes.item_text}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.right}>
          <Paragraph variant={textRight.variant} paras={textRight.paras} />
          {recommendations.paras.map((recommendation, i) => (
            <div className={classes.recommendation} key={i}>
              {parse(recommendation)}
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={infographic} alt='infographic' />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textColumns: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  left: {
    padding: theme.spacing(4),
    flex: 0.5,
  },
  right: {
    padding: theme.spacing(4),
    flex: 0.5,
  },
  recommendation: {
    border: "1px solid #ea5933",
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    fontSize: 22,
  },
}));

export default Credentials;
