<template>
  <div class="pricing-plan">
    <h2 class="pricing-header">{{ event.NAME }}</h2>
    <ul class="pricing-features">
      <li class="pricing-features-item">
        Sum Insured :{{ event.SUM_INSURED }}
      </li>
      <li class="pricing-features-item">
        Normal room rent limit:{{ event.NORMAL_ROOM_RENT_LIMIT }}
      </li>
      <li class="pricing-features-item">
        Covid Hospitalization:{{ event.COVID19_HOSPITALISATION }}
      </li>
      <li class="pricing-features-item">
        Emergency Ambulance Charges:{{ event.EMERGENCY_AMBULANCE_CHARGES }}
      </li>
      <li class="pricing-features-item">
        Maternity Benefits:{{ event.MATERNITY_BENEFITS_LIMITS_AND_COVERAGES }}
      </li>
      <li class="pricing-features-item">
        Pre Existing Benefits:{{ event.PRE_EXISTING_DISEASE }}
      </li>
      <li class="pricing-features-item">
        Day Care :{{ event.DAY_CARE_PROCEDURES }}
      </li>
      <li class="pricing-features-item">
        Lasik Treatment:{{ event.LASIK_TREATMENT }}
      </li>
      <li class="pricing-features-item">
        Dental Treatment:{{ event.DENTAL_TREATMENT }}
      </li>
      <li class="pricing-features-item">
        Cashless Claims:{{ event.CASHLESS_CLAIMS }}
      </li>
      <li class="pricing-features-item">Quote:{{ event.Quote }}</li>
    </ul>
    <span class="pricing-price"
      >Total(With GST):{{ event.Quote_Including_GST }}</span
    >
    <a href="#/" class="pricing-button">Sign up</a>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "FinalList",
  props: ["event"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
