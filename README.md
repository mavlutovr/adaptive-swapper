# adaptive-swapper
Simple changing the posiiton of elements (tags) depends on the width of the window.

## Demo

https://webdeveloper.pro/adaptive-swapper-demo (coming soon)

## Install

Git

```
git+https://github.com/mavlutovr/adaptive-swapper.git
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