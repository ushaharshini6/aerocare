function speakText(elementId, langCode) {
  const textElement = document.getElementById(elementId);
  if (!textElement) return;

  const utterance = new SpeechSynthesisUtterance();
  utterance.text = Array.from(textElement.children).map(li => li.innerText).join(". ");
  utterance.lang = langCode;

  speechSynthesis.cancel(); // Stop ongoing speech
  speechSynthesis.speak(utterance);
}

