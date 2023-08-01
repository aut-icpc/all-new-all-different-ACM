export class ApiUrls {
  static readonly BASE_URL = '/api';
  static readonly ABOUT = ApiUrls.BASE_URL + '/about';
  static readonly TIMELINE = ApiUrls.BASE_URL + '/timeline';
  static readonly PICTURE_UPLOAD = ApiUrls.BASE_URL + '/picture';
  static readonly TEAM_REGISTER = ApiUrls.BASE_URL + '/team';
  static readonly TEAM_NAME_CHECKING = ApiUrls.TEAM_REGISTER + '/name/unique';
}
