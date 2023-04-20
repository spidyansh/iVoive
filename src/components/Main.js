import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

export default function Main() {
  const [texttocopy, settexttocopy] = useState();
  const [isCopied, setCopied] = useClipboard(texttocopy);

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Anshul Speech to Text</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
          </div>
        </div>
        <div
          className="container textbox"
          onClick={() => settexttocopy(transcript)}
        >
          {transcript}
        </div>
        <button onClick={startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={setCopied}>
          {isCopied ? "Copied" : "Copy to Clipboard"}
        </button>
      </section>
    </>
  );
}
