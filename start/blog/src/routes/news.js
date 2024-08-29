const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

// khi nguoi dung truy cap vao /:slug thi se chay vao function handler show trong newsController 
router.use('/:slug', newsController.show)

// tuyen goc la /news can dua xuong cuoi cung de tranh truong hop /news/:slug bi hien thi truoc
router.use('/', newsController.index)

// khi co trang lien quan den news thi se dung router nay de xu ly 
// function handler thi viet trong newsController

module.exports = router;