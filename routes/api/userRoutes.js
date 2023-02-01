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

//GET a single user by its _id and populated thought and friend data

// /api/users/:userId/friends/:friendId 

router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;