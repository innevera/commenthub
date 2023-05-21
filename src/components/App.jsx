// context
import AppProvider from "../context/AppContext";
// component
import ReviewList from "./ReviewList";

const App = () => {

  return (
    <AppProvider>

      <ReviewList />

    </AppProvider>
  );
}

export default App;