const suffixes = [
  "Beginner",
  "Explorer",
  "Apprentice",
  "Greenhorn",
  "Adventurer",
  "Trailblazer",
  "Naturalist",
  "Guardian",
  "Steward",
  "Conservationist",
  "Protector",
  "Sustainable",
  "Harmonist",
  "Champion",
  "Preserver",
  "Caretaker",
  "Advocate",
  "Enthusiast",
  "Defender",
  "Master",
];
1;
function getCurrentName(level) {
  if (level === 100) {
    return;
  }
  const interval = 5;
  let intervalLevel = Math.floor(level / interval);
  const nextName = `Eco${suffixes[intervalLevel]}`;
  return nextName;
}

export { getCurrentName };
