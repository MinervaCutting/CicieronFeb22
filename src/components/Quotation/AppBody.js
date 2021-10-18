import { Paper, makeStyles, Typography, Button } from "@material-ui/core";
import VendorOptionsTab from "../../utils/TabPanel";
import Budget from "../Budget/Budget";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Footer from "../StickyFooter/Footer";
import RestaurantVendor from "../../utils/restaurant_vendors/RestaurantVendor";
import ActivityVendor from "../../utils/activity_vendors/ActivityVendor";
import { estadiolimpic_data } from "../../vendors/estadi_olimpic/data";
import { windsor_data } from "../../vendors/windsor/data";
import { lolive_data } from "../../vendors/lolive/data";
import { canfisher_data } from "../../vendors/can_fisher/data";
import { tragaluz_data } from "../../vendors/tragaluz/data";
import { barceloneta_data } from "../../vendors/barceloneta/data";
import { dostorres_data } from "../../vendors/dos_torres/data";
import { somni_data } from "../../vendors/somni/data";
import { mana_data } from "../../vendors/mana75/data";
import { albetinoya_data } from "../../vendors/albetinoya/data";
import { cocteling_data } from "../../vendors/cocteling/data";
import { padelclasses_data } from "../../vendors/padelclasses/data";
import { climbat_data } from "../../vendors/indoor_climbing/data";
import { karting_data } from "../../vendors/indoor_karting/data";


export default function AppBody() {
  const classes = useStyles();
  const budgetRef = useRef();
  const pageStyle = `
  @media all {
    .page-break {
      display: none;
    }
  }
  
  @media print {
    html, body {
      height: initial !important;
      overflow: auto !important;
      -webkit-print-color-adjust: exact;
    }
  }
  
  @media print {
    .page-break {
      margin-top: 1rem;
      display: block;
      page-break-before: auto;
    }
  }
  
  @page {
    size: landscape;
    margin: 20mm;
   
  }
`;



  return (
    <Paper elevation={2} className={classes.bodyContainer}>
      <Typography variant='h4' gutterBottom>
        Group 400 pax - Feb 2022
      </Typography>
      <Typography variant='h6' gutterBottom>
        <em>Cutting Edge Events - October 12th, 2021</em>
      </Typography>
     <Typography variant='h6' gutterBottom>
      In this presentation you will find the presentation of the <strong>Estadi Olimpic</strong> as a venue that we can rent to organize the activities on the 8th of February.
      </Typography>
      <Typography variant='h4' gutterBottom id='8feb'>
        <strong>Tuesday, February 8th</strong>
      </Typography>
      <Typography variant='h4' gutterBottom id='estadi'>
       Estadi Olimpic Lluis Companys
      </Typography>
      <ActivityVendor data={estadiolimpic_data} />
      <Typography variant='h4' gutterBottom id='dinner'>
        Restaurant Options
      </Typography>
      <Typography variant='h4' gutterBottom id='rest1'>
       Windsor
      </Typography>
      <RestaurantVendor data={windsor_data} />
      <Typography variant='h4' gutterBottom id='rest2'>
       L'Olivé
      </Typography>
      <RestaurantVendor data={lolive_data} />
      <Typography variant='h4' gutterBottom id='rest3'>
       Can Fisher
      </Typography>
      <RestaurantVendor data={canfisher_data} />
      <Typography variant='h4' gutterBottom id='rest4'>
       Tragaluz
      </Typography>
      <RestaurantVendor data={tragaluz_data} />
      <Typography variant='h4' gutterBottom id='rest5'>
       Barceloneta
      </Typography>
      <RestaurantVendor data={barceloneta_data} />
      <Typography variant='h4' gutterBottom id='rest6'>
       Somni
      </Typography>
      <RestaurantVendor data={somni_data} />
      <Typography variant='h4' gutterBottom id='rest7'>
       Dos Torres
      </Typography>
      <RestaurantVendor data={dostorres_data} />
      <Typography variant='h4' gutterBottom id='rest8'>
       Maná 75
      </Typography>
      <RestaurantVendor data={mana_data} />
      <Typography variant='h4' gutterBottom id='Activities'>
       <strong>Activity options -  Feb 9th</strong>
      </Typography>
      <Typography variant='h4' gutterBottom id='act2'>
       Albet i Noya - Mehari route + Winery visit and wine tasting
      </Typography>
      <ActivityVendor data={albetinoya_data} />
      <Typography variant='h4' gutterBottom id='act3'>
       Cocktail Workshop
      </Typography>
      <ActivityVendor data={cocteling_data} />
      <Typography variant='h4' gutterBottom id='act4'>
       Padel Activities
      </Typography>
      <ActivityVendor data={padelclasses_data} />
      <Typography variant='h4' gutterBottom id='act5'>
       Indoor Climbing Activity
      </Typography>
      <ActivityVendor data={climbat_data} />
      <Typography variant='h4' gutterBottom id='act6'>
       Indoor Karting - Grand Prix
      </Typography>
      <ActivityVendor data={karting_data} />
      

      <Typography variant='h4' gutterBottom id='map'>
      <a href="https://www.google.com/maps/d/edit?mid=1nqiV2-lhkUyQ1UGtdNMfUKsHD77DHLqN&usp=sharing" target ="_blank">🗺️ Overview Map</a>
      </Typography>
      <Typography variant='h4' gutterBottom>
        <strong>Budget</strong>
      </Typography>
      <Typography variant='h6' gutterBottom>
        * There is no water included in the transfers.
        * The menu rates are the basic ones, all the restaurants offer upper menus and they are flexible in case you would like to suggest any change
        * You can print this budget in pdf clicking the button below.
      </Typography>
      <div>
        <ReactToPrint
          trigger={() => (
            <Button variant='contained' color='secondary'>
              Print PDF
            </Button>
          )}
          content={() => budgetRef.current}
          pageStyle={pageStyle}
          documentTitle='Budget Printout'
        />
        <Budget ref={budgetRef} />
        <Footer />
      </div>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    width: "100%",
  },
}));
