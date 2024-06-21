import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className='e-avatar image e-avatar-small'></div>
      <div className='e-avatar image'></div> */}
      
      <div className='container'>
      <div className='e-card e-custom-card'>
        <div className="e-card-header">
          <div className='e-avatar image e-avatar-xlarge e-avatar-circle'></div>
        </div>
        <div className="e-card-header">
          <div className="e-card-header-caption center">
            <div className="e-card-header-title name">Laura Callahan</div>
            <div className="e-card-sub-title">Sales Coordinator</div>
          </div>
        </div>
        <div className="e-card-content">
          <p className="avatar-content">
            Laura received a BA in psychology from the University of Washington. 
            She has also completed a course in business French. She reads and writes French.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
