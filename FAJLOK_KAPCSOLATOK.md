# EcoZone Technologies - Fájlok Kapcsolata

## � Projekt Szerkezet (Normalizált)

```
EcoZonTech/
├── index.html
├── auto.html
├── bakteriumokVirusok.html
├── eloskodok.html
├── ipari.html
├── kapcsolat.html
├── lakossagi.html
├── peneszgombakAllergenek.html
├── rosszSzagok.html
├── logo.png
├── FAJLOK_KAPCSOLATOK.md
└── assets/
    ├── css/
    │   ├── common.css (összes HTML használja)
    │   ├── styles-main.css (index.html)
    │   ├── styles-auto.css (auto.html)
    │   ├── styles-bakteriumokVirusok.css (bakteriumokVirusok.html)
    │   ├── styles-eloskodok.css (eloskodok.html)
    │   ├── styles-ipari.css (ipari.html)
    │   ├── styles-kapcsolat.css (kapcsolat.html)
    │   ├── styles-lakossagi.css (lakossagi.html)
    │   ├── styles-peneszgombakAllergenek.css (peneszgombakAllergenek.html)
    │   └── styles-rosszSzagok.css (rosszSzagok.html)
    ├── js/
    │   └── mainscript.js (összes HTML használja)
    └── images/
        ├── logo.png (összes HTML használja)
        ├── main/
        │   ├── favicon.png (összes HTML használja)
        │   ├── 1.png - 6.png (index.html feature ikonok)
        │   ├── auto.png, lakossag.png, ipar.png (index.html service ikonok)
        │   └── ozongenerator.png
        ├── auto/ (auto.html képei)
        ├── bakteriumokVirusok/ (bakteriumokVirusok.html képei)
        ├── ipari/ (ipari.html képei)
        ├── kapcsolat/ (kapcsolat.html social media ikonok)
        ├── lakossagi/ (lakossagi.html képei)
        ├── peneszgombakAllergenek/ (peneszgombakAllergenek.html képei)
        └── rosszSzagok/ (rosszSzagok.html képei)
```

## �📋 HTML Fájlok és Azok Függőségei

### 1. **index.html** (Főoldal / Homepage)
   - **CSS Fájlok:**
     - `assets/css/common.css` (Globális stílusok - ÖSSZES oldal használja)
     - `assets/css/styles-main.css` (Egyedi stílusok az index.html-hez)
   
   - **Képfájlok:**
     - `assets/images/logo.png` (Logó)
     - `assets/images/main/favicon.png` (Favicon)
     - `assets/images/main/1.png` - `assets/images/main/6.png` (6 db feature ikon)
     - `assets/images/main/auto.png` (Jármű fertőtlenítés ikon)
     - `assets/images/main/lakossag.png` (Lakossági szolgáltatások ikon)
     - `assets/images/main/ipar.png` (Ipari szolgáltatások ikon)

---

### 2. **auto.html** (Járművek Fertőtlenítése)
   - **CSS Fájlok:**
     - `common.css` (Globális stílusok)
     - `auto/styles-auto.css` (Egyedi stílusok az auto.html-hez)
   
   - **Képfájlok:**
     - `logo.png` (Logó)
     - `main/favicon.png` (Favicon)
     - `auto/1.jpg` (Ózonos autóklíma-fertőtlenítés)
     - `auto/2.jpg` (Autó belső fertőtlenítés)
     - `auto/3.jpg` (Gépjármű flotta kezelése)
     - `auto/4.jpg` - `auto/6.jpg` (Slider képek - autó belsők)
     - `auto/7.png` (Tisztítás folyamata)

---

### 3. **bakteriumokVirusok.html** (Baktériumok és Vírusok)
   - **CSS Fájlok:**
     - `common.css` (Globális stílusok)
     - `bakteriumokVirusok/styles-bakteriumokVirusok.css` (Egyedi stílusok)
   
   - **Képfájlok:**
     - `logo.png` (Logó)
     - `main/favicon.png` (Favicon)
     - `bakteriumokVirusok/bakterium1.jpg` (Baktériumok mikroszkóp alatt)

---

### 4. **eloskodok.html** (Élősködők)
   - **CSS Fájlok:**
     - `common.css` (Globális stílusok)
     - `eloskodok/styles-eloskodok.css` (Egyedi stílusok)
   
   - **Képfájlok:**
     - `logo.png` (Logó)
     - `main/favicon.png` (Favicon)
     - (Nincs külön képfájl ebben az oldalban a jelenlegi verzióban)

---

### 5. **ipari.html** (Ipari Szolgáltatások)
   - **CSS Fájlok:**
     - `common.css` (Globális stílusok)
     - `ipari/styles-ipari.css` (Egyedi stílusok)
   
   - **Képfájlok:**
     - `logo.png` (Logó)
     - `main/favicon.png` (Favicon)
     - `ipari/1.jpg` (Egészségügyi és tanügyi intézmények)
     - `ipari/2.jpg` (Gabona tárolók, silók és raktárak)
     - `ipari/3.jpg` (Vendéglátás, élelmiszeripari gyártás és raktározás)
     - `ipari/4.jpg` (Szellőző- és klímarendszerek)

---

### 6. **kapcsolat.html** (Kapcsolat)
   - **CSS Fájlok:**
     - `common.css` (Globális stílusok)
     - `kapcsolat/styles-kapcsolat.css` (Egyedi stílusok)
   
   - **Képfájlok:**
     - `logo.png` (Logó)
     - `main/favicon.png` (Favicon)
     - `kapcsolat/f.jpg` (Facebook ikon)
     - `kapcsolat/y.jpg` (YouTube ikon)
     - `kapcsolat/t.jpg` (Twitter/TikTok ikon)

---

### 7. **lakossagi.html** (Lakossági Szolgáltatások)
   - **CSS Fájlok:**
     - `common.css` (Globális stílusok)
     - `lakossagi/styles-lakossagi.css` (Egyedi stílusok)
   
   - **Képfájlok:**
     - `logo.png` (Logó)
     - `main/favicon.png` (Favicon)
     - `lakossagi/moldAllergie.jpg` (Penészgombák, allergének)
     - `lakossagi/virusBact.jpg` (Baktériumok, vírusok)
     - `lakossagi/badSmell.jpg` (Rossz szagok)
     - `lakossagi/pestControl.jpg` (Élősködők)

---

### 8. **peneszgombakAllergenek.html** (Penészgombák és Allergének)
   - **CSS Fájlok:**
     - `common.css` (Globális stílusok)
     - `peneszgombakAllergenek/styles-peneszgombakAllergenek.css` (Egyedi stílusok)
   
   - **Képfájlok:**
     - `logo.png` (Logó)
     - `main/favicon.png` (Favicon)
     - `peneszgombakAllergenek/penesz1.jpg` (Penész a falon)
     - `peneszgombakAllergenek/penesz2.jpg` (Allergiás tünetek)
     - `peneszgombakAllergenek/penesz3.jpg` (Penész eltávolítása)
     - `peneszgombakAllergenek/penesz4.jpg` (Megelőzés)

---

### 9. **rosszSzagok.html** (Rossz Szagok)
   - **CSS Fájlok:**
     - `common.css` (Globális stílusok)
     - `rosszSzagok/styles-rosszSzagok.css` (Egyedi stílusok)
   
   - **Képfájlok:**
     - `logo.png` (Logó)
     - `main/favicon.png` (Favicon)
     - (Nincs külön képfájl ebben az oldalban a jelenlegi verzióban)

---

## ℹ️ Projekt Fejlődés és Normalizáció

### Eredeti Szerkezet (scatter/szétszórt)
A projekt eredetileg szétszórt fájl és mappa szerkezettel rendelkezett:
- CSS és képek közvetlenül az oldal-specifikus mappákban (pl. `auto/styles-auto.css`)
- `common.css` és `mainscript.js` a projekt gyökerében
- Minden oldal saját almappájában tárolt fájlok

### Normalizált Szerkezet (jelenlegi)
2026 januárjában a projekt újrarendezésre került az iparág best practices szerint:
- **assets/ mappa:** Központi helyre kerültek az összes statikus fájlok
  - `assets/css/` - Összes CSS egy helyen (könnyebb kezelés, verziókezelés)
  - `assets/js/` - Összes JavaScript egy helyen
  - `assets/images/` - Összes kép (oldal-specifikus almappákkal)
- **Előnyök:**
  - Könnyebb karbantartás és verziókezelés
  - Tisztább projekt szerkezet
  - Könnyebb asset build pipeline
  - Jobb szeparáció (elkülönítés) az statikus fájlokról
- **Megmaradott:** Az eredeti CSS és képek oldal-specifikus almappái a függőségek megőrzése végett

### Fájl Átnevezés
- `main.html` → `index.html` (standard weboldal Homepage konvenció)

## 📁 CSS Fájlok Összefoglalása

| CSS Fájl | Hely | HTML Fájl(ok) |
|----------|------|---------------|
| `assets/css/common.css` | css mappa | **ÖSSZES HTML fájl** |
| `assets/css/styles-main.css` | css mappa | `index.html` |
| `assets/css/styles-auto.css` | css mappa | `auto.html` |
| `assets/css/styles-bakteriumokVirusok.css` | css mappa | `bakteriumokVirusok.html` |
| `assets/css/styles-eloskodok.css` | css mappa | `eloskodok.html` |
| `assets/css/styles-ipari.css` | css mappa | `ipari.html` |
| `assets/css/styles-kapcsolat.css` | css mappa | `kapcsolat.html` |
| `assets/css/styles-lakossagi.css` | css mappa | `lakossagi.html` |
| `assets/css/styles-peneszgombakAllergenek.css` | css mappa | `peneszgombakAllergenek.html` |
| `assets/css/styles-rosszSzagok.css` | css mappa | `rosszSzagok.html` |

## 🖼️ Képek Mappákonként

### `assets/images/main/` mappa
- `favicon.png` - Favicon (összes oldal használja)
- `1.png` - `6.png` - Feature ikonok (index.html)
- `auto.png` - Jármű ikon (index.html)
- `lakossag.png` - Lakosgági ikon (index.html)
- `ipar.png` - Ipari ikon (index.html)
- `ozongenerator.png` - Órangenerátor kép (nem használt jelenleg)

### `assets/images/auto/` mappa
- `1.jpg` - `7.png` - Járműfertőtlenítési képek (auto.html)

### `assets/images/bakteriumokVirusok/` mappa
- `bakterium1.jpg` - Baktérium kép (bakteriumokVirusok.html)

### `assets/images/ipari/` mappa
- `1.jpg` - `4.jpg` - Ipari szolgáltatások képei (ipari.html)

### `assets/images/kapcsolat/` mappa
- `f.jpg`, `y.jpg`, `t.jpg` - Közösségi média ikonok (kapcsolat.html)

### `assets/images/lakossagi/` mappa
- `moldAllergie.jpg`, `virusBact.jpg`, `badSmell.jpg`, `pestControl.jpg` - Szolgáltatási képek (lakossagi.html)

### `assets/images/peneszgombakAllergenek/` mappa
- `penesz1.jpg` - `penesz4.jpg` - Penészgomba és allergia képek (peneszgombakAllergenek.html)

## 🔗 JavaScript

- **`assets/js/mainscript.js`** - Globális JavaScript (összes oldal használja)
  - Mobilmenü funkció
  - Scroll kezelés
  - Smooth scrolling
  - Képslider funkció

---

**Utolsó frissítés: 2026.01.14**
