import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'your_project_id', // Replace after running 'npx sanity init'
    dataset: 'production'
  }
});
