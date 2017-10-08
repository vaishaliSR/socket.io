'use strict';

var fs           = require('mz/fs');
var path         = require('path');
var EventEmitter = require('events');
var util         = require('util');
var _            = require('lodash');

var JsonWatcher = function (jsonPath) {
	if (!jsonPath) {
		throw new Error('json path argument is mandatory');
	}

	EventEmitter.call(this);

	jsonPath = path.isAbsolute(jsonPath) ?
		jsonPath : path.join(process.cwd(), jsonPath);

	var watcher = fs.watch(jsonPath);
	var that = this;
	var json = null;

	this.close = function () {
		watcher.close();
	};

	watcher.on('change', function () {
		fs.readFile(jsonPath).then(function (data) {
			var newJson = JSON.parse(data);
			if (!_.isEqual(newJson, json)) {
				json = newJson;
				that.emit('change', json);
			}
		}).catch(function (error) {
			that.emit('error', error);
		});
	});

	setImmediate(function () {
		watcher.emit('change');
	});
};
util.inherits(JsonWatcher, EventEmitter);

module.exports = function (jsonPath) {
	return new Promise(function (resolve, reject) {
		try {
			resolve(new JsonWatcher(jsonPath));
		} catch (error) {
			if (error.code === 'ENOENT') {
				fs.writeFile(jsonPath, JSON.stringify({}), function (error) {
					if (error) {
						reject(error);
					} else {
						resolve(new JsonWatcher(jsonPath));
					}
				});
			} else {
				reject(error);
			}
		}
	});
};
