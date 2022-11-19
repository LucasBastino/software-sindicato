import { Router } from 'express';
const router = Router();

/* Va a ir a buscar dentro de la carpeta views (siempre), porque su contenido es el renderizable y abre el index.ejs */
router.get('/', (req, res) => res.render('index', {titulo: 'mi primer sitio web'}));  

router.get('/form-ingreso-afiliado', (req, res) => res.render('form-ingreso-afiliado'));  

export default router;