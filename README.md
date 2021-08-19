# TODO assessment

## About

For this assessment, we will be creating a TODO list. The assessment is intended to be challenging for a junior level developer. We hope that you enjoy it and learn some new things along the way!

## Setup

We assume that [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) have been configured and installed on your machine. The project should be created with [Next.js](https://nextjs.org/) using the `Default starter app`. If you are not familiar with [Next.js](https://nextjs.org/), they provide an excellent [getting started tutorial](https://nextjs.org/learn/basics/create-nextjs-app).

```
npx create-next-app
```

## Requirements

### Functionality

- A user must be able to use the web app on desktop and mobile devices.
- A user should be able to use the web app with only a keyboard on a desktop.
  - Do not disable normal mouse functionality.
- A user should be able to see a list of all their TODOs.
  - The title and completed status should be shown for each TODO.
  - Display the total number of TODOS.
- A user must be able to create a TODO.
  - Creating a TODO must be done on the same page as the list of TODOs or on a new page.
  - There must be validation in place to prevent the creation of an empty TODO.
  - Clear the input after a TODO has been created.
  - After creating a TODO, it must be added to the list of TODOs.
- A user must be able to delete a TODO.
- A user must be able to complete a TODO.
  - Updating a TODO can be done on the same page as the list of TODOs or on a new page.
- A user must be able to update the title of a TODO.
  - Updating a TODO can be done on the same page as the list of TODOs or on a new page.

### Implementation

- Use [Local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to persist the list of TODOs.
- Use [nanoid](https://github.com/ai/nanoid) to generate an ID for a new TODO.
- Use [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) for layout.
- Every TODO should be an object with the following structure: `{id: String, title: String, completed: Boolean}`
- If you prefer to use a state management solution like [redux](https://redux.js.org/), you are welcome to do so.
- Use [Styled Components](https://styled-components.com/) or the [built in CSS support](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) provided by [Next.js](https://nextjs.org/) for styling.
- **Do not use** any UI library or framework e.g. [Bootstrap](https://getbootstrap.com/) or [Material UI](https://material-ui.com/). You are allowed to use single-purpose modules like [react-modal](https://github.com/reactjs/react-modal).
- Create seperate components for the different sections of the application e.g. The Create TODO form and the List of todos.
- Add a [npm script](https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/) to format your code using [Prettier](https://prettier.io/)

### Workflow

- You are expected to [fork this repository](https://gist.github.com/Chaser324/ce0505fbed06b947d962) to your own Github account and submit one or more pull requests to meet the requirements.
- Try and [commit early and often](https://sethrobertson.github.io/GitBestPractices/).
- If you have any questions regarding the assessment, please create an issue on the repository describing your problem. This way you can help other candidates that might face the same problem!

## Additional

Please note that you are not required to complete these additional tasks. If you have additional time available and would like to show us some more of your work, you are welcome to attempt these:

- Add a confirmation dialog for when a user chooses to delete a TODO.
- Deploy the project using [netlify](https://www.netlify.com/) or [vercel](https://vercel.com/).
- Add unit and integration tests to the project using [Jest](https://jestjs.io/) and [React testing library](https://testing-library.com/docs/react-testing-library/intro).
- Add end-to-end tests to the project using [Cypress](https://www.cypress.io/).
