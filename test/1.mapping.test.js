var transliteration = require('../lib/translit-for-url.cyr.js');


exports['A test']=function(test){
    test.equal(transliteration.transliterate('Авакадо'), 'avakado');
    test.done();
};


exports['Б test']=function(test){
    test.equal(transliteration.transliterate('Бяка'), 'byaka');
    test.equal(transliteration.transliterate('шуба'), 'shuba');
    test.done();
};

exports['В test']=function(test){
    test.equal(transliteration.transliterate('Виват'), 'vivat');
    test.done();
};

exports['Г test']=function(test){
    test.equal(transliteration.transliterate('Гагарин'), 'gagarin');
    test.equal(transliteration.transliterate('Игра'), 'igra');
    test.done();
};

exports['Д test']=function(test){
    test.equal(transliteration.transliterate('Дом'), 'dom');
    test.equal(transliteration.transliterate('Седина'), 'sedina');
    test.done();
};

exports['E test']=function(test){
    test.equal(transliteration.transliterate('Ель'), 'el');
    test.equal(transliteration.transliterate('Медведь'), 'medved');
    test.done();
};

exports['Ё test']=function(test){
    test.equal(transliteration.transliterate('Ёж'), 'ej');
    test.equal(transliteration.transliterate('Мёд'), 'med');
    test.done();
};

exports['Ж test']=function(test){
    test.equal(transliteration.transliterate('Жёлудь'), 'jelud');
    test.equal(transliteration.transliterate('Междометие'), 'mejdometie');
    test.done();
};

exports['З test']=function(test){
    test.equal(transliteration.transliterate('Звезда'), 'zvezda');
    test.done();
};

exports['И test']=function(test){
    test.equal(transliteration.transliterate('Извиваться'), 'izvivatsya');
    test.done();
};

exports['Й test']=function(test){
    test.equal(transliteration.transliterate('Йогурт'), 'yogurt');
    test.equal(transliteration.transliterate('Зайчик'), 'zaychik');
    test.done();
};

exports['К test']=function(test){
    test.equal(transliteration.transliterate('Кастрюля'), 'kastryulya');
    test.equal(transliteration.transliterate('Икар'), 'ikar');
    test.done();
};

exports['Л test']=function(test){
    test.equal(transliteration.transliterate('Ленин'), 'lenin');
    test.equal(transliteration.transliterate('Сталин'), 'stalin');
    test.done();
};

exports['М test']=function(test){
    test.equal(transliteration.transliterate('Мембрана'), 'membrana');
    test.done();
};

exports['Н test']=function(test){
    test.equal(transliteration.transliterate('Ненаглядный'), 'nenaglyadnyy');
    test.done();
};

exports['О test']=function(test){
    test.equal(transliteration.transliterate('Озорной'), 'ozornoy');
    test.done();
};

exports['П test']=function(test){
    test.equal(transliteration.transliterate('Перепел'), 'perepel');
    test.done();
};

exports['Р test']=function(test){
    test.equal(transliteration.transliterate('Реструктуризация'), 'restrukturizatsiya');
    test.done();
};

exports['С test']=function(test){
    test.equal(transliteration.transliterate('Суслик'), 'suslik');
    test.done();
};

exports['Т test']=function(test){
    test.equal(transliteration.transliterate('Трактор'), 'traktor');
    test.done();
};

exports['У test']=function(test){
    test.equal(transliteration.transliterate('Утро'), 'utro');
    test.equal(transliteration.transliterate('Промежуток'), 'promejutok');
    test.done();
};

exports['Ф test']=function(test){
    test.equal(transliteration.transliterate('Фишка'), 'fishka');
    test.equal(transliteration.transliterate('Уфа'), 'ufa');
    test.done();
};

exports['Х test']=function(test){
    test.equal(transliteration.transliterate('Хакер'), 'haker');
    test.equal(transliteration.transliterate('Уха'), 'uha');
    test.done();
};

exports['Ц test']=function(test){
    test.equal(transliteration.transliterate('Цветок'), 'tsvetok');
    test.equal(transliteration.transliterate('Соцветие'), 'sotsvetie');
    test.done();
};

exports['Ч test']=function(test){
    test.equal(transliteration.transliterate('Чача'), 'chacha');
    test.done();
};

exports['Ш test']=function(test){
    test.equal(transliteration.transliterate('Шишка'), 'shishka');
    test.done();
};

exports['Щ test']=function(test){
    test.equal(transliteration.transliterate('Щука'), 'shchuka');
    test.equal(transliteration.transliterate('Истощение'), 'istoshchenie');
    test.done();
};

exports['Ъ test']=function(test){
    test.equal(transliteration.transliterate('Ъ'), '');
    test.equal(transliteration.transliterate('Подъезд'), 'podezd');
    test.done();
};

exports['Ы test']=function(test){
    test.equal(transliteration.transliterate('Ы'), 'y');
    test.equal(transliteration.transliterate('Рыба'), 'ryba');
    test.done();
};

exports['Ь test']=function(test){
    test.equal(transliteration.transliterate('Ь'), '');
    test.equal(transliteration.transliterate('Сельдь'), 'seld');
    test.done();
};

exports['Э test']=function(test){
    test.equal(transliteration.transliterate('Этаж'), 'etaj');
    test.equal(transliteration.transliterate('Аэрофлот'), 'aeroflot');
    test.done();
};

exports['Ю test']=function(test){
    test.equal(transliteration.transliterate('Юг'), 'yug');
    test.equal(transliteration.transliterate('Утюг'), 'utyug');
    test.done();
};

exports['Я test']=function(test){
    test.equal(transliteration.transliterate('Ямайка'), 'yamayka');
    test.equal(transliteration.transliterate('Утятница'), 'utyatnitsa');
    test.done();
};
