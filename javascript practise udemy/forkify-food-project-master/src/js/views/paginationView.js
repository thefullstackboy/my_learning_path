import View from './view.js';
// import icons from 'url:../../img/icons.svg';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  //   _errorMessage = `No recipe found for your query Please try again !`;

  addHendlerClick(hendler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      //   console.log(goToPage);

      hendler(goToPage);
    });
  }

  _genrateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultsPerPage
    );

    // page 1  and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `
      <button data-goto ="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
        <span> Page ${currentPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }
    // Page 1 , and there are no other pages
    // Last page
    if (currentPage === numPages && numPages > 1) {
      return `
        <button  data-goto ="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span> Page ${currentPage - 1} </span>
        </button>`;
    }
    // Other page

    if (currentPage < numPages) {
      return `
        <button  data-goto ="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span> Page ${currentPage - 1} </span>
        </button>

        <button data-goto ="${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
            <span> Page ${currentPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }
    return ``;
  }
}

export default new PaginationView();
