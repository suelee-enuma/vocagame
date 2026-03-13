// Word data: English-Korean-Japanese vocabulary
window.WORD_DATA = [
  // Food (10)
  { id: 1, english: "apple", korean: "사과", japanese: "りんご", category: "food", emoji: "🍎", difficulty: 1 },
  { id: 2, english: "banana", korean: "바나나", japanese: "バナナ", category: "food", emoji: "🍌", difficulty: 1 },
  { id: 3, english: "rice", korean: "쌀", japanese: "お米", category: "food", emoji: "🍚", difficulty: 1 },
  { id: 4, english: "water", korean: "물", japanese: "水", category: "food", emoji: "💧", difficulty: 1 },
  { id: 5, english: "milk", korean: "우유", japanese: "牛乳", category: "food", emoji: "🥛", difficulty: 1 },
  { id: 6, english: "bread", korean: "빵", japanese: "パン", category: "food", emoji: "🍞", difficulty: 1 },
  { id: 7, english: "egg", korean: "달걀", japanese: "卵", category: "food", emoji: "🥚", difficulty: 1 },
  { id: 8, english: "meat", korean: "고기", japanese: "肉", category: "food", emoji: "🥩", difficulty: 1 },
  { id: 9, english: "fish", korean: "물고기", japanese: "魚", category: "food", emoji: "🐟", difficulty: 1 },
  { id: 10, english: "coffee", korean: "커피", japanese: "コーヒー", category: "food", emoji: "☕", difficulty: 1 },

  // Animals (10)
  { id: 11, english: "cat", korean: "고양이", japanese: "猫", category: "animal", emoji: "🐱", difficulty: 1 },
  { id: 12, english: "dog", korean: "개", japanese: "犬", category: "animal", emoji: "🐶", difficulty: 1 },
  { id: 13, english: "bird", korean: "새", japanese: "鳥", category: "animal", emoji: "🐦", difficulty: 1 },
  { id: 14, english: "bear", korean: "곰", japanese: "熊", category: "animal", emoji: "🐻", difficulty: 1 },
  { id: 15, english: "rabbit", korean: "토끼", japanese: "うさぎ", category: "animal", emoji: "🐰", difficulty: 1 },
  { id: 16, english: "elephant", korean: "코끼리", japanese: "象", category: "animal", emoji: "🐘", difficulty: 2 },
  { id: 17, english: "tiger", korean: "호랑이", japanese: "虎", category: "animal", emoji: "🐯", difficulty: 2 },
  { id: 18, english: "mouse", korean: "쥐", japanese: "ねずみ", category: "animal", emoji: "🐭", difficulty: 1 },
  { id: 19, english: "horse", korean: "말", japanese: "馬", category: "animal", emoji: "🐴", difficulty: 1 },
  { id: 20, english: "pig", korean: "돼지", japanese: "豚", category: "animal", emoji: "🐷", difficulty: 1 },

  // Nature (10)
  { id: 21, english: "sun", korean: "태양", japanese: "太陽", category: "nature", emoji: "☀️", difficulty: 1 },
  { id: 22, english: "moon", korean: "달", japanese: "月", category: "nature", emoji: "🌙", difficulty: 1 },
  { id: 23, english: "star", korean: "별", japanese: "星", category: "nature", emoji: "⭐", difficulty: 1 },
  { id: 24, english: "tree", korean: "나무", japanese: "木", category: "nature", emoji: "🌳", difficulty: 1 },
  { id: 25, english: "flower", korean: "꽃", japanese: "花", category: "nature", emoji: "🌸", difficulty: 1 },
  { id: 26, english: "rain", korean: "비", japanese: "雨", category: "nature", emoji: "🌧️", difficulty: 1 },
  { id: 27, english: "snow", korean: "눈", japanese: "雪", category: "nature", emoji: "❄️", difficulty: 1 },
  { id: 28, english: "mountain", korean: "산", japanese: "山", category: "nature", emoji: "⛰️", difficulty: 2 },
  { id: 29, english: "river", korean: "강", japanese: "川", category: "nature", emoji: null, difficulty: 1 },
  { id: 30, english: "cloud", korean: "구름", japanese: "雲", category: "nature", emoji: "☁️", difficulty: 1 },

  // Body (6)
  { id: 31, english: "eye", korean: "눈", japanese: "目", category: "body", emoji: "👁️", difficulty: 1 },
  { id: 32, english: "ear", korean: "귀", japanese: "耳", category: "body", emoji: "👂", difficulty: 1 },
  { id: 33, english: "hand", korean: "손", japanese: "手", category: "body", emoji: "✋", difficulty: 1 },
  { id: 34, english: "foot", korean: "발", japanese: "足", category: "body", emoji: "🦶", difficulty: 1 },
  { id: 35, english: "head", korean: "머리", japanese: "頭", category: "body", emoji: null, difficulty: 1 },
  { id: 36, english: "heart", korean: "심장", japanese: "心臓", category: "body", emoji: "❤️", difficulty: 1 },

  // Objects (10)
  { id: 37, english: "book", korean: "책", japanese: "本", category: "object", emoji: "📖", difficulty: 1 },
  { id: 38, english: "pen", korean: "펜", japanese: "ペン", category: "object", emoji: "🖊️", difficulty: 1 },
  { id: 39, english: "house", korean: "집", japanese: "家", category: "object", emoji: "🏠", difficulty: 1 },
  { id: 40, english: "car", korean: "자동차", japanese: "車", category: "object", emoji: "🚗", difficulty: 1 },
  { id: 41, english: "phone", korean: "전화", japanese: "電話", category: "object", emoji: "📱", difficulty: 1 },
  { id: 42, english: "door", korean: "문", japanese: "ドア", category: "object", emoji: "🚪", difficulty: 1 },
  { id: 43, english: "window", korean: "창문", japanese: "窓", category: "object", emoji: null, difficulty: 2 },
  { id: 44, english: "chair", korean: "의자", japanese: "椅子", category: "object", emoji: "🪑", difficulty: 1 },
  { id: 45, english: "clock", korean: "시계", japanese: "時計", category: "object", emoji: "🕐", difficulty: 1 },
  { id: 46, english: "key", korean: "열쇠", japanese: "鍵", category: "object", emoji: "🔑", difficulty: 1 },
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
