const BASE_URL = '/api';
const TEAM_REGISTER_URL = BASE_URL + '/team';
const BASIC_OPS = TEAM_REGISTER_URL + '/basic';

export const API_URLS = {
  BASE_URL: BASE_URL,
  ABOUT: BASE_URL + '/about',
  TIMELINE: BASE_URL + '/timeline',
  PICTURE_UPLOAD: BASE_URL + '/picture',
  COUNTDOWN: BASE_URL + '/countdown',
  CONTACT_US: BASE_URL + '/contact-us',
  ARCHIVE: BASE_URL + '/archive',
  TERMS: BASE_URL + '/terms',
  MAIL_SCHEDULE: BASE_URL + '/mail',
  REGISTRATION: {
    TEAM_REGISTER: TEAM_REGISTER_URL,
    UNIQUE_NAME_CHECK: TEAM_REGISTER_URL + '/name/unique',
    BASIC_OPERATIONS: {
      BY_NAME: BASIC_OPS + '/name',
      BY_ID: BASIC_OPS + '/id'
    }
  },
};
