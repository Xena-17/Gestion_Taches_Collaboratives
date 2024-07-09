const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController');

router.get("/", (request, result) => {UserController.getAllUser(request, result);});
router.get("/:id", (request, result) => {UserController.getUserById(request, result);});
router.post("/ ", (request, result) => {UserController.addUser(request, result);});
router.patch("/:id", (request, result) => {UserController.updateUser(request, result);});
router.delete("/:id", (request, result) => (UserController).deleteUserById(request, result));

module.exports = router;
