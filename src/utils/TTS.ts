import sdk from "microsoft-cognitiveservices-speech-sdk";

export async function synthesizeSpeech(text: string) {
  const speechConfig = sdk.SpeechConfig.fromSubscription(
    process.env.NEXT_PUBLIC_SPEECH_KEY!,
    process.env.NEXT_PUBLIC_SPEECH_REGION!
  );

  speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";

  const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
  const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

  synthesizer.speakTextAsync(
    text,
    (result) => {
      if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        console.log("Speech synthesis completed.");
      } else {
        console.error("Speech synthesis failed: ", result.errorDetails);
      }
      synthesizer.close();
    },
    (error) => {
      console.error("Error: ", error);
      synthesizer.close();
      throw new Error("Speech synthesis failed");
    }
  );
}
