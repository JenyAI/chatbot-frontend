// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  apiai: {
    queryUrl: 'https://api.api.ai/v1/query',
    v: '20170712',
    key: '3ad65bf690c04e8f9ae5625d423db0fd',
  },
  production: false
};
