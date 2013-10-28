var transliteration = require('../lib/translit-for-url.cyr.js');


exports['A test']=function(test){
    test.equal(transliteration.transliterate('Авакадо'), 'avakado');
    test.done();
};


exports['Б test']=function(test){
    test.equal(transliteration.transliterate('Бяка-бука'), 'byaka-buka');
    test.done();
};

exports['В test']=function(test){
    test.equal(transliteration.transliterate('Виват'), 'vivat');
    test.done();
};
