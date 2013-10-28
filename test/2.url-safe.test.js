var transliteration = require('../lib/translit-for-url.cyr.js');


exports['Russian phrase test']=function(test){
    test.equal(transliteration.transliterate('Есть женщины в русских селеньях.'), 'est_jenshchiny_v_russkih_selenyah');
    test.done();
};


exports['Space trim test']=function(test){
    test.equal(transliteration.transliterate('   Пробелы   впереди  и сзади   '), 'probely_vperedi_i_szadi');
    test.done();
};


exports['Minus trim test']=function(test){
    test.equal(transliteration.transliterate('--Дефисы -- впереди -  и сзади - --'), 'defisy-vperedi-i_szadi');
    test.done();
};


exports['Plus test']=function(test){
    test.equal(transliteration.transliterate('+Плюс + на ++ минус ++'), 'plyus-na-minus');
    test.done();
};


exports['Underscore trim test']=function(test){
    test.equal(transliteration.transliterate('__Подчёркивание __ впереди и сзади __ _'), 'podcherkivanie_vperedi_i_szadi');
    test.done();
};


exports['Numbers test']=function(test){
    test.equal(transliteration.transliterate('Цыфры 0, 1 до 9 и даже 42! '), 'tsyfry_0_1_do_9_i_daje_42');
    test.done();
};


exports['Dash characters test']=function(test){
    test.equal(transliteration.transliterate('Дефис – и тире — это серьёзно.'), 'defis-i_tire-eto_serezno');
    test.done();
};


exports['Special characters test']=function(test){
    test.equal(transliteration.transliterate('Спецсимволы ¶, №, & * % @ # ? ^ ` /  : должны отсутствовать'), 'spetssimvoly_doljny_otsutstvovat');
    test.done();
};


exports['Special character &times; test']=function(test){
    test.equal(transliteration.transliterate('Спецсимвол × должны стать x'), 'spetssimvol_x_doljny_stat_x');
    test.done();
};

