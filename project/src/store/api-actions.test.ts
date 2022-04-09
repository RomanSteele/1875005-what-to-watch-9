import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { datatype, lorem } from 'faker';
import { makeFakeFilmsItem, makeFakeFilmComments } from '../utils/mocks';
import { createApi } from '../services/api';
import { checkAuthAction, fetchFilmsAction, fetchPromoAction, loginAction, logoutAction, fetchCommentsAction, fetchMyListFilm, fetchSimilarFilmsAction, postComment, addMyListFilm } from './api-actions';
import { requireAuthorization } from './slices/user-data/user-data';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { loadFilms, loadPromoFilm, loadSimilarFilms, loadComments } from './slices/app-data/app-data';
import { loadMyListFilms, addComment } from './slices/action-data/action-data';


describe('Async actions', () => {
  const api = createApi();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);


  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());
  });


  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = { login: 'test@test.ru', password: '123456' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret' });


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('what-to-watch-token', 'secret');
  });

  it('should dispatch Load_Films when GET /films', async () => {
    const mockFilms = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadFilms.toString());
  });


  it('should dispatch Load_Promo_Films when GET /promoFilm', async () => {
    const mockPromoFilm = makeFakeFilmsItem();
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromoFilm);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadPromoFilm.toString());
  });


  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('what-to-watch-token');
  });


  it('should dispatch Load_Similar_Films when GET /similarFilms', async () => {
    const mockPromoFilms = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));
    const filmId = datatype.float({ min: 1, max: 10 });
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockPromoFilms);


    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchSimilarFilmsAction(filmId));
    expect(store.getActions().find(({ type }) => loadSimilarFilms.toString())).toBeDefined();
  });

  it('should dispatch Load_My_List_Films when GET /myListFilms', async () => {
    const mockMyListFilms = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockMyListFilms);


    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchMyListFilm());
    expect(store.getActions().find(({ type }) => loadMyListFilms.toString())).toBeDefined();
  });

  it('should dispatch Add_My_List_Film when GET /myListFilms', async () => {
    const mockMyListFilms = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));
    const id = datatype.float({ min: 1, max: 10 });
    const status = datatype.float({ min: 0, max: 1 });
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockMyListFilms);


    expect(store.getActions()).toEqual([]);
    await store.dispatch(addMyListFilm({ id, status }));
    expect(store.getActions().find(({ type }) => addMyListFilm.toString())).toBeDefined();
  });


  it('should dispatch Load_Film_Comments when GET /filmComments', async () => {
    const mockFilmsComments = new Array(3).fill(null).map(() => ({ makeFakeFilmComments }));
    const filmId = datatype.float({ min: 1, max: 10 });
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockFilmsComments);


    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchCommentsAction(filmId));
    expect(store.getActions().find(({ type }) => loadComments.toString())).toBeDefined();
  });


  it('should dispatch Post_Film_Comments when GET /postComments', async () => {
    const mockFilmsComments = new Array(3).fill(null).map(() => ({ makeFakeFilmComments }));
    const id = datatype.float({ min: 1, max: 10 });
    const comment = lorem.text();
    const rating = datatype.float({ min: 1, max: 10 });
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockFilmsComments);


    expect(store.getActions()).toEqual([]);
    await store.dispatch(postComment({ id, comment, rating }));
    expect(store.getActions().find(({ type }) => addComment.toString())).toBeDefined();
  });
});
