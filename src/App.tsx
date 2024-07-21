import "./App.css";
import Button from "./components/Button";
// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Barry",
  //     last: "Allen",
  //   },
  // ];
  return (
    <>
      <div>
        {/* <Greet name="SUYOG" messageCount={69} isLoggedIn={true} /> */}
        {/* <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="success" />
        <Heading>Place holder text</Heading>
        <Oscar>
          <Heading>Oscar goes to Cillian Murphy</Heading>
        </Oscar>
        <Greet name="Suyog" messageCount={10} isLoggedIn={false} /> */}

        {/* <Button
          handleClick={() => {
            console.log("BUTTON CLICKED");
          }}
        /> */}

        <Button
          handleClick={(event, id) => {
            console.log("BUTTON CLIECKED", event, id);
          }}
        ></Button>
      </div>
    </>
  );
}

export default App;
