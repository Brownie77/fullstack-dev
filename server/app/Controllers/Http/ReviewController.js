'use strict'

class ReviewController {
  async index({auth}) {
        const user = await auth.getUser()
        console.log(user.id);
        return await user.reviews().fetch();
    }
}

module.exports = ReviewController
