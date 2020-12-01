export default structure => {

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

            let $currentElement = $container.children(':eq(' + i + ')');
            if (!$currentElement.is(childSelector)) {

              let $targetElement = getElement(childSelector);

              if ($targetElement.length) {

                saveOriginalPlace($targetElement);

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

