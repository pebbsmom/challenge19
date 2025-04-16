import { defineConfig } from 'cypress'
// import viteConfigCustom from './vite.config'


export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      // viteConfig: viteConfigCustom,
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
  e2e: {
    baseUrl: 'http://localhost:3001',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false
  },
   
});
