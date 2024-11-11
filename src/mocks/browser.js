import { setupWorker } from 'msw/browser'
import { handlers, winesHandler } from './handlers'
 
export const worker = setupWorker(...handlers)

// worker.use(winesHandler.fail_403);
worker.use(winesHandler.fail_500);