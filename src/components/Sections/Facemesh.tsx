import React, {useEffect, useRef, useState} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Facemesh: React.FC = () => {
  const [initializing, setInitializing] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [expressionMessage, setExpressionMessage] = useState<JSX.Element | null>(null);

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
          video: {facingMode: 'user'}, // 'user' for front camera, 'environment' for rear camera
        })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => {
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

        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const maxExpression = Object.keys(expressions).reduce((a, b) => (expressions[a] > expressions[b] ? a : b));

          if (maxExpression === 'happy' && expressions.happy > 0.7) {
            setExpressionMessage(
              <div className="mt-6 p-4 bg-green-700 text-white rounded-2xl shadow-lg animate-bounce max-w-md mx-auto">
                <p className="text-lg font-semibold mb-2">Looks like you’re enjoying this demo 😄</p>
                <p className="mb-3">Want to know why I’d be a great fit for your team?</p>
                <a
                  className="px-4 py-2 bg-white text-green-700 font-bold rounded-lg shadow hover:bg-gray-100 transition"
                  href="/Viron-Navarro-CV.pdf"
                  rel="noopener noreferrer"
                  target="_blank">
                  View My CV
                </a>
              </div>,
            );
          }

          if (maxExpression === 'surprised' && expressions.surprised > 0.7) {
            setExpressionMessage(
              <div className="mt-6 p-4 bg-blue-700 text-white rounded-2xl shadow-lg animate-pulse max-w-md mx-auto">
                <p className="text-lg font-semibold mb-2">Wow, surprised? 😲</p>
                <p className="mb-3">Let me show you something even cooler!</p>
                <div className="p-4 bg-white text-blue-700 rounded-xl shadow mt-3">
                  <h3 className="font-bold">Featured Project 🚀</h3>
                  <p>Check out my latest work that I’m most proud of.</p>
                  <a
                    className="block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                    href="https://yourprojectlink.com"
                    rel="noopener noreferrer"
                    target="_blank">
                    View Project
                  </a>
                </div>
              </div>,
            );
          }

          if (maxExpression === 'neutral' && expressions.neutral > 0.7) {
            setExpressionMessage(
              <div className="mt-6 p-4 bg-gray-700 text-white rounded-2xl shadow-lg max-w-md mx-auto">
                <p className="text-lg">Thanks for checking out my portfolio. 🙏</p>
              </div>,
            );
          }

          if (maxExpression === 'angry' && expressions.angry > 0.6) {
            setExpressionMessage(
              <div className="mt-6 p-4 bg-red-700 text-white rounded-2xl shadow-lg animate-pulse max-w-md mx-auto">
                <p className="text-lg mb-2">I hope you feel better soon 💙</p>
                <p>Here’s something uplifting to brighten your day:</p>
                <p className="mt-2 italic">“Keep going, the best is yet to come.” 🌟</p>
              </div>,
            );
          }
        }

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
        <h2 className="self-center text-xl font-bold text-white m-5">Face API Tensorflow demo</h2>
        <span className="self-center text-xl font-bold text-white">{initializing ? 'Initializing...' : ''}</span>

        <div style={videoContainerStyle}>
          <video autoPlay loop muted onPlay={handleVideoOnPlay} playsInline ref={videoRef} style={videoStyle} />
          <canvas ref={canvasRef} style={canvasStyle} />
        </div>

        {/* Interactive Hiring Message */}
        {expressionMessage}
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
