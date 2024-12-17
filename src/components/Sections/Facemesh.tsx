import React, {useEffect, useRef, useState} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Facemesh: React.FC = () => {
  const [initializing, setInitializing] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadFaceApi = async () => {
      if (!window.faceapi) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js';
        script.async = true;
        script.onload = () => initializeFaceApi();
        script.onerror = () => console.error('Failed to load face-api.js');
        document.body.appendChild(script);
      } else {
        initializeFaceApi();
      }
    };

    const initializeFaceApi = async () => {
      const MODEL_URL = 'models';
      setInitializing(true);
      try {
        await Promise.all([
          window.faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          window.faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          window.faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          window.faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        setModelsLoaded(true);
        startVideo();
      } catch (error) {
        console.error('Error loading face-api models:', error);
      }
    };

    loadFaceApi();
  }, []);

  const startVideo = () => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({
          video: {facingMode: 'user'} // 'user' for front camera, 'environment' for rear camera
        })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error('Error accessing video stream:', err);
          alert('Unable to access camera. Please check permissions or try a different browser.');
        });
    }
  };

  const handleVideoOnPlay = () => {
    if (videoRef.current && canvasRef.current && modelsLoaded) {
      const videoElement = videoRef.current;
      const canvasElement = canvasRef.current;

      const canvas = window.faceapi.createCanvasFromMedia(videoElement);
      canvasElement.innerHTML = '';
      canvasElement.appendChild(canvas);

      const displaySize = {width: videoElement.offsetWidth, height: videoElement.offsetHeight};
      window.faceapi.matchDimensions(canvasElement, displaySize);

      setInterval(async () => {
        if (initializing) {
          setInitializing(false);
        }

        const detections = await window.faceapi
          .detectAllFaces(videoElement, new window.faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();

        const resizedDetections = window.faceapi.resizeResults(detections, displaySize);

        const ctx = canvasElement.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        }
        window.faceapi.draw.drawDetections(canvasElement, resizedDetections);
        window.faceapi.draw.drawFaceLandmarks(canvasElement, resizedDetections);
        window.faceapi.draw.drawFaceExpressions(canvasElement, resizedDetections);
      }, 100);
    }
  };

  const videoContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '640px', // Limit max width for larger screens
    margin: '0 auto',
     transform: 'scaleX(-1)',
  };

  const videoStyle: React.CSSProperties = {
    width: '100%', // Responsive width
    height: 'auto', // Maintain aspect ratio
    transform: 'scaleX(-1)', // Flip horizontally
    transformOrigin: 'center',
  };

  const canvasStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'scaleX(-1)', // Flip horizontally
    transformOrigin: 'center',
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Facemesh}>
      <div style={{textAlign: 'center'}}>
        <span>{initializing ? 'Initializing...' : 'Ready'}</span>
        <div style={videoContainerStyle}>
          
          <video
            autoPlay
            muted
            onPlay={handleVideoOnPlay}
            ref={videoRef}
            style={videoStyle}
          />
          <canvas ref={canvasRef} style={canvasStyle} />
        </div>
      </div>
    </Section>
  );
};

// Declare the faceapi global object
declare global {
  interface Window {
    faceapi: any; 
  }
}

export default React.memo(Facemesh);
