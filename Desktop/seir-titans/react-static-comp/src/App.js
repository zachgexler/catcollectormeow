import './App.css';
import AverageRating from './Components/AverageRating';
import Reviews from './Components/Reviews';
import SentimentAnalysis from './Components/SentimentAnalysis';
import Sidebar from './Components/Sidebar';
import WebsiteVisitors from './Components/WebsiteVisitors';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews ReviewNum="1,281"/>
      <AverageRating AvgNum="4.6"/>
      <SentimentAnalysis Num1="960" Num2="122" Num3="321"/>
      <WebsiteVisitors VisitorsNum="821"/>
    </div>
  );
}

export default App;