import React from 'react';
import MainContent from './components/MainContent';
// import Sidebar from './components/SideBarSection';
import AdSidebar from './components/AdSidebar'
// import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar'; // Import the Navbar component
import SidebarSection from './components/SidebarSection';

function App() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <SidebarSection />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Search Bar */}
          <div className="bg-gray-100 p-4">
            {/* <SearchBar /> */}
          </div>

          {/* Content Section */}
          <div className="flex-1 flex overflow-hidden">
            <MainContent />
            <AdSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
