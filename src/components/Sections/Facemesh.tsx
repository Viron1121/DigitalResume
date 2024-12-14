// import * as faceapi from 'face-api.js';
import React, {useEffect, useRef,useState} from 'react';

const Facemesh: React.FC = () => {
  const videoHeight = 480;
  const videoWidth = 640;
  const [initializing, setInitializing] = useState(false);

  // Use proper types for video and canvas refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = () => {
    if (videoRef.current) {
      navigator.mediaDevices.getUserMedia({
        video: {},
      }).then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }).catch((err) => console.log(err));
    }
  };

  const handleVideoOnPlay = () => {
    if (videoRef.current && canvasRef.current) {
      const videoElement = videoRef.current;
      const canvasElement = canvasRef.current;
      
      const canvas = faceapi.createCanvasFromMedia(videoElement);
      canvasElement.innerHTML = ''; // Clear any previous canvas
      canvasElement.appendChild(canvas);
  
      const displaySize = {width: videoWidth, height: videoHeight};
      faceapi.matchDimensions(canvasElement, displaySize);
  
      setInterval(async () => {
        if (initializing) {
          setInitializing(false);
        }
  
        const detections = await faceapi
          .detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
  
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        
        const ctx = canvasElement.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        }
  
        faceapi.draw.drawDetections(canvasElement, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasElement, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvasElement, resizedDetections);
      }, 100);
    }
  };

  const videoContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
  };

  const canvasStyle: React.CSSProperties = {
    position: 'absolute', 
  };

  return (
    <div className="App" style={{textAlign: 'center'}}>
    <span>{initializing ? 'Initializing' : 'Ready'}</span>
    <div className='display-flex justify-content-center' style={videoContainerStyle}>
      <video
        autoPlay
        height={videoHeight}
        muted
        onPlay={handleVideoOnPlay}
        ref={videoRef}
        width={videoWidth}
      />
      <canvas className='position-absolute' ref={canvasRef} style={canvasStyle}/>
    </div>
  </div>
  );
};

export default React.memo(Facemesh);
