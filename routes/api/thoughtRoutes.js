const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/students
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionsId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);





module.exports = router;