// context
import AppProvider from "../context/AppContext";
import FilterByReview from "./FilterByReview";
// component
import ReviewList from "./ReviewList";
import ReviewSummary from "./ReviewSummary";

const App = () => {

  return (
    <AppProvider>

      <ReviewSummary />

      <FilterByReview />
      
      <ReviewList />

    </AppProvider>
  );
}

export default App;