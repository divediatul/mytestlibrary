const CATEGORY_TYPES = {
  auto: 'auto',
  business: 'business',
  education: 'education',
  election: 'election',
  entertainment: 'entertainment',
  entertainmentnew2: 'entertainmentnew2',
  health: 'health',
  india: 'india',
  lifestyle: 'lifestyle',
  home: 'livetv',
  'live-tv': 'livetv',
  olympics: 'olympics',
  recipesinhindi: 'recipesinhindi',
  sports: 'sports',
  videos: 'videos',
  world: 'world',
  auto: 'auto',
  budget: 'budget',
  buzz: 'buzz',
  mirrornow: 'mirrornow',
  techngadget: 'techngadget',
  cryptonow: 'cryptonow',
  reels: 'Short Video',
}
function getAdType(){
  let stringValue =
	  typeof window != 'undefined' && window?.location?.pathname != '/'
		? window?.location?.pathname
		: '/home';
	const stringToLookup = stringValue
	  ?.split('/')
	  .splice(1)[0] // remove the first empty space
	  .toLowerCase();
	const matchedArray = Object.fromEntries(
	  Object.entries(CATEGORY_TYPES).filter(
		([key, value]) => key === stringToLookup,
	  ),
	);
	return Object.values(matchedArray).length > 0
	  ? Object.values(matchedArray)[0]
	  : 'ROS';
}

function getDefaultConfig(
  isPlay = 'true',
  datasrc,
  id = '',
  isMobile,
  queryParams,
  isAutoPlay = false,
) {
  return {
    apiKey: isMobile
      ? 'tgbsl486mweb5ab3ukk6ko'
      : 'tgbsl486web5ab8uukl9o',
    contEl: 'masterVideoPlayer' + id,
    // env: 'stg',
    debug: false,
    // version: '3.5.9',
    // version: '3.6.1',
    GDPR_MODE: false,
    colombiaCookieId: false,
    gaId: '',
    comscoreId: '',
    video: {
      id: id,
      url: '',
      playerType: '',
      image: datasrc,
      title: '',
      shareUrl: '',
      startTime: '',
      endTime: '',
      preRollUrl:
        'https://pubads.g.doubleclick.net/gampad/ads?iu=/21806551354/TN_English/Desktop/video/tn_engl_dskt_vid_lvtv_timesnow_preroll&description_url=https%3A%2F%2Fwww.timesnownews.com&tfcd=0&npa=0&sz=400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator=[placeholder]&vpmute=0&vpa=0&vad_type=linear&vpos=preroll',
    },
    player: {
      autoPlay: isAutoPlay,
      fallbackMute: false,
      mute: isAutoPlay ? true : false,
      skipAd: false,
      adSection: getAdType(),
      playlistUrl: '',
      playlist: true,
      playlistId: '',
      volume: 70,
      isAMP: true,
      adInterval: 30000,
      preRollAdBreak: [0, 300],
      //midRollAdBreak: [120, 240],
      gestureControls: false,
      playInBackground: true,
      bodyClickPlayToggle: false,
      scrollBehaviour: {
        inViewPercent: 60,
        dock: true,
      },
      midOverlayState: 0,
      custom_params: {
        demo: queryParams,
      },
    },
  };
}

const loadAdScript = () => {
  let id = 'slikeadscript';
  let s;
  if (document.getElementById(id) === null) {
    s = document.createElement('script');
    let el = document.getElementsByTagName('script')[0];
    s.async = true;
    s.src =
      (document.location.protocol == 'https:' ? 'https://' : 'http://') +
      'imasdk.googleapis.com/js/sdkloader/ima3.js';
    s.id = id;
    el.parentNode.insertBefore(s, el);
  }
  return s;
};

export { getDefaultConfig, loadAdScript };
