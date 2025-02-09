const {Router} = require('express');

const router = Router();


// create url
router.post("/api/url/create", urlController.createURL);

// delete url 
router.delete(`api/url/:id`,urlController.deleteURL);


// todo -- get url