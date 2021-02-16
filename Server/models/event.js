const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    NAME:String,
    SUM_INSURED:String,
    NORMAL_ROOM_RENT_LIMIT:String,
    ICU_RENT_LIMIT:String,
    COPAY_CLAUSE:String,
    COVID19_HOSPITALISATION:String,
    EMERGENCY_AMBULANCE_CHARGES:String,
    CAPPING_ON_AILMENTS:String,
    PRE_AND_POST_HOSPITALIZATION_COVERAGE:String,
    MATERNITY_BENEFITS_LIMITS_AND_COVERAGES:String,
    NEW_BORN_BABY_COVERAGE_FROM_DAY_1:String,
    _9_MONTHS_WAITING_PERIOD_FOR_MATERNITY:String,
    PRE_AND_POST_NATAL_COVERAGE:String,
    AGE_BRACKET:String,
    _1ST_2ND_AND_4TH_YEAR_EXCLUSION_CLAUSE:String,
    _1ST_30_DAYS_EXCLUSION_CLAUSE:String,
    PRE_EXISTING_DISEASE:String,
    DOMICILIARY_HOSPITALIZATION_COVER:String,
    CONGENITAL_DISEASE:String,
    CORPORATE_BUFFER:String,
    DAY_CARE_PROCEDURES:String,
    CLAIMS_INTIMATION:String,
    RE_IMBURSEMENT_CLAIMS_REPORTING_SUBMITTING_PERIOD:String,
    ORGAN_DONAR_EXPENSES:String,
    HOSPITALIZATION_INJURY_ARISING_OUT_TERRORISM:String,
    PREMIUM_CALCULATION:String,
    THIRD_PARTY_ADMINISTRATOR_TPA:String,
    LASIK_TREATMENT:String,
    DENTAL_TREATMENT:String,
    SPECIFIC_TREATMENTS:String,
    CASHLESS_CLAIMS:String,
    Quote:String,
    GST:String,
    Quote_Including_GST:String
        
});

module.exports = mongoose.model('Event',eventSchema);