// const Hello = () => {
//     <p>Hello</p>;
// }
// export default Hello;
import World from "./World";

export default function Hello() {
  function showName() {
    console.log("hayun");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
    console.log(txt); //target은 input, value는 input의 value
  }

  return (
    <>
      <h3>Hello</h3>
      {/* <World /> */}
      <button onClick={showName}>Show Name</button>
      <button
        onClick={() => {
          showAge(17);
        }}
      >
        Show age
      </button>
      <input
        type="text"
        onChange={(text) => {
          const txt = text.target.value;
          showText(txt);
        }}
      />
    </>
  );
}
