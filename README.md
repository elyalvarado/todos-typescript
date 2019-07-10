# Redux & TypeScript Workshop

![](https://secure.meetupstatic.com/photos/event/4/b/8/2/highres_482839330.jpeg)

## Workshop mechanics

The idea of the workshop is to convert all of this project to use TypeScript. There are branches with the intermediary solutions for the migration of different files. The suggested order (and the one reflected in the branches) is as follows:

### 1. Add TypeScript

Here we'll only add typescript support to the CRA project. In order to do that, we just need to install the following dependencies:

```
npm install -D typescript @types/node @types/react @types/react-dom @types/react-redux @types/jest
```

After running the command you should end up with something similar to branch [01-add-typescript](https://github.com/elyalvarado/todos-typescript/tree/01-add-typescript)

### 2. Migrate ducks

The suggested order for the ducks migration is:

1. `src/ducks/todos.js`
1. `src/ducks/todos.spec.js`
1. `src/ducks/visibilityFilter.js`
1. `src/ducks/visibilityFilter.spec.js`
1. `src/ducks/index.js`

After migrating the files you should end up with something very much like what is in branch [02-migrate-ducks](https://github.com/elyalvarado/todos-typescript/tree/02-migrate-ducks)

### 3. Migrate components

The suggested order for migrating the component files is:

1. `src/components/Footer.js`
1. `src/components/App.js`
1. `src/components/Link.js`
1. `src/components/Todo.js`
1. `src/components/TodoList.js`

After migrating the files you should end up with something very much like what is in branch [03-migrate-components](https://github.com/elyalvarado/todos-typescript/tree/03-migrate-components)

### 4. Migrate containers

The suggested order is:

1. `src/containers/AddTodo.js`
1. `src/containers/FilterLink.js`
1. `src/containers/VisibleTodoList.js`
1. `src/index.js`

After migrating the files you should end up with something very much like what is in branch [04-migrate-containers](https://github.com/elyalvarado/todos-typescript/tree/04-migrate-containers)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Original Repo

This project is based off the original Redux todo example app which can be found on the [redux](https://github.com/reduxjs/redux/tree/master/examples/todos) repository on GitHub. The only change was using a "ducks" folder to group action creators and reducers in single files by context.

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX. See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.
