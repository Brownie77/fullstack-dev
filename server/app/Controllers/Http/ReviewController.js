'use strict'
const Review = use('App/Models/Review');
const User = use('App/Models/User');
const AuthorizationService = use('App/Services/AuthorizationService');

class ReviewController {
  async index({params}) {
    const {user_id} = params;
        const user = await User.find(user_id)
        // const user = await auth.getUser() //это можно добавить к user controller, чтобы юзеры могли смотреть инфо про количество ревью и того или иного программиста
        console.log(user.username);
        return await user.reviews().fetch();//нужно переписать, чтобы можно было получать инфо о ревью тех, кого надо, а не по аутентификации.
    };
    async create({request}) {
      const {title, user_id, body } = request.all();
      const user = await User.find(user_id);
      const review = new Review();
      review.fill({
        title, 
        user_id, 
        body
      });
      await user.reviews().save(review);
      return review
    };
    //в реквесте ниже обязательно нужно указывать user id
    async destroy({response,request, params}) {
      const {user_id} = request.all();
      const user = await User.find(user_id);
      const {review_id} = params;
      const review = await Review.find(review_id);
      AuthorizationService.verifyPermission(review, user);
      await review.delete();
      return review;
    };

  async update({auth, request, params}){
    const {user_id} = request.all();
    const user = await User.find(user_id);
    const {review_id} = params;
    const review = await Review.find(review_id);
    AuthorizationService.verifyPermission(review, user);
    review.merge(request.only(['title', 'body']));
    await review.save();
    return review;
  }
}

module.exports = ReviewController
