import { Router, Request, Response, NextFunction } from 'express';
import { searchUniversities } from './handlers';
import { SearchQuery } from './types';

const router: Router = Router();

router.get('/search', async (req: Request<{}, {}, {}, SearchQuery>, res: Response, next: NextFunction) => {

  try {
    const { name, order = 'ASC' } = req.query
    const universities = await searchUniversities(name, order)
    res.send(universities);
    
  } catch (error) {
    next(error)
  }

});


module.exports = router