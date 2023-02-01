const router = require('express').Router();
const apiRoutes = require('.');

router.use('/api', apiRoutes);

//Need to add routes here

router.use('/api/users', apiRoutes);
//GET all users
//GET a single user by its _id and populated thought and friend data
//POST a new user
//PUT to update a user by its _id
//DELETE to remove user by its _id

router.use('/api/users/:userId/friends/:friendId');
//POST to add a new friend to a user's friend list
//DELETE to remove a friend from a user's friend list

router.use('/api/thoughts');
//GET to get all thoughts
//GET to get a single thought by its _id
//POST to create a new thought - push the created thought's _id to the associated user's thoughts array field
//PUT to update a thought by its _id
//DELETE to remove a thought by its _id

router.use('/api/thoughts/:thoughtId/reactions');
//POST to create a reaction stoed in a single thought's reactions array field
//DELETE to pull and remove a reaction by the reaction's reactionId value



router.use((req, res) => res.send('Wrong route!'));

module.exports = router;