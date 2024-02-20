# Star rating components

- started 19.02.2024

  [Project video](https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=2703s)

  ***

- using commands:
  - yarn create react-app my-app --template typescript - **for creating project**;
  - yarn add react-icons @types/react-icons - ** for adding react-icons to project**

## code hints

- for creating array of elements we can use this code:
  ```
  {[...Array(props.numberOfStar)].map((_, index) => {return <FaStar key={index} size={50} />})}
  ```
- changing quantity of selected stars:

  - for this i create 2 useState functions

  ```
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  ```

  - and 3 event listeners

```
  function clickHandler(currentIndex: number) {

    setRating(currentIndex);
  }
  function mouseEnterHandler(currentIndex: number) {

    setHover(currentIndex);
  }
  function mouseLeaveHandler() {

    setHover(rating);
  }

```

- changing logic will be implemented via

```
  className={index <= (hover || rating) ? "active" : "inactive"}
  // and relevant css classes
```
