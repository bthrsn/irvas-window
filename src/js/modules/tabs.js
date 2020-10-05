const tabs = (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass, display = 'block') => {

  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

  const hideTabContent = () => {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });

    tabs.forEach(tab => tab.classList.remove(activeClass));
  }

  const showTabContent = (i = 0) => {
    tabsContent[i].style.display = display;

    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && 
      (target.classList.contains(tabsSelector.replace(/\./, '')) ||
       (target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))))) {
      tabs.forEach((tab, i) => {
        if (target === tab || target.parentNode === tab) {
          hideTabContent();
          showTabContent(i);
        };
      });
    }
  });

};

export default tabs;