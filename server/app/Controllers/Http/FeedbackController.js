'use strict'

'use strict'
const Review = use('App/Models/Review');
const Feedback = use('App/Models/Feedback');
const AuthorizationService = use('App/Services/AuthorizationService');


class FeedbackController {
    async create({request, auth, params}) {
        const user = await auth.getUser();
        const {review_id} = params;
        const {body, user_id} = request.all();
        const review = await Review.find(review_id);
        const feedback = new Feedback();
        feedback.fill({
            body, 
            user_id,
            review_id,
        });
        await review.feedbacks().save(feedback);
        return feedback;
      };
      async index({params}) {
        const {review_id} = params;
            const review = await Review.find(review_id)
            // const user = await auth.getUser() //это можно добавить к user controller, чтобы юзеры могли смотреть инфо про количество ревью и того или иного программиста
            return await review.feedbacks().fetch();
        };
}

module.exports = FeedbackController
