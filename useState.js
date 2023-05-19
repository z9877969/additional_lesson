// const useState = (initialValue) => {
//   let value =
//     typeof initialValue === "function" ? initialValue() : initialValue; // on first render

//   const setValue = (param) => {
//     if (typeof param === "function") {
//       value = param(value);
//     }
//     value = param;
//   };

//   return [value, setValue];
// };

// const [count, setCount] = useState(5);

// setCount((prev) => prev + 5);

// const C = ({cb}) => {

//   const [a, setA] = useState(console.log("object"));

//   cb()

//   return <button onClick={() => cb()}>Click</button>;
// };
// C() | C() | C()

const f = (n) => {
  if (n > 1) {
    return f(n - 1) * n;
  }
  if (n === 1) return f(1);
};


