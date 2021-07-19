# Feedback Loop

## Description

_Duration: 2 days_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

Created a feedback form that loops through different pages such as how well are you understanding, how are you feeling, and additional comments. This feedback application was mainly created using redux-react to get a better understanding on how to use the 2 libraries together. 
### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- react.js
- Redux-react
- pg/pool
- postgres
## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `prime-feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Once all the 'npm' commands are all finished, you should see the first page of 'feelings'. Rate how you feel from 1-5 and click next.
2. The next button should take you to the 'understanding' route/page. Rate how well you understand content and click next.
3. You should be on the 'support' route/page. Here you rate from 1-5, how well you feel supported and click next.
4. You should be on the 'comments' route/page. Here you can write any additional comments or concerns. Then, click next.
5. After inputting the fields from the pages before, you should see a page stating 'Review your Feedback". Look over your answers and click the 'Submit Feedback' button! Once you click on the button, all the information you entered will be posted to your database and the redux states will be cleared. 
6. After submitting your feedback, you will reach a 'Thank you page', confirming your submission. Optionally, there is a 'leave another feedback' button which redirects you back to the start at "feelings".


## Built With

1. React
2. Redux
3. SQL
4. Javascript
## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [kserenitym@gmail.com](www.google.com)
