const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const ejs = require('ejs');
const multer = require('multer');

const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/upload/',
    filename: function(req, file, cb){
        cb(null, path.basename(file.originalname,path.extname(file.originalname)) + "-" + Date.now() + path.extname(file.originalname));
    }
});

// Init Upload 
const upload = multer({
    storage: storage
}).single('myImage');

app.post('/upload',(req, res) => {
    upload(req, res, (err) => {
        if(err) {
            res.render('index', {
                status: 'danger',
                msg: err
            })
        } else {
            console.log(req.file);
            if(req.file == undefined) {
                res.render('index', {
                    status: 'danger',
                    msg: 'Error: No File Selected!'
                });
            } else {
                res.render('index', {
                    status: 'success',
                    msg: 'File Uploaded!',
                    msg2: 'Here is what u uploaded:',
                    file: `upload/${req.file.filename}`
                });
            }
        }

    });
});

// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Router
app.use('/api/picture', require('./route/api/picture'));

// Port & Listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));