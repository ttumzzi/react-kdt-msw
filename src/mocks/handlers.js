import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('/wines/:category', ({params}) => {
    const {category} = params;

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
]