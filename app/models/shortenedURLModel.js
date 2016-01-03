var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var shortenedURLSchema = new Schema({
	"original_url" : String
});

shortenedURLSchema.plugin(autoIncrement.plugin, 'shortenedURL')

module.exports = mongoose.model('shortenedURL', shortenedURLSchema);