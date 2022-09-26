import { Router } from 'express';

const router: Router = Router();

// university APIs
router.use('/university', require('./university'))

module.exports = router