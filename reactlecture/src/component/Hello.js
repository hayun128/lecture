// const Hello = () => {
//     <p>Hello</p>;
// }
// export default Hello;
import World from "./World";

export default function Hello() {
  return (
    <>
      <h3>Hello</h3>
      <World />
      <World />
    </>
  );
}
