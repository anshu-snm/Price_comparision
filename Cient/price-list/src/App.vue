<template>
  <div class="background">
    <div class="container">
      <div class="panel pricing-table">
        <FinalList v-for="event in events" :key="event.NAME" :event="event" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FinalList from "./components/FinalList.vue";

export default {
  name: "App",
  components: {
    FinalList,
  },
  data() {
    return {
      events: [],
    };
  },
  async mounted() {
    try {
      var result = await axios({
        method: "POST",
        url: "http://localhost:3000/graphql",
        data: {
          query: `
          {
            events{
              NAME
              SUM_INSURED
              NORMAL_ROOM_RENT_LIMIT
              ICU_RENT_LIMIT
              COPAY_CLAUSE
              COVID19_HOSPITALISATION
              EMERGENCY_AMBULANCE_CHARGES
              CAPPING_ON_AILMENTS
              PRE_AND_POST_HOSPITALIZATION_COVERAGE
              MATERNITY_BENEFITS_LIMITS_AND_COVERAGES
              NEW_BORN_BABY_COVERAGE_FROM_DAY_1
              _9_MONTHS_WAITING_PERIOD_FOR_MATERNITY
              PRE_AND_POST_NATAL_COVERAGE
              AGE_BRACKET
              _1ST_2ND_AND_4TH_YEAR_EXCLUSION_CLAUSE
              _1ST_30_DAYS_EXCLUSION_CLAUSE
              PRE_EXISTING_DISEASE
              DOMICILIARY_HOSPITALIZATION_COVER
              CONGENITAL_DISEASE
              CORPORATE_BUFFER
              DAY_CARE_PROCEDURES
              CLAIMS_INTIMATION
              RE_IMBURSEMENT_CLAIMS_REPORTING_SUBMITTING_PERIOD
              ORGAN_DONAR_EXPENSES
              HOSPITALIZATION_INJURY_ARISING_OUT_TERRORISM
              PREMIUM_CALCULATION
              THIRD_PARTY_ADMINISTRATOR_TPA
              LASIK_TREATMENT
              DENTAL_TREATMENT
              SPECIFIC_TREATMENTS
              CASHLESS_CLAIMS
              Quote
              GST
              Quote_Including_GST
            }
              }
              `,
        },
      });
      this.events = result.data.data.events;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

html {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.background {
  padding: 0 25px 25px;
  position: relative;
  width: 100%;
}

.background::after {
  content: "";
  background: #60a9ff;
  background: -moz-linear-gradient(top, #60a9ff 0%, #4394f4 100%);
  background: -webkit-linear-gradient(top, #60a9ff 0%, #4394f4 100%);
  background: linear-gradient(to bottom, #60a9ff 0%, #4394f4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60a9ff', endColorstr='#4394f4',GradientType=0 );
  height: 350px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

@media (min-width: 900px) {
  .background {
    padding: 0 0 25px;
  }
}

.container {
  margin: 0 auto;
  padding: 50px 0 0;
  max-width: 960px;
  width: 100%;
}

.panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08),
    0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  .pricing-table {
    flex-direction: row;
  }
}

.pricing-table * {
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 100%;
}

.pricing-header {
  color: #888;
  font-weight: 600;
  letter-spacing: 1px;
}

.pricing-features {
  color: #016ff9;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
}

.pricing-features-item {
  border-top: 1px solid #e1f1ff;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #016ff9;
  display: block;
  font-size: 32px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348efe;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #e1f1ff;
}

.pricing-button.is-featured {
  background-color: #48aaff;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #269aff;
}
</style>
