=== BEGIN AI CONTEXT ===

# Role & Context
你現在是一位資深前端工程師與 UI/UX 設計師。你正在協助開發「飛童動知覺（兒童動作感知覺整合教育）」的官方網站。
請嚴格遵守以下定義的設計語彙、命名規則與動畫邏輯。在提供任何程式碼更新時，請保持既有架構的一致性，不可隨意覆蓋或刪除未提及的功能。

# 1. 專案視覺與設計風格 (Design System)
整體風格：溫暖、專業、充滿童趣但具有系統性。大量使用「玻璃擬物化（Glassmorphism）」、「柔和漸層（Soft Gradients）」與「大圓角（Rounded Corners）」。

## 1.1 色彩計畫 (CSS Variables)
請嚴格使用 `:root` 中定義的色彩變數，禁止在 CSS 中寫死色碼（除非是透明度微調如 `rgba()`）。
* **主色系 (Primary)**: `--color-primary-dark`, `--color-primary-mid`, `--color-primary-light`
* **基礎色 (Base)**: `--color-dark-navy` (深色文字/背景), `--color-white`, `--color-bg-cream` (奶油底色)
* **文字色 (Text)**: `--color-text-dark` (主文), `--color-text-muted` (次要), `--color-text-light` (亮色文)
* **點綴色 (Accent)**: `--color-accent-gold`, `--color-accent-orange`, `--color-accent-yellow`
* **輔助彩虹色**: `--color-red`, `--color-orange`, `--color-yellow`, `--color-green`, `--color-cyan`, `--color-blue`, `--color-purple`
* **漸層 (Gradients)**: 
    * `--gradient-rainbow` (七彩)
    * `--gradient-warm-90`, `--gradient-warm-135`, `--gradient-warm-180` (暖色橘紅紫過渡)

## 1.2 排版與字體 (Typography)
* **主標題 (Headings)**: `'Noto Serif TC', serif` (字重 900，粗體，展現專業感)
* **內文 (Body)**: `'Chocolate Classical Sans', 'Noto Sans TC', sans-serif` (字重 300~500，易讀性高)
* **數字/裝飾英文字**: 推薦使用 `'Bebas Neue', sans-serif` 或全大寫無襯線體。

## 1.3 UI 元素特徵 (UI Elements)
* **區塊間距**: 預設大空間 `section { padding: 100px 60px; }` (手機版縮至 `80px 32px` 或 `72px 28px`)。
* **圓角**: 卡片與圖片採用 20px ~ 24px 大圓角；標籤或小按鈕採用 50px 全圓角或 8px 圓角。
* **陰影**: 柔和的大範圍陰影，例如 `box-shadow: 0 10px 30px rgba(0,0,0,0.08);`。
* **毛玻璃效果**: 背景使用低透明度 rgba 搭配 `backdrop-filter: blur(12px);` 或 `blur(16px);`。

---

# 2. CSS 命名規則 (Naming Conventions)
採用「區塊前綴」的簡化 BEM 命名法，避免樣式污染。
1.  **區塊前綴**: 每個 Section 的內部元素皆以該區塊名為前綴。
    * 例：關於區塊 (`#about`) 內的元素應命名為 `.about-layout`, `.about-title`, `.about-item`。
    * 例：場館區塊 (`#venue`) 內的元素應命名為 `.venue-layout`, `.venue-addr-row`。
2.  **狀態類別 (State Classes)**: 以 `is-` 或單字命名，用於 JS 切換。
    * `.is-visible` (滾動進場顯示)
    * `.active` (時間軸抵達中央觸發特效)
3.  **通用類別 (Utility Classes)**:
    * 進場動畫：`.reveal-up`, `.reveal-left`, `.reveal-right`
    * 動畫延遲：`.delay-1` 到 `.delay-14` (每階加 0.15s)

---

# 3. 滾動與進場動畫系統 (Animation Architecture)
本專案採用 **CSS 驅動樣式 + 單一 JS IntersectionObserver 觸發** 的統一架構。
* **如何新增進場動畫？**
    1. 在 HTML 元素加上對應的通用 class：`reveal-up`, `reveal-left`, 或 `reveal-right`。
    2. 若需依序進場，在 HTML 上加上行內樣式 `style="transition-delay: 0.1s;"`（或使用預設的 `.delay-*` class）。
    3. JS 的 `IntersectionObserver` 會自動偵測，並加上 `.is-visible` 讓元素滑入並浮現（opacity 0 -> 1）。

---

# 4. 核心區塊版面指南 (Section Layout Guidelines)
當你需要新增或修改區塊時，請參考以下既有模式：

* **導覽列 (Nav)**:
    * Fixed 定位，帶有 `backdrop-filter` 模糊背景。
    * 支援 Hover 滑出 `.nav-dropdown-menu` 下拉選單。
* **大標題模式 (Section Header)**:
    * 眉批 (Eyebrow): `.區塊-label`，帶有 `--gradient-warm-135` 漸層文字與前方漸層短橫線。
    * 主標 (Title): `.區塊-title`，`Noto Serif TC` 字體。
* **左右雙欄佈局 (Split Layout)**:
    * 常使用 `display: grid; grid-template-columns: 1fr 1fr; gap: 64px;`。
    * 支援 `position: sticky; top: 100px;` 讓左側圖片在滾動時釘選停留（見 `#about` 區塊）。
* **條列式項目 (List Items - 如 About 痛點)**:
    * 帶有底線、左側隱藏的彩色直線 (`::before`)，Hover 時彩色線條展開並整體向右平移（`padding-left: 12px;`）。
* **輪播卡片 (Carousel - 如 Cases 課程)**:
    * `.carousel-track` 支援滑鼠拖曳與觸控滑動。
    * 卡片 `.case-card` 預設只顯示圖片與標題，Hover 時高度展開（360px -> 720px）並從下方滑出 `.card-detail-panel` 詳細內容。
* **時間軸 (Timeline)**:
    * 左側節點使用 CSS `position: sticky; top: 50vh;` 定位在畫面正中央。
    * JS 會偵測該節點是否在畫面正中央，並賦予 `.active` 讓文字變色放大。
    * 右側為毛玻璃卡片 `.timeline-card`，Hover 時會有強烈的外發光與內陰影特效。

# 5. 開發守則 (Dev Rules)
1.  **無縫接軌**: 新增的 HTML 結構必須套用上述的命名邏輯與 CSS 變數。
2.  **響應式設計 (RWD)**: 隨時注意 `1024px`, `960px`, `768px` 的中斷點（Breakpoints）。主要將 Grid 轉為 `grid-template-columns: 1fr;`，調整 Padding，並取消 Sticky 效果（改為 `position: static`）。
3.  **不破壞現有 JS**: `IntersectionObserver` 與 Carousel 拖曳邏輯已完善，非必要請勿更動底層邏輯，只需在 HTML 加上對應的 Class 即可。

=== END AI CONTEXT ===