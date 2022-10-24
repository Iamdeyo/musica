import Musicplayer from './components/Musicplayer';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div id="App" className="bg-dark">
      <div className="container mx-auto relative overflow-hidden h-screen pt-[24px] px-[24px] md:pt-0">
        <TopNav />
        <SideNav />
        <HomePage />
      </div>
      <Musicplayer />
    </div>
  );
}

export default App;
