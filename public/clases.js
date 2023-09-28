export class DataRenderer {
  constructor(data, timeframe = 'daily') {
    this.data = data;
    this.timeframe = timeframe;
  }

  render() {
    const renderedData = this.data.map(item => this.renderItem(item));
    return renderedData.join("");
  }

  renderItem(item) {
    const previousTimeframe = item.timeframes[this.timeframe].previous || 0;
    return `
    <div class="hours__table">
    <article class="table__info">
      <div class="info__title">
        <p>${item.title}</p>
        <i class='bx bx-dots-horizontal-rounded bx-md'></i>
      </div>
      <div class="info__description">
        <p class="info__current">
        ${item.timeframes[this.timeframe].current}hrs
        </p>
        <p class="info__previous">
          last week - ${previousTimeframe}hrs
        </p>
      </div>
    </article>
    </div>
    `;
  }

  setTimeframe(timeframe) {
    this.timeframe = timeframe;
  }
}
  