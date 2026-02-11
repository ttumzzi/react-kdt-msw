import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('/wines/:category', ({params}) => {
    const {category} = params;

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
