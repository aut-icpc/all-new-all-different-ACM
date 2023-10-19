export const environment = {
  production: true,
  recaptcha: {
    siteKey: '6LdH6RUmAAAAAJaeA8ls1HWNvddU8LATsobWFR0B',
  },
  registration: {
    educationLevels: ['Undergraduate(BSc.)', 'Graduate(MSc.)'],
    shirtSizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    genders: ['male', 'female']
  },
  inputValidators: {
    phoneMinLength: 10,
    phonePattern: '\\+?\\d{10,15}',
    institutionNameMinLength: 10,
  }
};
