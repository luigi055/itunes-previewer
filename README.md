<h2 align="center">
<h1>Itunes Previewer Media Player</h1>
</h2>

Simple Application where you can search for song tracks from Itunes API and reproduce the previews.

## Previews Mobile

<p align="center">
<img src="https://i.imgur.com/kBYs4YP.gif"
  alt="Corner job search preview mobile"
  >
</p>

## Previews Desktop

<p align="center">
<img src="https://i.imgur.com/voi395r.gif"
  alt="Corner job search preview desktop"
  >
</p>

<h2 align="center"><a  href="https://itunes-previewer.surge.sh/">Live Demo</a></h2>
 
## UX / UI Improvements

Basic improvements for Responsive Design. since the design provided was desktop only, I extended the Base design to be friendly with mobiles phones since most of the case the screen size are smaller than desktop screens.

- Playlist. for small screen the application shows the tracks like a list. displaying only the most relevant information, and in order to keep the sorting behavior. I added an additional HTML selector (only visible for small screen sizes) where the user can sort the list based on Track duration, price or Genre. The rest of the UI for wide screen sizes is displayed as the resources provided.

- Header. in order to make this component responsive in small screen sizes, The title will be on top of search input.

- Social Share Button. In small screen size the buttons are displayed above the player controls.

## Technology Stack

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [HTML,CSS](<https://en.wikipedia.org/wiki/HTML#:~:text=Hypertext%20Markup%20Language%20(HTML)%20is,scripting%20languages%20such%20as%20JavaScript>)
- [surge.sh](https://surge.sh/)
- [Node.js](https://nodejs.org/en/)

## Dependencies and Libraries

| Library                                                                               |                 Usage                  |
| ------------------------------------------------------------------------------------- | :------------------------------------: |
| [React](https://reactjs.org)                                                          |  library for building user interfaces  |
| [Redux](https://redux.js.org/)                                                        |      State Container for JS Appst      |
| [Jest](https://jestjs.io/)                                                            |           Testing Framework.           |
| [React Testing-Library](https://testing-library.com/docs/react-testing-library/intro) |      For testing React components      |
| [Styled Components](https://styled-components.com/)                                   |      for Styling React component       |
| [Redux Saga](https://redux-saga.js.org/)                                              | for Handling application side effects. |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom)                    |     DOM bindings for React Router.     |

## Usage

You can download the app and play around, enhance or even learn from it, and here is how to do it:

<details><summary><b>Show instructions</b></summary>

1.  Clone the repo:

    ```sh
    $ git clone https://github.com/luigi055/itunes-previewer.git
    ```

2.  Install package.json dependencies:

    ```sh
    $ npm install
    ```

3.  start the app 😃:

    ```sh
    $ npm start
    ```

    </details>

## Run Tests

```sh
$ npm test
```

## Run Tests Coverage

```sh
$ npm run test:ci
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Icons and Assets

Icons and assets taken provided by Corner job's development team
