const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend, 
  removeFriend,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router  
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);


// router.route('/:userId').get(getSingleUser).delete(deleteUser);
//GET a single user by its _id and populated thought and friend data

router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);

//POST to add a new friend to a user's friend list
//DELETE to remove a friend from a user's friend list

module.exports = router;