## About

This is the calendar srv that handles all calendar-related calls.

## Setup

To start this project, open the .devcontainer.

## Database

We use dbmate to handle migration. To migrate, run the following command:
    
    ```bash
    dbmate up
    ```

To create new migrations, run the following command:

    ```bash
    dbmate new <migration name>
    ```

## Available Scripts

### `yarn run dev`

Run the server in development mode.

### `yarn test`

Run all unit-tests with hot-reloading.

### `yarn test -- --testFile="name of test file" (i.e. --testFile=Users).`

Run a single unit-test.

### `yarn run test:no-reloading`

Run all unit-tests without hot-reloading.

### `yarn run lint`

Check for linting errors.

### `yarn run build`

Build the project for production.

### `yarn start`

Run the production build (Must be built first).

### `yarn start -- --env="name of env file" (default is production).`

Run production build with a different env file.


## Additional Notes

- If `yarn run dev` gives you issues with bcrypt on MacOS you may need to run: `yarn rebuild bcrypt --build-from-source`. 
