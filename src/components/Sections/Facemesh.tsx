import React, {useEffect, useRef, useState} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Facemesh: React.FC = () => {
  const videoHeight = 480;
  const videoWidth = 640;
  const [initializing, setInitializing] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false); // Track model loading
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
      // const MODEL_URL = '/models'; //for local
      const MODEL_URL = 'models'; //for prod
      setInitializing(true);
      try {
        await Promise.all([
          window.faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          window.faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          window.faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          window.faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        setModelsLoaded(true); // Set modelsLoaded after successful loading
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
        .getUserMedia({video: {}})
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error('Error accessing video stream:', err));
    }
  };

  const handleVideoOnPlay = () => {
    if (videoRef.current && canvasRef.current && modelsLoaded) {
      const videoElement = videoRef.current;
      const canvasElement = canvasRef.current;

      const canvas = window.faceapi.createCanvasFromMedia(videoElement);
      canvasElement.innerHTML = ''; // Clear any previous canvas
      canvasElement.appendChild(canvas);

      const displaySize = {width: videoWidth, height: videoHeight};
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
    display: 'flex',
    justifyContent: 'center',
  };

  const canvasStyle: React.CSSProperties = {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Facemesh}>
      <div className="App " style={{textAlign: 'center'}}>
        <span>{initializing ? 'Initializing...' : 'Ready'}</span>
        <div className="display-flex justify-content-center" style={videoContainerStyle}>
          <video
            autoPlay
            height={videoHeight}
            muted
            onPlay={handleVideoOnPlay}
            ref={videoRef}
            width={videoWidth}
          />
          <canvas className="position-absolute" ref={canvasRef} style={canvasStyle} />
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
