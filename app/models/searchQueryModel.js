var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var searchQuerySchema = new Schema({
	"queryTerm" : String,
	"queryResults" : Object,
	"queryDate"   : Date
});


module.exports = mongoose.model('searchQuery', searchQuerySchema);