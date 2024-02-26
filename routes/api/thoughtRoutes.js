const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    addNewReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

router
    .route('/:id')
    .get(getSingleThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

router.route('/:thoughtId/reactions').post(addNewReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;