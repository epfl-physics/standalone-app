import React, { useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import './UnityApp.css';

const UnityApp = (props) => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: props.loaderUrl,
    dataUrl: props.dataUrl,
    frameworkUrl: props.frameworkUrl,
    codeUrl: props.codeUrl,
  });

  // For loading the Unity canvas
  const [showUnity, setShowUnity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loadingPercentage = Math.round(loadingProgression * 100);

  function handleClick() {
    setIsLoading(true);
    setShowUnity(true);
  }

  return (
    <div className='unity-app'>
      <div className='unity-player'>
        {isLoading && !isLoaded && (
          <div className='loading-overlay'>
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        {showUnity ? (
          <Unity unityProvider={unityProvider} className='unity' />
        ) : (
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faCirclePlay} size='2x' />
          </button>
        )}
      </div>
    </div>
  );
};

export default UnityApp;
