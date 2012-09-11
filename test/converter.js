var assert = require('assert')
  , gm = require('gm')
  , fs = require('fs')
  , IMGR = require('../').IMGR;

var images = __dirname + '/images/'
  , tmp = __dirname + '/tmp/';

var imgr = new IMGR;

describe('Converter', function () {

    it('should copy images when no resize/crop/optimisation is specified', function (done) {
        imgr.load(images + '1.jpg')
            .save(tmp + '1-copy.jpg', function (err) {
                assert(!err, err);
                fs.stat(tmp + '1-copy.jpg', function (err, file) {
                    assert(!err, err);
                    assert.equal(file.size, 70096, 'File was not copied');
                    done();
                });
            });
    });

    it('should create the output directory if it doesn\'t exist', function (done) {
        imgr.load(images + '1.jpg')
            .save(tmp + 'some/nested/dir/1-copy.jpg', function (err) {
                assert(!err, err);
                fs.stat(tmp + 'some/nested/dir/1-copy.jpg', function (err, file) {
                    assert(!err, err);
                    assert.equal(file.size, 70096, 'File was not copied');
                    done();
                });
            });
        done();
    });

    it('should resize to an exact width', function (done) {
        //TODO
        done();
    });

    it('should resize to an exact height', function (done) {
        //TODO
        done();
    });

    it('should resize by a factor', function (done) {
        //TODO
        done();
    });

    it('should resize adaptively with aspect ratio > 1', function (done) {
        //TODO
        done();
    });

    it('should resize adaptively with aspect ratio < 1', function (done) {
        //TODO
        done();
    });

});
