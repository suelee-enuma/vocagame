// Word data: English-Korean vocabulary pairs
window.WORD_DATA = [
  // Food (10)
  { id: 1, english: "apple", korean: "사과", category: "food", emoji: "🍎", difficulty: 1 },
  { id: 2, english: "banana", korean: "바나나", category: "food", emoji: "🍌", difficulty: 1 },
  { id: 3, english: "rice", korean: "쌀", category: "food", emoji: "🍚", difficulty: 1 },
  { id: 4, english: "water", korean: "물", category: "food", emoji: "💧", difficulty: 1 },
  { id: 5, english: "milk", korean: "우유", category: "food", emoji: "🥛", difficulty: 1 },
  { id: 6, english: "bread", korean: "빵", category: "food", emoji: "🍞", difficulty: 1 },
  { id: 7, english: "egg", korean: "달걀", category: "food", emoji: "🥚", difficulty: 1 },
  { id: 8, english: "meat", korean: "고기", category: "food", emoji: "🥩", difficulty: 1 },
  { id: 9, english: "fish", korean: "물고기", category: "food", emoji: "🐟", difficulty: 1 },
  { id: 10, english: "coffee", korean: "커피", category: "food", emoji: "☕", difficulty: 1 },

  // Animals (10)
  { id: 11, english: "cat", korean: "고양이", category: "animal", emoji: "🐱", difficulty: 1 },
  { id: 12, english: "dog", korean: "개", category: "animal", emoji: "🐶", difficulty: 1 },
  { id: 13, english: "bird", korean: "새", category: "animal", emoji: "🐦", difficulty: 1 },
  { id: 14, english: "bear", korean: "곰", category: "animal", emoji: "🐻", difficulty: 1 },
  { id: 15, english: "rabbit", korean: "토끼", category: "animal", emoji: "🐰", difficulty: 1 },
  { id: 16, english: "elephant", korean: "코끼리", category: "animal", emoji: "🐘", difficulty: 2 },
  { id: 17, english: "tiger", korean: "호랑이", category: "animal", emoji: "🐯", difficulty: 2 },
  { id: 18, english: "mouse", korean: "쥐", category: "animal", emoji: "🐭", difficulty: 1 },
  { id: 19, english: "horse", korean: "말", category: "animal", emoji: "🐴", difficulty: 1 },
  { id: 20, english: "pig", korean: "돼지", category: "animal", emoji: "🐷", difficulty: 1 },

  // Nature (10)
  { id: 21, english: "sun", korean: "태양", category: "nature", emoji: "☀️", difficulty: 1 },
  { id: 22, english: "moon", korean: "달", category: "nature", emoji: "🌙", difficulty: 1 },
  { id: 23, english: "star", korean: "별", category: "nature", emoji: "⭐", difficulty: 1 },
  { id: 24, english: "tree", korean: "나무", category: "nature", emoji: "🌳", difficulty: 1 },
  { id: 25, english: "flower", korean: "꽃", category: "nature", emoji: "🌸", difficulty: 1 },
  { id: 26, english: "rain", korean: "비", category: "nature", emoji: "🌧️", difficulty: 1 },
  { id: 27, english: "snow", korean: "눈", category: "nature", emoji: "❄️", difficulty: 1 },
  { id: 28, english: "mountain", korean: "산", category: "nature", emoji: "⛰️", difficulty: 2 },
  { id: 29, english: "river", korean: "강", category: "nature", emoji: "🏞️", difficulty: 1 },
  { id: 30, english: "cloud", korean: "구름", category: "nature", emoji: "☁️", difficulty: 1 },

  // Body (6)
  { id: 31, english: "eye", korean: "눈", category: "body", emoji: "👁️", difficulty: 1 },
  { id: 32, english: "ear", korean: "귀", category: "body", emoji: "👂", difficulty: 1 },
  { id: 33, english: "hand", korean: "손", category: "body", emoji: "✋", difficulty: 1 },
  { id: 34, english: "foot", korean: "발", category: "body", emoji: "🦶", difficulty: 1 },
  { id: 35, english: "head", korean: "머리", category: "body", emoji: null, difficulty: 1 },
  { id: 36, english: "heart", korean: "심장", category: "body", emoji: "❤️", difficulty: 1 },

  // Objects (10)
  { id: 37, english: "book", korean: "책", category: "object", emoji: "📖", difficulty: 1 },
  { id: 38, english: "pen", korean: "펜", category: "object", emoji: "🖊️", difficulty: 1 },
  { id: 39, english: "house", korean: "집", category: "object", emoji: "🏠", difficulty: 1 },
  { id: 40, english: "car", korean: "자동차", category: "object", emoji: "🚗", difficulty: 1 },
  { id: 41, english: "phone", korean: "전화", category: "object", emoji: "📱", difficulty: 1 },
  { id: 42, english: "door", korean: "문", category: "object", emoji: "🚪", difficulty: 1 },
  { id: 43, english: "window", korean: "창문", category: "object", emoji: null, difficulty: 2 },
  { id: 44, english: "chair", korean: "의자", category: "object", emoji: "🪑", difficulty: 1 },
  { id: 45, english: "clock", korean: "시계", category: "object", emoji: "🕐", difficulty: 1 },
  { id: 46, english: "key", korean: "열쇠", category: "object", emoji: "🔑", difficulty: 1 },
];

// Words that have emoji (for Mode 2)
window.EMOJI_WORDS = window.WORD_DATA.filter(function(w) { return w.emoji !== null; });

// Color palette for backgrounds
window.COLOR_PALETTE = [
  "#E74C3C",  // red
  "#3498DB",  // blue
  "#2ECC71",  // green
  "#F39C12",  // orange
  "#9B59B6",  // purple
  "#1ABC9C",  // teal
  "#E91E63",  // pink
  "#FF9800",  // amber
  "#00BCD4",  // cyan
  "#8BC34A",  // light green
  "#673AB7",  // deep purple
  "#FF5722",  // deep orange
];
