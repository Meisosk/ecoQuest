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
  const maxLevel = 100; // Maximum level, adjust as needed
  const interval = 5; // Every 5 levels

  let intervalLevel = Math.floor(level / interval);
  const nextName = `Eco${suffixes[intervalLevel]}`;
  return nextName;
}

export { getCurrentName };
