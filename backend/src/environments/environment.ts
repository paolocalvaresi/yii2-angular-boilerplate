// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiHost: '//localhost/api/v1',
  tokenName: 'backend-token',
  customDateTimeFormat: {
    apiFormat: 'YYYY-MM-DD HH:mm:ss',
    parseInput: 'YYYY-MM-DD HH:mm',
    fullPickerInput: 'YYYY-MM-DD HH:mm',
    datePickerInput: 'YYYY-MM-DD',
    timePickerInput: 'HH:mm:ss',
    monthYearLabel: 'YYYY-MM',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'YYYY-MM',
  }
};

