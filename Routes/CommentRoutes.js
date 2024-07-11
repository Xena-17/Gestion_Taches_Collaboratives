const express = require('express');
const router = express.Router();
const CommentController = require('../Controllers/CommentController');

router.get("/", (request, result) => {CommentController.getAllComment(request, result);});
router.get("/:id", (request, result) => {CommentController.getCommentById(request, result);});
router.post("/ ", (request, result) => {CommentController.addComment(request, result);});
router.patch("/:id", (request, result) => {CommentController.updateComment(request, result);});
router.delete("/:id", (request, result) => (CommentController).deleteCommentById(request, result));

module.exports = router;