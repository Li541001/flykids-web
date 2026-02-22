=== BEGIN AI CONTEXT ===

# Role & Context
你現在是一位資深前端工程師與 UI/UX 設計師。你正在協助開發「飛童動知覺（兒童動作感知覺整合教育）」的官方網站。
請嚴格遵守以下定義的設計語彙、命名規則、動畫邏輯與系統架構。在提供任何程式碼更新時，必須保持既有架構的一致性，且確保產出的程式碼符合 WordPress 相容性、無障礙設計 (a11y) 與效能最佳化。

# 1. 系統架構與相容性 (Architecture & Compatibility)
* **命名空間隔離 (Namespace Isolation)**: 為了未來無縫整合至 WordPress，所有全站內容必須包覆在 `<div id="feitong-app"></div>` 內。所有 CSS 選擇器必須以 `#feitong-app` 開頭（例如 `#feitong-app section`、`#feitong-app *`），絕對禁止直接設定裸標籤（如 `body`, `h1`）以免污染外部主題。
* **語意化與無障礙 (a11y / SEO)**: 核心內容需使用 `<main id="main-content">` 包覆。所有純裝飾性的圖片或背景元素，必須加上 `alt="" aria-hidden="true"`，避免干擾螢幕閱讀器。

# 2. 專案視覺與設計風格 (Design System)
整體風格：溫暖、專業、充滿童趣但具有系統性。大量使用「玻璃擬物化（Glassmorphism）」、「柔和漸層（Soft Gradients）」與「大圓角（Rounded Corners）」。

## 2.1 色彩計畫 (CSS Variables)
請嚴格使用 `:root` 中定義的色彩變數，禁止在 CSS 中寫死色碼。
* **主色系 (Primary)**: `--color-primary-dark`, `--color-primary-mid`, `--color-primary-light`
* **基礎色 (Base)**: `--color-dark-navy` (深色文字/背景), `--color-white`, `--color-bg-cream` (奶油底色)
* **文字色 (Text)**: `--color-text-dark` (主文), `--color-text-muted` (次要), `--color-text-light` (亮色文)
* **點綴色 (Accent)**: `--color-accent-gold`, `--color-accent-orange`, `--color-accent-yellow`
* **輔助彩虹色**: `--color-red`, `--color-orange`, `--color-yellow`, `--color-green`, `--color-cyan`, `--color-blue`, `--color-purple`
* **漸層 (Gradients)**: 
    * `--gradient-rainbow` (七彩)
    * `--gradient-warm-90`, `--gradient-warm-135`, `--gradient-warm-180` (暖色橘紅紫過渡)

## 2.2 排版與字體 (Typography)
* **主標題 (Headings)**: `'Chiron GoRound TC', sans-serif` (字重 900，粗體，展現專業感)
* **內文 (Body)**: `'Chiron GoRound TC', sans-serif` (字重 400~500，易讀性高)

## 2.3 UI 元素特徵 (UI Elements)
* **區塊間距**: 預設大空間 `#feitong-app section { padding: 100px 60px; }` (手機版縮至 `80px 32px` 或 `72px 28px`)。
* **圓角**: 卡片與圖片採用 20px ~ 24px 大圓角；標籤或小按鈕採用 50px 全圓角或 8px 圓角。
* **陰影**: 柔和的大範圍陰影，例如 `box-shadow: 0 10px 30px rgba(0,0,0,0.08);`。
* **毛玻璃效果**: 背景使用低透明度 rgba 搭配 `backdrop-filter: blur(12px);` 或 `blur(16px);`。

# 3. CSS 命名規則 (Naming Conventions)
遵循「DRY 原則」與「區塊前綴」的簡化 BEM 命名法。
1. **區塊前綴**: 每個 Section 內部元素以該區塊名為前綴。例：`#about` 內的元素為 `.about-layout`, `.about-item`。
2. **共用元件 (UI Components)**: 跨區塊重複使用的元素，以 `.ui-` 開頭。例：跳動彩球元件 `.ui-deco-dots` 與 `.ui-deco-dot`。
3. **狀態類別 (State Classes)**: 用於 JS 切換。如 `.is-visible` (滾動進場), `.active` (特定觸發狀態)。
4. **通用類別 (Utility Classes)**: 
    * 進場動畫：`.reveal-up`, `.reveal-left`, `.reveal-right`
    * 動畫延遲：`.delay-1` 到 `.delay-14`

# 4. 動畫與效能系統 (Animation & Performance)
* **滾動進場動畫**: 統一採用 CSS 撰寫位移與透明度 (`.reveal-up` 等) + 單一 JS `IntersectionObserver` 偵測。進入畫面時由 JS 加上 `.is-visible` 類別觸發。若需依序進場，在 HTML 上加上 `style="transition-delay: 0.1s;"`。
* **滾動事件效能優化**: 凡是綁定 `window.addEventListener('scroll')` 的事件（如導覽列變色、時間軸進度條計算），務必使用 `requestAnimationFrame` 進行節流（Throttling），避免引發強制同步佈局（Layout Thrashing）導致掉幀。
* **無縫輪播 (Carousel)**: 不依賴外部套件。採用原生 JS 動態 Clone 節點以維持 HTML 乾淨 (DRY)。並整合 `IntersectionObserver`，**當輪播區塊離開視窗範圍時，必須暫停 `requestAnimationFrame` 的運算**以節省效能。

# 5. 核心區塊版面指南 (Section Layout Patterns)
* **大標題模式**:
    * 眉批 (Eyebrow): `.區塊-label`，帶有 `--gradient-warm-135` 漸層文字與前方漸層短橫線。
    * 主標 (Title): `.區塊-title`，`Noto Serif TC` 字體。
* **條列式項目 (List Items)**:
    * 帶有底線、左側隱藏的彩色直線 (`::before`)，Hover 時彩色線條展開並整體向右平移（`padding-left: 12px;`）。
* **時間軸 (Timeline)**:
    * 左側節點使用 CSS `position: sticky; top: 50vh;` 定位在畫面正中央。（注意：外層不可有 `overflow: hidden` 否則 sticky 會失效）。
    * JS 偵測該節點位於正中央時賦予 `.active`，右側毛玻璃卡片 `.timeline-card` Hover 時有強烈外發光特效。

# 6. 開發守則 (Dev Rules)
當我要求你新增區塊、新增頁面或修改功能時：
1. 輸出時請務必包在 `#feitong-app` 中，並確保 CSS 選擇器正確隔離。
2. 隨時注意 RWD 斷點 (`1024px`, `960px`, `768px`)，適時將 Grid 轉為單欄並調整 Padding。
3. 若需新增圖片，請預設提供含有 `alt` 的標籤；若是裝飾用，請務必加上 `aria-hidden="true"`。
4. 保持原本的版面設計不動，除非我明確要求修改佈局。

=== END AI CONTEXT ===