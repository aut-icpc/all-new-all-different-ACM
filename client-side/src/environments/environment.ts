// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  recaptcha: {
    siteKey: '6LdH6RUmAAAAAJaeA8ls1HWNvddU8LATsobWFR0B',
  },
  registration: {
    educationLevels: ['Undergraduate(BSc.)', 'Graduate(MSc.)'],
    shirtSizes: ['Small', 'Medium', 'Large', 'XL', 'XXL', 'XXXL'],
    genders: ['male', 'female']
  },
  inputValidators: {
    phoneMinLength: 10,
    phonePattern: '\\+?\\d{10,15}',
    institutionNameMinLength: 10,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
