function detectMood() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  // Expanded emotion word lists for better accuracy
const happyWords = [
  "happy", "great", "good", "awesome", "joy", "excited", "love", "fantastic", "wonderful", "amazing",
  "grateful", "smile", "positive", "delighted", "cheerful", "ecstatic", "glad", "satisfied", "peaceful", "hopeful",
  "thrilled", "sunny", "superb", "pleased", "enjoying", "fun", "cool", "yay", "blessed"
];

const sadWords = [
  "sad", "depressed", "unhappy", "cry", "crying", "tears", "upset", "gloomy", "hopeless", "miserable",
  "regret", "grief", "hurt", "down", "alone", "lost", "lonely", "pained", "heartbroken", "devastated",
  "suffering", "worry", "broken", "sorrow", "dull", "blue", "tired", "low", "burden"
];

const angryWords = [
  "angry", "mad", "furious", "hate", "annoyed", "irritated", "rage", "frustrated", "scream", "resent",
  "offended", "disgusted", "hostile", "insult", "fuming", "agitated", "aggression", "temper", "jealous",
  "irritating", "pissed", "rude", "fight", "yelling", "mean", "sick", "stupid", "idiot", "loser"
];


  let happyScore = 0, sadScore = 0, angryScore = 0;

  // Count occurrences of each emotion word
  const words = input.split(/\s+/);
  for (let word of words) {
    if (happyWords.includes(word)) happyScore++;
    if (sadWords.includes(word)) sadScore++;
    if (angryWords.includes(word)) angryScore++;
  }

  // Final decision logic
  let moodEmoji = "😐";
  let sentiment = "Neutral";
  let confidence = "Low";

  const totalScore = happyScore + sadScore + angryScore;

  if (totalScore === 0) {
    moodEmoji = "😐";
    sentiment = "Neutral";
    confidence = "Low";
  } else {
    const maxScore = Math.max(happyScore, sadScore, angryScore);
    const confidencePercent = Math.round((maxScore / totalScore) * 100);

    if (happyScore === maxScore) {
      moodEmoji = "😊";
      sentiment = "Positive";
    } else if (sadScore === maxScore) {
      moodEmoji = "😢";
      sentiment = "Negative";
    } else if (angryScore === maxScore) {
      moodEmoji = "😡";
      sentiment = "Negative";
    }

    confidence = `${confidencePercent}%`;
  }

  resultDiv.innerHTML = `
    <p style="font-size: 28px;">Mood: ${moodEmoji}</p>
    <p><strong>Sentiment:</strong> ${sentiment}</p>
    <p><strong>Confidence:</strong> ${confidence}</p>
  `;
}
