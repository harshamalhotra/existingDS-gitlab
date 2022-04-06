import Vue from 'vue';
import VueGtag from 'vue-gtag';

const ONETRUST_ANALYTICS_CONSENT_GROUP = 'C0002';

const isAnalyticsConsented = () =>
  typeof window.OnetrustActiveGroups === 'string' &&
  window.OnetrustActiveGroups.split(',').includes(ONETRUST_ANALYTICS_CONSENT_GROUP);

let isAnalyticsEnabled = isAnalyticsConsented();

Vue.use(VueGtag, {
  config: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    params: {
      send_page_view: true,
    },
  },
  enabled: isAnalyticsEnabled,
});

// handle changes to cookie consent
window.gtagOneTrustCallback = () => {
  if (isAnalyticsConsented() !== isAnalyticsEnabled) {
    if (isAnalyticsEnabled) {
      Vue.$gtag.optOut();
      isAnalyticsEnabled = false;
    } else {
      Vue.$gtag.optIn();
      isAnalyticsEnabled = true;
    }
  }
};
