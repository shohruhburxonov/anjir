
    function anjir(){
        document.getElementById('big_photo').innerHTML = '<img src="./imgs/anjir_assorti.jpg">';
    }


    function shashlik(){
        document.getElementById('big_photo').innerHTML = '<img src="./imgs/shashlik_assorti.jpg">';
    }
    
    function salat(){
        document.getElementById('big_photo').innerHTML = '<img src="./imgs/anjir_salat.jpg">';
    }


    let menu = [
        {
            'name': 'Цезарь',
            'photo' : 'sezar.jpg',
            'sostav' : "Айсберг, куриные бонфиле, помидоры, сухарики, сыр, цезарь соус",
            'price' : 30
        },
        {
            'name': 'Американский',
            'photo' : 'amerikanskiy.jpg',
            'sostav' : 'Куриное мясо, марков, яйцо соленние огурцы, шампиньоны, кукуруза, майонез',
            'price' : 18
        },
        {
            'name': 'Французкий',
            'photo' : 'fransuskiy.jpg',
            'sostav' : 'Свекла, жаренная картошка, говяжoe мясо, маркoвь, яйцо, огурцы, капуста, майонез',
            'price' : 20
        },
        {
            'name': 'Харавац',
            'photo' : 'xaravat.jpg',
            'sostav' :'Баклажаны, болгариский перец, помидоры, чеснок',
            'price' : 23
        },
        {
            'name': 'Овощное ассорти',
            'photo' : 'ovoshnoy.jpg',
            'sostav' :'Помидоры, огурцы, зелень, петрушка, зеленний лук, перец, чеснок, редиска',
            'price' : 25
        },
        {
            'name': 'Свежий ассорти',
            'photo' : 'sveji.jpg',
            'sostav' :'Помидоры, огурцы, зелень, петрушка, зеленний лук, перец, чеснок',
            'price' : 15
        },
        {
            'name': 'Маринование ассорти',
            'photo' : 'marinovanniy.jpg',
            'sostav' :'Маринование помидоры и огурцы',
            'price' : 12
        },
        {
            'name': 'Винегрет',
            'photo' : 'vinegret.jpg',
            'sostav' :'Свекла, картошка, соленний капуста, горох, яйцо',
            'price' : 15
        },
        {
            'name': 'Греческий',
            'photo' : 'grecheskiy.jpg',
            'sostav' :'Айсберг, огурцы, помидоры, маслины, фитакса, красный лук, оливковое масло, лимон, балзамик соусом',
            'price' : 30
        },
        {
            'name': 'Анжир',
            'photo' : 'anjir_salat.jpg',
            'sostav' :'Айсберг, мёд, лимоновый сок, оливковое масло, фитакса, свеклаб черносливом и греческий орех',
            'price' : 23
        },
        {
            'name': 'Мужской каприз',
            'photo' : 'murskoy.jpg',
            'sostav' :'Индейка, колбаса копченая, кази, сир, майонез',
            'price' : 25
        },
        {
            'name': 'Сюзьма',
            'photo' : 'suzma.jpg',
            'sostav' :'Сюзьма и паприка',
            'price' : 6
        },
        {
            'name': 'Смак',
            'photo' : 'smak.jpg',
            'sostav' :'Помидоры, сир, сухапики, айсберг и специальной соусом для смака',
            'price' : 19
        },
        {
            'name': 'Зелень ассорти',
            'photo' : 'zelen.jpg',
            'sostav' :'Зелень, петрушка, зеленний лук, перец, чеснок, редиска',
            'price' : 6
        },
        {
            'name': 'Ачичук',
            'photo' : 'achichuk.jpg',
            'sostav' :'Помидоры, огурцы, лук',
            'price' : 10
        },
        {
            'name': 'Анкара',
            'photo' : 'ankara.jpg',
            'sostav' :'Говяжое мясо, соленние огурцы, горох, шапиньон, айсберг',
            'price' : 24
        },
        {
            'name': 'Мимоза',
            'photo' : 'mimoza.jpg',
            'sostav' :'Картошка, марковка, шпроты, яйцо, мойонез',
            'price' : 30
        },
        {
            'name': 'Японский',
            'photo' : 'yaponskiy.jpg',
            'sostav' :'Горкий салат с говяжий мясом, помидоры, огурцы, овощами, сойавим соусом',
            'price' : 25
        },
        {
            'name': 'Селёдка под шубой',
            'photo' : 'podShuba.jpg',
            'sostav' :'Свёкла, марков, яйцо, селёдка, картошка, майонез',
            'price' : 30
        },
        {
            'name': 'Весенний',
            'photo' : 'vesenniy.jpg',
            'sostav' :'Кефир, морковь, зелен',
            'price' : 7
        },
    ];

    for(i = 0; i < menu.length; i++){
        document.querySelector('#salad').innerHTML += `
        <div class="item_meat">
            <div class="zz">
                <div class="photo_meat">
                    <img src="./imgs/${menu[i]['photo']}" style="width: 310px;">
                    <div class="white_price">
                        <div class="price_meat">
                            <div>${menu[i]['price']}<span>000</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="name_meat">
                ${menu[i]['name']}
            </div>
            <div class="comment">
                ${menu[i]['sostav']}
            </div>
            <div class="button_meat">
                ЗАКАЗАТЬ
            </div>
        </div>`
    }


    let menu_meat = [
        {
            'name': 'Куза шурва',
            'photo' : 'kuza.jpg',
            'sostav' :'Национальный блюда узбекиский кухни очень вкусно и полезно',
            'price' : 32
        },
        {
            'name': 'Куриный суп',
            'photo' : 'kurinniy.jpg',
            'sostav' :'Куринний суп с овощами, с лапшой',
            'price' : 20
        },
        {
            'name': 'Хаш шурва',
            'photo' : 'hash.jpg',
            'sostav' :'Очень полезная суп хаш от говяжий мясом со чесноком и луком варится',
            'price' : 29
        },
        {
            'name': 'Кайнатма шурва',
            'photo' : 'qaynatma.jpg',
            'sostav' :'Национальный блюда варений суп баранины корейки с овощами',
            'price' : 29
        },
        {
            'name': 'Суп с фрекадельками',
            'photo' : 'frikadelka.jpg',
            'sostav' :'Суп со фрикадельками с лапшой',
            'price' : 20
        },
        {
            'name': 'Дум шурва',
            'photo' : 'dumShurva.jpg',
            'sostav' :'Национальный блюда варений суп с говяжей хвостью',
            'price' : 41
        },
        {
            'name': 'Мохора',
            'photo' : 'moxora.jpg',
            'sostav' :'Национальный блюда с горохом говяжий мясом овощами',
            'price' : 27
        },
        {
            'name': 'Пельмени',
            'photo' : 'chuchvara.jpg',
            'sostav' :'Национальный блюда с говяжий фаршом с тестом и бульоном',
            'price' : 30
        },
        {
            'name': 'Мастава',
            'photo' : 'mastava.jpg',
            'sostav' :'Национальная блюда говядина овощами, спецами, рисами очень яркий вкус',
            'price' : 24
        },
    ]



    for(i = 0; i < menu_meat.length; i++){
        document.querySelector('#first_meats').innerHTML += `
        <div class="item_meat">
            <div class="zz">
                <div class="photo_meat">
                    <img src="./imgs/${menu_meat[i]['photo']}" style="width: 310px;">
                    <div class="white_price">
                        <div class="price_meat">
                            <div>${menu_meat[i]['price']}<span>000</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="name_meat">
                ${menu_meat[i]['name']}
            </div>
            <div class="comment">
                ${menu_meat[i]['sostav']}
            </div>
            <div class="button_meat">
                ЗАКАЗАТЬ
            </div>
        </div>`
    }




    let second_meats = [
        {
            'name': 'Жиз Биз',
            'photo' : 'jizbiz.jpg',
            'sostav' :'Бараныное мясо с картошкой слегка поджаренная с спецами тушенная корочкой',
            'price' : 49
        },
        {
            'name': 'Анжир ассорти',
            'photo' : 'anjir_assorti.jpg',
            'sostav' :'Корейки, маталочка, хасип, молотой шашлык, куриное мясо, голупци и картошка',
            'price' : 216
        },
        {
            'name': 'Нохот шурак',
            'photo' : 'noxot.jpg',
            'sostav' :'Горох, баранины ребрах, кази, лук',
            'price' : 35
        },
        {
            'name': 'Норин порция',
            'photo' : 'norin.jpg',
            'sostav' :'Национальная блюда с специальном тестом, с мясом конина спецами',
            'price' : 25
        },
        {
            'name': 'Маталь',
            'photo' : 'matal.jpg',
            'sostav' :'Национальный блюда узбекиский кухни очень вкусно и полезно',
            'price' : 58
        },
        {
            'name': 'Казань кебаб',
            'photo' : 'qozon.jpg',
            'sostav' :'Национальная блюда с бараныной корейкой и с кортофелем',
            'price' : 50
        },
        {
            'name': 'Табака кг',
            'photo' : 'tabaka.jpg',
            'sostav' :'Табака запечённая приправыми чесноком',
            'price' : 75
        },
        {
            'name': 'Хоним',
            'photo' : 'xonim.jpg',
            'sostav' :'Национальная блюда узбекиские кухни очень тонкое тесто завёрнутное с картошкой мелкой нарезанной и луком',
            'price' : 21
        },
        {
            'name': 'Бифштекс',
            'photo' : 'bishteks.jpg',
            'sostav' :'Блюда 3 вида гарниром гречка, пюре, рисом и коклетами для бифштекса',
            'price' : 29
        },
        {
            'name': 'Манты 1шт',
            'photo' : 'bishteks.jpg',
            'sostav' :'Уйгурские манты тесто с бараныное мясо луком. Очень сочна и вкусно',
            'price' : 8
        },
        {
            'name': 'Бефстрогонов',
            'photo' : 'bestrogon.jpg',
            'sostav' :'Блюда с картошкой фри и говяжом мясом',
            'price' : 34
        },
        {
            'name': 'Хасип кг',
            'photo' : 'xasip.jpg',
            'sostav' :'Национальная блюда узбекиский кухни очень полезная еда',
            'price' : 70
        },
        {
            'name': 'Дум казан кабаб',
            'photo' : 'dum.jpg',
            'sostav' :'Национальная блюда говяжного думгаза с картошкой',
            'price' : 55
        },
        {
            'name': 'Тушёнка',
            'photo' : 'tushyonka.jpg',
            'sostav' :'Говяжое мясо тушенная в пару с спецами с бульоном',
            'price' : 32
        },
        {
            'name': 'Ош',
            'photo' : 'osh.jpg',
            'sostav' :'Национальная блюда свадебный плов говяжом бараниной марковка рис горохом изюмом со спецами',
            'price' : 30
        },
        {
            'name': 'Мошкичири',
            'photo' : 'moshkichiri.jpg',
            'sostav' :'Национальный блюда узбекиский кухни состав входит маш рис говядиналук варится 12 часов',
            'price' : 35
        },
        {
            'name': 'Халим',
            'photo' : 'halim.jpg',
            'sostav' :'Национальный блюда узбекиский кухни очень полезная еда',
            'price' : 35
        },
        {
            'name': 'Куриный казан кебаб',
            'photo' : 'tovuqQozon.jpg',
            'sostav' :'Национальный блюда курица с кртошкой слегка поджаренная тушенная блюда',
            'price' : 32
        },
        {
            'name': 'Жиз',
            'photo' : 'jiz.jpg',
            'sostav' :'Национальный блюда с баранний мясом слегка поджаренная тушенная мясо со спецами',
            'price' : 59
        },
        {
            'name': 'Шилпилдок',
            'photo' : 'shilpildoq.jpg',
            'sostav' :'Национальный блюда тесто с кониной бульоном',
            'price' : 57
        },
        {
            'name': 'Ассорти',
            'photo' : 'assorti.jpg',
            'sostav' :'Внутри блюда хасип, курица, молотой шашлык, голупци картошками',
            'price' : 49
        },
        {
            'name': 'Рыба судак',
            'photo' : 'sudak.jpg',
            'sostav' :'Рыба судак без косточек',
            'price' : '--'
        },
        {
            'name': 'Рыба сом',
            'photo' : 'som.jpg',
            'sostav' :'Сом рыба без косточек слегка жареные в  Кларе корочкой',
            'price' : '--'
        },
    ];

    for(i = 0; i < second_meats.length; i++){
        document.querySelector('#second_meats').innerHTML += `
        <div class="item_meat">
            <div class="zz">
                <div class="photo_meat">
                    <img src="./imgs/${second_meats[i]['photo']}" style="width: 310px;">
                    <div class="white_price">
                        <div class="price_meat">
                            <div>${second_meats[i]['price']}<span>000</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="name_meat">
                ${second_meats[i]['name']}
            </div>
            <div class="comment">
                ${second_meats[i]['sostav']}
            </div>
            <div class="button_meat">
                ЗАКАЗАТЬ
            </div>
        </div>`
    }



    let uygur_meats = [
        {
            'name': 'Жаренная лагман',
            'photo' : 'qovurma.jpg',
            'sostav' :'Говяжий мясо овощами спецами с тестом слегка поджаренная блюда',
            'price' : 34
        },
        {
            'name': 'Куриный сай',
            'photo' : 'tovuqSay.jpg',
            'sostav' :'Уйгурский блюда от куриного филе овощи китайский копуста специ и сойевий соус',
            'price' : 43
        },
        {
            'name': 'Айрим сай',
            'photo' : 'ayrimSay.jpg',
            'sostav' :'Уйгурская блюда с говяжного мясо с овощами тесто для лагмана',
            'price' : 38
        },
        {
            'name': 'Мясной сай',
            'photo' : 'goshtSay.jpg',
            'sostav' :'Уйгурский блюда с говядиной, овощами, спецами, соусом сойа',
            'price' : 55
        },
        {
            'name': 'Лагман уйгурски',
            'photo' : 'goshtSay.jpg',
            'sostav' :'Уйгурский блюда с говяжного мясо овощами, спецами и тесто для лагмана',
            'price' : 34
        },
        {
            'name': 'Гампан',
            'photo' : 'gampan.jpg',
            'sostav' :'Уйгурский блюда с говяжного мясо овощами спецами и гарниром рисом',
            'price' : 38
        },
        {
            'name': 'Сокоро',
            'photo' : 'sokoro.jpg',
            'sostav' :'Уйгурский блюда от говяжого мясо специями',
            'price' : 55
        },
        {
            'name': 'Дум сай',
            'photo' : 'dumSay.jpg',
            'sostav' :'Уйгурский блюда с говяжного думгаза овощами спецами',
            'price' : 55
        },
        {
            'name': 'Сумборо',
            'photo' : 'sumboro.jpg',
            'sostav' :'Уйгурский блюда с говяжного мясо спецами луком',
            'price' : 55
        },
        {
            'name': 'Тухум сай',
            'photo' : 'tuxumSay.png',
            'sostav' :'Уйгурский блюда с яйцом, овощами, спецами, соусом сойа',
            'price' : 55
        },
    ]
    


    for(i = 0; i < uygur_meats.length; i++){
        document.querySelector('#uygur_meats').innerHTML += `
        <div class="item_meat">
            <div class="zz">
                <div class="photo_meat">
                    <img src="./imgs/${uygur_meats[i]['photo']}" style="width: 310px;">
                    <div class="white_price">
                        <div class="price_meat">
                            <div>${uygur_meats[i]['price']}<span>000</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="name_meat">
                ${uygur_meats[i]['name']}
            </div>
            <div class="comment">
                ${uygur_meats[i]['sostav']}
            </div>
            <div class="button_meat">
                ЗАКАЗАТЬ
            </div>
        </div>`
    };



    let shashlikk = [
        {
            'name': 'Молотый',
            'photo' : 'qiyma.jpg',
            'sostav' :'Шашлык из фарша говядиналуком панирочные сухарики и приправы',
            'price' : 13
        },
        {
            'name': 'Жаз',
            'photo' : 'jaz.jpg',
            'sostav' :'Шашлык из  говядина и баранина мясо маринованние со спецами',
            'price' : 16
        },
        {
            'name': 'Рыба',
            'photo' : 'baliq.jpg',
            'sostav' :'Шашалык рыбный от сомного филе сочний мягкий нежный вкус',
            'price' : 13
        },
        {
            'name': 'Куринний крилишки',
            'photo' : 'krilishka.jpg',
            'sostav' :'Шашлык из куриного крилишек, очень сочно и вкусно',
            'price' : 28
        },
        {
            'name': 'Куриный',
            'photo' : 'tovuq.jpg',
            'sostav' :'Шашлык очень сочний и вкусно блогодаря мариноки',
            'price' : 13
        },
        {
            'name': 'Корейка из баранина',
            'photo' : 'koreyka.jpg',
            'sostav' :'Шашлык от корейки баранина очень сочно и вкусно блогодаря мариноки специ',
            'price' : 41
        },
        {
            'name': 'Шашлык ассорти',
            'photo' : 'shashlik_assorti.jpg',
            'sostav' :'Кусковой 2шт, молотой 2шт, куриный 2шт, рыбный 2шт, крилишки 1шт, корейка 1шт, овощной 2шт, люля кабаб 2шт',
            'price' : 280
        },
    ];


    for(i = 0; i < shashlikk.length; i++){
        document.querySelector('#shashlik').innerHTML += `
        <div class="item_meat">
            <div class="zz">
                <div class="photo_meat">
                    <img src="./imgs/${shashlikk[i]['photo']}" style="width: 310px;">
                    <div class="white_price">
                        <div class="price_meat">
                            <div>${shashlikk[i]['price']}<span>000</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="name_meat">
                ${shashlikk[i]['name']}
            </div>
            <div class="comment">
                ${shashlikk[i]['sostav']}
            </div>
            <div class="button_meat">
                ЗАКАЗАТЬ
            </div>
        </div>`
    };


    
