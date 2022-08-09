import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Speak() {

  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handlelistening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const handleStop = () => {
    console.log({transcript})
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    handleStop();
    resetTranscript();
  };
  
  return (
    <div className="words">
      <div className="Speak-container">
        <button onClick={handlelistening}>Listen</button>
        <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button onClick={handleStop}>Stop</button>
        )}
      </div>
      {transcript && (
        <div className="speak-result-container">
          <div className="speak-result-text">{transcript}</div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    
    </div>
  );
}
export default Speak;