const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
// sua du lieu trong database
router.put('/:id', courseController.update)

// khoi phuc du lieu trong database
router.patch('/:id/restore', courseController.restore)

// xoa du lieu trong database
router.delete('/:id', courseController.delete)

// xoa vinh vien
router.delete('/:id/force', courseController.forceDelete)

router.get('/:slug', courseController.show)

module.exports = router;