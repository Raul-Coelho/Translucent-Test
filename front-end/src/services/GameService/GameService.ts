import { URL, axiosApi } from '../../env/desv.env';
import { Game } from '../../interfaces/GameInterface';

export default {
  async fetchGameCatalog(): Promise<Game[]> {
    try {
      const { data } = await axiosApi.get(`${URL}/gamesCatalog`);
      return data;
    } catch (error) {
      console.error('TC - error on the fetch games catalog', error);
      throw (error);
    }
  },

  async createNewRegister(game: Game) {
    try {
      const { data } = await axiosApi.post(`${URL}/gamesCatalog`, game);
      return data;
    } catch (error) {
      console.warn('TC - error on register game in service', error);
      throw (error);
    }
  },
};
