# Shopping Website (ikea) Sample automation with Cypress

## Prerequisite
* Install latest node 

## To run the automation, execute below commands

* npm ci
* npx cypress open

(and follow the cypress UI)

## To run the automation in a headless browser, with report

* npm ci
* npx cypress run --reporter junit -reporter-options "mochaFile=report.xml"

