// filename: mahasiswaContoller.js

// import mahasiswa model
Mahasiswa = require('./mahasiswaModel');

// handle index action
exports.index = function (req, res) {
    Mahasiswa.get(function (err, mahasiswa) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Data Mahasiswa Berhasil Didapatkan",
            data: mahasiswa
        });
    });
};

// handle create mahasiswa action
exports.new = function (req, res) {
    var mahasiswa = new Mahasiswa();
    mahasiswa.nim       = req.body.nim ? req.body.nim : mahasiswa.nim;
    mahasiswa.nama      = req.body.nama;
    mahasiswa.jurusan   = req.body.jurusan;
    mahasiswa.semester  = req.body.semester;

    // save the mahasiswa and check for error
    mahasiswa.save(function (err) {
        // if (err)
        // res.json(err);
        res.json({
            message: 'Mahasiswa Baru Terdaftar!',
            data: mahasiswa
        });
    });
};

// handle view mahasisiswa info
exports.view = function (req, res) {
    Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if (err)
            res.send(err);
        res.json({
            message: 'Mahasiswa Detail Loading!',
            data: mahasiswa
        });
    });
};

// handle update data mahasiswa
exports.update = function (req, res) {
    Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if (err)
            res.send(err);

        mahasiswa.nim       = req.body.nim ? req.body.nim : mahasiswa.nim;
        mahasiswa.nama      = req.body.nama;
        mahasiswa.jurusan   = req.body.jurusan;
        mahasiswa.semester  = req.body.semester;

        // save mahasiswa and check for error
        mahasiswa.save(function (err) {
            if (err)
                req.json(err);
            res.json({
                message: 'Mahasiswa Info Updated!',
                data: mahasiswa
            });
        });
    });
};

// handle delete data mahasiswa
exports.delete = function (req, res) {
    Mahasiswa.remove({
        _id: req.params.mahasiswa_id
    }, function (err, mahasiswa) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Mahasiswa Deleted!'
        });
    });
};