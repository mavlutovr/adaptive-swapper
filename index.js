let originalPlaceId = 0;
let $
let inited = false
let saveOriginalPlace

const init = () => {
  if (inited) return
  inited = true

  $ = global.jQuery || window.jQuery;


  $.fn.toOriginalPlace = function () {
    $(this).each(function () {

      const element = $(this);
      const id = element.data('original-place-id');
      const originalPlace = $('#js-original-place-' + id);
      originalPlace.after(element);
    });

    return this;
  };


  saveOriginalPlace = element => {

    if (!element.length) throw new Error('adaptive-swapper / Element is not exists');

    if (!element.data('original-place-id')) {
      originalPlaceId++;

      const placeHolder = $('<div id="js-original-place-' + originalPlaceId + '"></div>').hide();
      element.data('original-place-id', originalPlaceId);

      element.after(placeHolder);
    }
  };
}



export default structure => {
  init()

  let elements = {};
  let lastWidth;


  const getElement = (selector) => {
    if (!elements[selector]) {
      elements[selector] = $(selector);
    }
    return elements[selector];
  };


  const rePos = () => {

    let fixI = 0;

    let windowWidth = window.innerWidth;

    let structureWidth;
    for (let w in structure) {

      if (windowWidth <= w) {
        if (!structureWidth) {
          structureWidth = w;
        }

        else {
          structureWidth = Math.min(w, structureWidth);
        }
      }
    }


    if (lastWidth === structureWidth) return false;


    if (structureWidth) {
      let structureOfWidth = structure[structureWidth];
      $.each(structureOfWidth, (containerSelector, childIds) => {

        let $container = getElement(containerSelector);

        $.each(childIds, function (i, childSelector) {

          i -= fixI;

          //if (childSelector === '*') throw new Error('adaptive-swapper / Check, maybe some element is not exists on the page');

          let $currentElement = $container.children(':eq(' + i + ')');
          if (!$currentElement.is(childSelector)) {

            let $targetElement = getElement(childSelector);

            if ($targetElement.length) {

              try {
                saveOriginalPlace($targetElement);
              }
              catch (e) {
                throw new Error(e.message + ': ' + childSelector);
              }

              if (i) {
                $container.children(':eq(' + (i - 1) + ')').after($targetElement);
              }

              else {
                $container.prepend($targetElement);
              }
            }

            else {
              fixI++;
            }
          }
        });
      });
    }


    // Default position
    else {
      $.each(elements, (i, $element) => {
        $element.toOriginalPlace();
      });
    }


    lastWidth = structureWidth;
  };


  rePos();
  $(window).on('resize', rePos);
};

