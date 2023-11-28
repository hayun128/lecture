import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

function App() {
  // const name = "hayun";
  // const naver = {
  //   name: "네이버",
  //   url: "https://naver.com",
  // };
  return (
    <div className="App">
      {/* <h1 style={{ color: "red" }}>Hello {name}</h1>
      <p>{2 + 1}</p>
      {/* 숫자나 문자는 잘 되지만 불린이나 객체는 표현 못함
      <a href={naver.url}>{naver.name}</a> 요런건 가능 */}
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;
