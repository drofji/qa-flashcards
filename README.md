# 📚 FlashCards

Minimalistic web app for creating and studying flashcards with topics, practice mode, and JSON import/export.  
Runs entirely in the browser and stores data locally using IndexedDB.

---

## 🚀 Features

- 📂 Topics (create, rename, delete)
- 🎨 Custom topic colors
- 🃏 Add, edit, and delete flashcards
- 🎯 Practice mode with card flip animation
- 📊 Progress bar during study
- 🔍 Topic search
- 🌍 Bilingual interface (DE / EN)
- 📥 Import:
  - From JSON file
  - From URL
  - Paste JSON
- 📤 Export:
  - Single topic
  - All topics
- 💾 Local storage via IndexedDB
- 📱 Responsive design (mobile-friendly)

---

## 🧠 How It Works

All data is stored in **IndexedDB** (`flashcards_db`).

### Data Structure Example

```json
[
  {
    "id": "topic_id",
    "name": "Topic Name",
    "color": "#5288c1",
    "cards": [
      {
        "id": "card_id",
        "q": "Question text",
        "a": "Answer text"
      }
    ]
  }
]
```

- Export saves data as `.json`
- Import automatically merges topics with the same name
- Language preference is stored in `localStorage`

---

## 🖥 Usage

### Run Locally

Simply open:

```
index.html
```

---

### Import via URL

Add a parameter to the address bar:

```
?import_from_url=https://example.com/cards.json
```

The app will automatically import the data on load.

---

## 📦 Technologies

- HTML5
- CSS3 (custom dark theme)
- Vanilla JavaScript
- IndexedDB API
- LocalStorage (for language preference)

No frameworks. No dependencies.

---

## 📱 Responsive Design

- Sidebar auto-collapses on mobile
- Touch-friendly interface
- Tap to flip cards
- Optimized for desktop and mobile devices

---

## 🌍 Localization

Supported languages:

- 🇩🇪 German
- 🇬🇧 English

Language preference is saved in `localStorage`.

---

## 🔐 Data Storage

- All data is stored locally in the browser
- No backend required
- No data is sent to any server
- Use export for backups

---

## 🛠 Possible Improvements

- Spaced repetition system
- Study statistics
- Shuffle cards
- Drag & drop sorting
- Cloud sync
- PWA support

---

## 📄 License

MIT License