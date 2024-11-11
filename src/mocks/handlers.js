import { http, HttpResponse, delay } from 'msw'
import { WINE_CATEGORIES } from '../App';

export const winesHandler = {
  default: http.get('/wines/:category', async ({params}) => {
    const {category} = params;

    if(!WINE_CATEGORIES.includes(category)) {
        return new HttpResponse(null, { status: 400 });
    }

    await delay();

    return HttpResponse.json(new Array(10).fill({
        wine: category + ' wine',
        winery: category + ' winery',
        image:
          'https://www.alkovintages.com/wp-content/uploads/2019/09/dry-red.png',
        rating: {
          average: 4.0,
        },
      }).map((val, index) => ({...val, wine: val.wine + index})))
  }),
  fail_403: http.get('/wines/:category', async () => {
    return new HttpResponse(null, {status: 403})
  }),
  fail_500: http.get('/wines/:category', async () => {
    return new HttpResponse(null, {status: 500})
  }),
}
 
export const handlers = [winesHandler.default]
