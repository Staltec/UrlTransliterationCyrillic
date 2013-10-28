/*
* WARNING!
* This test should be run last!
* */

var transliteration = require('../lib/translit-for-url.cyr.js');


exports['Customization test']=function(test){
    transliteration.customize({
       '¶': 'p',
       '№': 'n',
       '@': '-at-',
       '.': '_'
    });
    test.equal(transliteration.transliterate('Параграф ¶'), 'paragraf_p');
    test.equal(transliteration.transliterate('Номер №'), 'nomer_n');
    test.equal(transliteration.transliterate('Почта mail@server.dom'), 'pochta_mail-at-server_dom');
    test.done();
};
