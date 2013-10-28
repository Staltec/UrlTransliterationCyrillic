var util=require('util'),
    assert=require('assert'),
    transliteration = require('../lib/translit-for-url.cyr.js');


exports['A test']=function(test){
    test.equal(transliteration.transliterate('Авакадо'), 'avakado');
    test.done();
};


