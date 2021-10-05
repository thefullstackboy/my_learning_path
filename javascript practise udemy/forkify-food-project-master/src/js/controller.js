import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as modal from './modal.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import ResultView from './views/resultView.js';
import PaginationView from './views/paginationView.js';
import bookMarkView from './views/bookMarkView.js';
import addRecipeView from './views/addRecipeView.js';

import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';

// if (module.hot) {
//   module.hot.accept();
// }

// https://forkify-api.herokuapp.com/v2

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    console.log(id);

    recipeView.renderSpinner();

    // 0) Update result Result view to mark selected search result
    resultView.update(modal.getSearchResultPage());

    //1 ) Updateing boolmarkView
    bookMarkView.render(modal.state.bookmarks);

    // 2) Loading Recipe
    await modal.loadRecipe(id);

    // 3) render recipe

    recipeView.render(modal.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async () => {
  try {
    resultView.renderSpinner();
    console.log(ResultView);

    // 1) get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search result
    await modal.loadSearchResult(query);

    // 3) Render results
    // resultView.render(modal.state.search.result);
    resultView.render(modal.getSearchResultPage());

    // 4) Render inital pagination buttons
    PaginationView.render(modal.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controalPagenation = function (gotoPage) {
  resultView.render(modal.getSearchResultPage(gotoPage));

  // 1) render New result
  // resultView.render(modal.getSearchResultPage());

  // 4) Render inital pagination buttons
  PaginationView.render(modal.state.search);
};

const controlServing = newServings => {
  // Update the recipe serving (in the state)

  modal.updateServing(newServings);

  // Update the recipe View
  // recipeView.render(modal.state.recipe);

  // Update the recipe View
  recipeView.update(modal.state.recipe);
};

const controlAddBookmark = () => {
  // 1) add/remove bookmark
  if (!modal.state.recipe.bookmarked) modal.addBookmark(modal.state.recipe);
  else modal.deleteBookmark(modal.state.recipe.id);

  // 2) update recipe View
  recipeView.update(modal.state.recipe);

  // 3) Render Bookmark
  bookMarkView.render(modal.state.bookmarks);
  // bookmarksView.render(model.state.bookmarks);
};

const constrolBookmarks = () => {
  bookMarkView.render(modal.state.bookmarks);
};

const controlAddRecipe = async newRecipe => {
  try {
    addRecipeView.renderSpinner();

    //Upload the new recipe datauploadRecipe
    await modal.uploadRecipe(newRecipe);
    console.log(modal.state.recipe);

    // Render recipe
    recipeView.render(modal.state.recipe);

    //sucess message
    addRecipeView.renderMeassage();

    // RenderbookMark view
    bookMarkView.render(modal.state.bookmarks);

    // Change Id url
    window.history.pushState(null, '', `#${modal.state.recipe.id}`);

    // Close form Window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('ing Format', `${err}`);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookMarkView.addHandlerRender(constrolBookmarks);
  recipeView.addHenderRender(controlRecipes);
  recipeView.addHendlerUpdateServings(controlServing);
  recipeView.addHenderAddBookmark(controlAddBookmark);
  searchView.addHendlerSearch(controlSearchResults);
  paginationView.addHendlerClick(controalPagenation);
  addRecipeView.addEventUpload(controlAddRecipe);
};
init();
