/* global describe, it, before, after, beforeEach, afterEach */
'use strict';

describe('JSON watcher', function () {
	var fs          = require('fs');
	var temp        = require('temp').track();
	var jsonWatcher = require('../index.js');

	var reversedPromise = function (promise) {
		return new Promise(function (resolve, reject) {
			promise.then(reject).catch(resolve);
		});
	};

	var jsonFile;

	before(function (done) {
		temp.open('testJsonWatcherJSON', function (error, info) {
			jsonFile = info;
			done(error);
		});
	});

	beforeEach(function (done) {
		fs.ftruncate(jsonFile.fd, 0, function (error) {
			if (error) { return done(error); }
			fs.write(jsonFile.fd, JSON.stringify({ fake: true }), 0, done);
		});
	});

	it('can be instanciated', function () {
		return jsonWatcher(jsonFile.path).then(function (watcher) { watcher.close(); });
	});

	it('cannot be instanciated with an invalid json path', function () {
		return Promise.all([
			reversedPromise(jsonWatcher()),
			reversedPromise(jsonWatcher(''))
		]);
	});

	it('emits a first change event', function (done) {
		jsonWatcher(jsonFile.path).then(function (watcher) {
			watcher.once('error', function (error) {
				watcher.close();
				done(error);
			}).once('change', function () {
				watcher.close();
				done();
			});
		}).catch(done);
	});

	it('emits a first error event', function (done) {
		jsonWatcher('.').then(function (watcher) {
			watcher.once('error', function () {
				watcher.close();
				done();
			}).once('change', function () {
				watcher.close();
				done('fail');
			});
		}).catch(done);
	});

	it('emits a change event on modified content', function (done) {
		jsonWatcher(jsonFile.path).then(function (watcher) {
			watcher.once('error', function (error) {
				watcher.close();
				done(error);
			}).once('change', function () {
				watcher.once('change', function () {
					watcher.close();
					done();
				});
			});
			setTimeout(function () {
				fs.write(jsonFile.fd, JSON.stringify({ fake: false }), 0);
			}, 10);
		}).catch(done);
	});

	it('does not emit a change event on unmodified content', function (done) {
		jsonWatcher(jsonFile.path).then(function (watcher) {
			watcher.once('error', function (error) {
				watcher.close();
				done(error);
			}).once('change', function () {
				watcher.once('change', function () {
					watcher.close();
					done('fail');
				});
			});
			setTimeout(function () {
				fs.write(jsonFile.fd, JSON.stringify({ fake: true }), 0);
			}, 10);
			setTimeout(function () {
				watcher.close();
				done();
			}, 30);
		}).catch(done);
	});

	it('emits an error event on badly modified content', function (done) {
		jsonWatcher(jsonFile.path).then(function (watcher) {
			watcher.once('change', function () {
				watcher.once('error', function () {
					watcher.close();
					done();
				});
			});
			setTimeout(function () {
				fs.write(jsonFile.fd, 'I\'m bad, I\'m baaaad!', 0);
			}, 10);
		}).catch(done);
	});
});
