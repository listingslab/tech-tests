# REQUIREMENTS

## General Requirements

**You need to replicate all the functionality and design as in the videos.**

**The final solution should be highly optimized and implemented as efficiently as possible. In other words, the number of re-renders of the components and the final bundle size should be as low 
as possible.**

**Please ensure that the code you submit reflects your best work and you use best practices.**

**The commit history should be granular with descriptive commit comments**

**Using [BEM methodology](https://getbem.com/naming/) for CSS is a nice to have but not required.**

### Important Note
There are embedded videos which show the expected design, responsiveness and behaviour of the application/components.
They may not work with every MARKDOWN rendering engine, so above each video there is a link to the video file as well.

You can find these videos in the [instruction_assets](instruction_assets) folder.

### Video preview of the expected final result.
[FullPreview.mp4](instruction_assets/FullPreview.mp4)
<video width="320" height="240" controls>
  <source src="instruction_assets/FullPreview.mp4" type="video/mp4">
</video>

## Stocks Page Layout

[ResponsivenessAndLayout.mp4](instruction_assets/ResponsivenessAndLayout.mp4)
<video width="320" height="240" controls>
  <source src="instruction_assets/ResponsivenessAndLayout.mp4" type="video/mp4">
</video>

The layout consists of a `heading`, `navigation`, `stock cards list` and `price chart`.
The layout should be responsive and should be able to be displayed on desktop, tablet and mobile devices.
- On desktop devices the price chart should take `around 400px` of the width. The remaining 
width should be used for the stock cards list.
- On tablet/mobile and other devices with screen smaller than `1024px`, the price chart should be displayed above the
stock cards list.

### Stock Card List

The cards should be displayed in a responsive container. The container
should take the remaining of the height from the page
- bellow the title and navigation on desktop
- bellow the title, navigation and chart on tablet/mobile

#### User Actions:
[CardsSelection.mp4](instruction_assets/CardsSelection.mp4)
<video width="320" height="240" controls>
  <source src="instruction_assets/CardsSelection.mp4" type="video/mp4">
</video>

- The user should be able to select a stock card by clicking on it. When a card is selected, it should be highlighted
with black shadow and scaled up by around 2-4%. (Check video/images)
- If there is an active/selected card, the other cards should be scaled down by around 2-4%. (Check video/images)

### Price Chart 
Should be made responsive on mobile, on desktop it should take `around 400px` of the width.

The price chart updates fetches the price history for the currently selected symbol. 

### Stock Card
**The stock card should be a responsive component.**

[SymbolCardEffects.mp4](instruction_assets/SymbolCardEffects.mp4)
<video width="320" height="240" controls>
  <source src="instruction_assets/SymbolCardEffects.mp4" type="video/mp4">
</video>

#### Variations
- Default *(no trend)*
- Positive trend *(green upwards arrow)*
- Negative trend *(red downwards arrows)*

#### Fields

- **Header**: Header title is the stock symbol. On the right side of the header there is a
trend marker (only if the trend is available)

- **Trend Marker**: Some stocks may have a positive or negative
trend which is indicated by **green** *(positive)* and **red** *(negative)* arrows.
Assets for this can be found in the [frontend/src/assets](frontend/src/assets) folder.
- `assets` folder.

- **Price** *(in USD)*: Formatted price of the stock.
- **Company Name, Industry and Market cap**: Info fields about the stock.
Assets for this can be found in the [frontend/src/assets](frontend/src/assets) folder.

#### Animations/Interactions
- If the price changes for more than 25% from the previous price, the card should shake 
  - The shake animation class can be found in the [frontend/src/components/SymbolCard/symbolCard.css](frontend/src/components/SymbolCard/symbolCard.css) `symbolCard__shake`.
- If the last price change is positive, the card should flash with green shadow. (Check videos)
- If the last price change is negative, the card should flash with red shadow. (Check videos)
- If the card is currently selected, it should have a black shadow around it. (Check videos)
  - **IMPORTANT**: The flashing shadow from the price changes takes precedence over the black shadow. (Check videos)

### Bonus points for using custom hooks, especially for the **animations** and **effects (box shadow)**



### ESTIMATED TIME: 2-4 hours