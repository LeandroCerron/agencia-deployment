import express from 'express';
import {
    pagInicio,
    pagNosotros,
    pagTestimoniales,
    pagViajes,
    pagDetalleViajes
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', pagInicio);

router.get('/nosotros', pagNosotros);

router.get('/testimoniales', pagTestimoniales);

router.post('/testimoniales', guardarTestimonial);

router.get('/viajes', pagViajes);

router.get('/viajes/:slug', pagDetalleViajes);

export default router;