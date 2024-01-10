import icons from "url:../../img//icons.svg";
import View from "./View.js";

export class SearchView extends View {
  _parentElement = document.querySelector(".pagination");
  _generateMarkup() {
    const curPage = this._data.page;
    const prevBtn = `<button 
    data-goto="${curPage - 1}"  class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>`;
    const nextBtn = `<button 
    data-goto=" ${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return nextBtn;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return prevBtn;
    }

    // Other page
    if (curPage < numPages) {
      return `${prevBtn} ${nextBtn}`;
    }

    // Page 1, and there are No other pages
    return "";
  }
  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new SearchView();
