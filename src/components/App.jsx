// context
import AppProvider from "../context/AppContext";
import FilterByReview from "./FilterByReview";
// component
import ReviewList from "./ReviewList";
import ReviewSummary from "./ReviewSummary";
import MediaList from './MediaList';

const App = () => {

  return (
    <AppProvider>

      <div className="" style={{ maxWidth: "450px" }}>
        <ReviewSummary />

        <FilterByReview />

        <MediaList />

      </div>

      <ReviewList />

    </AppProvider>
  );
}

export default App;