const ACCORDION = {
  toggler: '.accordion__toggler-button',
  item: '.accordion__item',
  itemActive: 'accordion__item--active'
};

function init () {
  const elsAccordionTogglerButton = document.querySelectorAll(ACCORDION.toggler);

  elsAccordionTogglerButton.forEach(function (elAccordionTogglerButton) {
    elAccordionTogglerButton.addEventListener('click', function () {
      const elAccordionItem = elAccordionTogglerButton.closest(ACCORDION.item);
      elAccordionItem.classList.toggle(ACCORDION.itemActive);
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
