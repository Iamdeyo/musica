import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div
      id="App"
      className="bg-dark container mx-auto relative overflow-hidden h-screen pt-[24px] px-[24px] md:pt-0"
    >
      <TopNav />
      <SideNav />
      <HomePage />
    </div>
  );
}

export default App;
