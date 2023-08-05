const BASE_URL = '/api';
const TEAM_REGISTER_URL = BASE_URL + '/team';

export const API_URLS = {
  BASE_URL: BASE_URL,
  ABOUT: BASE_URL + '/about',
  TIMELINE: BASE_URL + '/timeline',
  PICTURE_UPLOAD: BASE_URL + '/picture',
  COUNTDOWN: BASE_URL + '/countdown',
  REGISTRATION: {
    TEAM_REGISTER: TEAM_REGISTER_URL,
    UNIQUE_NAME_CHECK: TEAM_REGISTER_URL + '/name/unique'
  },
};
