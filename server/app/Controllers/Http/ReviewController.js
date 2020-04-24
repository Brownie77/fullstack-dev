'use strict'
const Review = use('App/Models/Review');
const User = use('App/Models/User')
class ReviewController {
  async index({auth}) {
        const user = await auth.getUser()
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
    }
}

module.exports = ReviewController
