import Arr from "./Arr";
import Header from "./Component/Header";
import Entry from "./Entry";
import FirstExample from "./FirstExample";
import Jokes from "./Jokes";
import Props from "./Props";
import Tasks from "./Tasks";
import Data from "./Data";

const App = () => {
  // const jokeselement = jokesData.map((joke) => {
  //   return (
  //     <Jokes
  //       setup={joke.setup}
  //       punchline={joke.punchline}
  //       writer={joke.writer}
  //       rate={joke.rate}
  //       isPun={joke.isPun}
  //       comments={joke.comments}
  //     />
  //   );
  // });

 
  return (
  
  <>
<Header/>
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-2">

        {Data.map((item) => (
          <Entry
            key={item.id}
            img={item.img}
            title={item.title}
            country={item.country}
            googleMapsLink={item.googleMapsLink}
            dates={item.dates}
            text={item.text}
               
            />
         ))  }
      {/* {jokeselement} */}

      {/* <Arr/> */}
      {/* <Tasks/> */}

         
      {/* <FirstExample/> 

 */}
      {/* <Props/> */}
      {/* <Jokes
        setup="What did the fish say when it hit the wall?"
        punchline="Dam."
        writer="John Doe"
        rate={5}    
        isPun={true}
        comments={["This is a great joke!", "I love it!", "Hilarious!", "Not funny."]}
      />
      <br />
      <Jokes
        setup="Why don't scientists trust atoms?"
        punchline="Because they make up everything."
      />
      <br />
      <Jokes writer="John Doe" setup="What do you call a fake noodle?" />
      <br />
      <Jokes punchline="Igloos it together." />
      <br />
      <Jokes
        writer="John Doe"
        setup="Why did the scarecrow win an award?"
        punchline="Because he was outstanding in his field."
      /> */}
    </main>
    </>
  );
};

export default App;
