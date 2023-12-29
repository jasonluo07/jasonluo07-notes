為了防止滾動而不顯示或隱藏滾動條，可以使用一種稱為 "overflow locking" 的技術。這個技術通常涉及到在 body 上增加一個固定的或固定寬度的 padding，以抵消原本滾動條所佔的空間，然後隱藏滾動條。這樣可以防止滾動，同時避免頁面因為滾動條的顯示和隱藏而出現跳動的現象。

以下是一個示例實現：

1. **在 CSS 中添加一個類，用於禁止滾動**：

   ```css
   .no-scroll {
     overflow: hidden;
     padding-right: 15px; /* 大約是標準滾動條的寬度 */
   }
   ```

2. **在點擊菜單的時候，切換這個類**：

   ```javascript
   const handleToggleMenu = () => {
     setIsMenuOpen((prevIsMenuOpen) => {
       if (prevIsMenuOpen) {
         document.body.classList.remove('no-scroll');
       } else {
         document.body.classList.add('no-scroll');
       }
       return !prevIsMenuOpen;
     });
   };
   ```

這個方法的主要優點是可以保持頁面的佈局穩定，不會因為滾動條的出現和消失而引起頁面的輕微跳動。不過，需要注意的是，這個方法假設滾動條的寬度大約是 15px，這在大多數情況下是成立的，但可能在某些瀏覽器或操作系統中略有不同。如果需要，您可以通過 JavaScript 動態計算滾動條的實際寬度來進行調整。
