import express from 'express'
import {home,registration,login,contactData , userData}  from '../Controllers/auth_controller.js'
import validator from '../middlewares/validate_middleware.js'
import {User,Contact} from '../validators/auth_validator.js';
import userAuthMiddleware from '../middlewares/auth-middleware.js';
// import Contact from '../Models/contact_model.js';

// const app = express()
const router = express.Router(); // Create a router instance

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
// app.route('/').get(home)
// app.route('/registration').post(registration)
// app.route('/login').post(login)

router.route('/').get(home);
router.route('/registration').post(validator(User),registration);
router.route('/login').post(login);
router.route('/contact').post(validator(Contact),contactData);
router.route('/userData').get(userAuthMiddleware,userData)




// export default app;
export default router
