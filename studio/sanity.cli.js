import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'ef6bnpoo', // Replace after running 'npx sanity init'
    dataset: 'production'
  },
  deployment: {
    appId: 'eudt5g872q5t1mmgtrm1q3p0'
  }
});
