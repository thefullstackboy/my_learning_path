import icons from '../../img/icons.svg';
import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /*
  Rendet the received object to the Dom
  @ {object | object } the data to be rendered (e.g recipe)
  @param {boolean} [render=true] if falsem create markup
  string instead of rendering to the dom.
  render the recieved to object the dom.
  @returns {underfined | string} A markup string is returned if render = false
  this object jonas schmedtmann todo finish implementation
  */

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._genrateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const NewMarkup = this._genrateMarkup();

    const newDom = document.createRange().createContextualFragment(NewMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const currElement = Array.from(this._parentElement.querySelectorAll('*'));
    // console.log(currElement);
    // console.log(newElements);

    newElements.forEach((newEl, i) => {
      const curEl = currElement[i];

      // Update Change Text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log(newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      // Update change Attribute
      if (!newEl.isEqualNode(curEl)) {
        // console.log(newEl.attributes);
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });

    // console.log(newElements);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
        <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(meassage = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
            <svg>
            <use href="${icons}.svg#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${meassage}!</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMeassage(meassage = this._message) {
    const markup = `
      <div class="meassage">
        <div>
            <svg>
            <use href="${icons}.svg#icon-smile"></use>
            </svg>
        </div>
        <p>${meassage}!</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
