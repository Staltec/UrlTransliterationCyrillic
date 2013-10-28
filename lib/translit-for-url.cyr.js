/**
 * (c) 2013 Staltec (http://www.staltec.com).
 * May be freely distributed under the MIT license.
 */

"use strict";

var validChars = /[a-z0-9_-]/;

var mapping = {
    // Letters.
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'ж': 'j',
    'з': 'z',
    'и': 'i',
    'й': 'y',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ъ': '',
    'ы': 'y',
    'ь': '',
    'э': 'e',
    'ю': 'yu',
    'я': 'ya',

    // Special character
    ' ': '_',
    '+': '-',
    '–': '-',
    '—': '-',
    '×': 'x'
};


exports.customize = function(maps){
    for (var m in maps) if(maps.hasOwnProperty(m)) {
        mapping[m] = maps[m];
    }
}


exports.transliterate = function(word){
    var transliterated = '';

    if(word){
        word = word.toLowerCase();

        for(var i=0; i < word.length; i++){
            var character = word[i];
            var mappedChar = mapping[character];

            character = mappedChar ? mappedChar : character;

            if( validChars.test(character) ){
                transliterated += character;
            }

        }
    }

    transliterated = transliterated
        .replace(/_+/g, '_')
        .replace(/-+/g, '-')
        .replace(/_+-/g, '-')
        .replace(/-_+/g, '-')
        .replace(/^(-|_)+/g, '')
        .replace(/(-|_)+$/g, '')
    ;

    return transliterated;
}