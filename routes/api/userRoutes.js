const router = require('express').Router();
const {
    getAllUsers,
    getSingleUserById,
    createNewUser,
    updateUser,
    deleteUser,
    addNewFriend,
    getSingleFriend,
    removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createNewUser);

router.route('/:id').get(getSingleUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').get(getSingleFriend).post(addNewFriend).delete(removeFriend);

module.exports = router;