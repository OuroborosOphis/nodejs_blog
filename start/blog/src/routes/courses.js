const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
// sua du lieu trong database
router.put('/:id', courseController.update)

// xoa du lieu trong database
router.delete('/:id', courseController.delete)

router.get('/:slug', courseController.show)

module.exports = router;