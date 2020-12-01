# adaptive-swapper
Simple changing the position of elements (tags) depends on the width of the window.

![](https://i.imgur.com/KYXiZzR.gif)

## Demo

https://webdeveloper.pro/demo/adaptive-swapper/demo.html

## Check first

Perhaps you can use CSS. For example GRID.

## Install

1. Install jQuery

2. Install adaptive-swapper

   Git

   ```
   npm install https://github.com/mavlutovr/adaptive-swapper.git --save
   ```

   Npm (coming soon)

   ```
   npm install adaptive-swapper --save
   ```

## Setup

```javascript
import adaptiveSwapper from 'adaptive-swapper';
```

## Usage

```javascript
adaptiveSwapper({

    // The position of the elements for the width 960 or less of the window
    960: {

        // Header
        '#js-mobile-header': [
            '*', // Already existing any element in #js-mobile-header
            '#js-header-cart',
            '#js-callback-button'
        ],

        // Menu
        '#js-mobile-menu': [
            '#js-search-form'
        ]
    },

    // The position of the elements for the width 480 or less of the window
    480: {

        // Header
        '#js-mobile-header': [
            '*',
            '#js-header-cart'
        ],

        // Menu
        '#js-mobile-menu': [
            '#js-search-form',
            
            // Moved from #js-mobile-header
            '#js-callback-button'
        ]
    }

});
```

## License

[MIT License](https://github.com/mavlutovr/adaptive-swapper/blob/main/LICENSE)