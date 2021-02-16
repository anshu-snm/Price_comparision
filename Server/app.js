const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const Event = require("./models/event");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(
      `
        type Event {
            _id: ID!
            NAME:String
            SUM_INSURED:String
            NORMAL_ROOM_RENT_LIMIT:String
            ICU_RENT_LIMIT:String
            COPAY_CLAUSE:String
            COVID19_HOSPITALISATION:String
            EMERGENCY_AMBULANCE_CHARGES:String
            CAPPING_ON_AILMENTS:String
            PRE_AND_POST_HOSPITALIZATION_COVERAGE:String
            MATERNITY_BENEFITS_LIMITS_AND_COVERAGES:String
            NEW_BORN_BABY_COVERAGE_FROM_DAY_1:String
            _9_MONTHS_WAITING_PERIOD_FOR_MATERNITY:String
            PRE_AND_POST_NATAL_COVERAGE:String
            AGE_BRACKET:String
            _1ST_2ND_AND_4TH_YEAR_EXCLUSION_CLAUSE:String
            _1ST_30_DAYS_EXCLUSION_CLAUSE:String
            PRE_EXISTING_DISEASE:String
            DOMICILIARY_HOSPITALIZATION_COVER:String
            CONGENITAL_DISEASE:String
            CORPORATE_BUFFER:String
            DAY_CARE_PROCEDURES:String
            CLAIMS_INTIMATION:String
            RE_IMBURSEMENT_CLAIMS_REPORTING_SUBMITTING_PERIOD:String
            ORGAN_DONAR_EXPENSES:String
            HOSPITALIZATION_INJURY_ARISING_OUT_TERRORISM:String
            PREMIUM_CALCULATION:String
            THIRD_PARTY_ADMINISTRATOR_TPA:String
            LASIK_TREATMENT:String
            DENTAL_TREATMENT:String
            SPECIFIC_TREATMENTS:String
            CASHLESS_CLAIMS:String
            Quote:String
            GST:String
            Quote_Including_GST:String
        }

        
        type RootQuery{
            events:[Event]
        }   
        
       
        schema{
            query:RootQuery
            
        }`
    ),
    rootValue: {
        events: () => {
            return Event.find()
              .then(events => {
                  console.log("found1",events);
                return events.map(event => {
                  return { ...event._doc, _id: event.id };
                });
              })
              .catch(err => {
                throw err;
              });
          },
    },
    graphiql: true,
  })
);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.sv4cc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
