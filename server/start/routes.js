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
  //get all users review
  Route.get('reviews:user_id', 'ReviewController.index').middleware('auth');
//get all users 
  Route.get('get/admin/users/all', 'AdminController.getAllUsers').middleware('auth:admin')
//add review
Route.post('admin/review', 'ReviewController.create').middleware('auth:admin')
//assign employees to participate in another employee's performance review
Route.post('admin/review/add/:user_id','ReviewController.addToReview').middleware('auth:admin')
//delete review
Route.delete('admin/review:review_id','ReviewController.destroy').middleware('auth:admin')
//update review
Route.patch('admin/review:review_id','ReviewController.update').middleware('auth:admin')
//task create
Route.post('review/:review_id/tasks', 'FeedbackController.create').middleware('auth')
//show all feedback on select 
Route.get('review/:review_id/tasks', 'FeedbackController.index').middleware('auth')

})
  .prefix('api');
