import './App.css';
import UnityApp from './UnityApp/UnityApp';

function App() {
  return (
    <div className='app-container'>
      <UnityApp
        loaderUrl='UnityApp/Build/UnityApp.loader.js'
        dataUrl='UnityApp/Build/UnityApp.data'
        frameworkUrl='UnityApp/Build/UnityApp.framework.js'
        codeUrl='UnityApp/Build/UnityApp.wasm'
      />
    </div>
  );
}

export default App;
