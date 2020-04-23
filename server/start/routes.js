'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(()=> {
//registration
  Route.post('auth/admin/register', 'AdminController.registerAdmin');
  Route.post('auth/register', 'AdminController.register').middleware('auth:admin');
//check
  Route.get('auth/admin/check', 'AdminController.check').middleware('auth:admin')// просто проверяю, кого оно возвращает
//login
  Route.post('auth/admin/login', 'AdminController.loginAdmin');
  Route.post('auth/login', 'UserController.login');
  Route.get('reviews', 'ReviewController.index').middleware('auth');
//get
  Route.get('get/admin/users/all', 'AdminController.getAllUsers').middleware('auth:admin')
})
  .prefix('api');
