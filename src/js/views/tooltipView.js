class TooltipView {
  start() {
    document.body.addEventListener('mouseover', function (e) {
      const mainArticle = e.target.closest('.card__article-wrapper');
      const subArticle = e.target.closest('.card__descriptor');

      if (!mainArticle && !subArticle) return;

      let tooltipContainer;
      if (mainArticle) {
        tooltipContainer = mainArticle.querySelector('.tooltip');
      }
      if (subArticle) {
        tooltipContainer = subArticle.querySelector('.tooltip');
      }

      const bodyWidth = document.body.getBoundingClientRect().width;
      const tooltipContainerPosition = tooltipContainer.getBoundingClientRect();
      const tooltipContainerOffsetX =
        tooltipContainerPosition.left + tooltipContainerPosition.width;

      if (tooltipContainerOffsetX > bodyWidth) {
        const moveX = tooltipContainerOffsetX + 10 - bodyWidth;
        tooltipContainer.style.transform = `translateX(-${moveX}px)`;
      }
    });
  }
}

export default new TooltipView();
