import { http, HttpResponse, delay } from 'msw'
import { WINE_CATEGORIES } from '../App';
 
export const handlers = [
  http.get('/wines/:category', async ({params}) => {
    const {category} = params;

    if(!WINE_CATEGORIES.includes(category)) {
        return new HttpResponse(null, { status: 400 });
    }

    await delay();

    return HttpResponse.json(new Array(10).fill({
        wine: category + ' wine',
        winery: category + ' winery',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauZtkgM-qHabDT4LGuEX76FctGL0hi78Kog&s',
        rating: {
          average: 4.0,
        },
      }).map((val, index) => ({...val, wine: val.wine + index})))
  }),
]
