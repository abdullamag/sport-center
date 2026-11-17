// Ассортимент. Новый товар = новый объект в этом списке.
var CLOTHES = ['M', 'L', 'XL', 'XXL', '3XL'];
var SHOES = ['39', '40', '41', '42', '43', '44'];

// Примерочная: манекен на подиуме. Каждый образ — своё видео с тем же манекеном и той же сценой.
// Новый образ = ещё один объект: video, poster, name и (по желанию) look — id готового образа ниже.
window.RUNWAY = [
  { id: 'black', name: 'Total black', video: 'video/mannequin-1.mp4?v=1794318265', poster: 'video/mannequin-1.jpg?v=1794318265', look: 'look-black' },
  { id: 'brown', name: 'Поло и карго', video: 'video/mannequin-2.mp4?v=1794318265', poster: 'video/mannequin-2.jpg?v=1794318265', look: 'look-brown' }
];

// Стиль «Орнамент»: общий кадр, камера наезжает на одного человека, свайп — к следующему.
// cx — центр человека по горизонтали, top/bot — макушка и подошвы (пиксели исходника).
window.SCENE = {
  img: 'img/scene-2.jpg?v=3', hd: 'img/scene-3.jpg', w: 1672, h: 1561,
  people: [
    { look: 'look-windbreaker', cx: 446, top: 758, bot: 1198 },
    { look: 'look-windbreaker-grey', cx: 610, top: 892, bot: 1212 },
    { look: 'look-suit', cx: 756, top: 760, bot: 1165 },
    { look: 'look-zipnavy', cx: 955, top: 746, bot: 1112 },
    { look: 'look-zipgrey', cx: 1078, top: 936, bot: 1235 },
    { look: 'look-horse', cx: 1214, top: 786, bot: 1168 }
  ]
};

// Розыгрыш: показывается первым блоком над акциями. ends — дата итогов (по Москве).
window.GIVEAWAY = {
  prize: 'iPhone 18 Pro', color: 'Бургунди', per: 5000,
  ends: '2026-12-31T20:00:00+03:00', endsText: '31 декабря'
};

// Акции. store: 'ksp' | 'kz' | 'all'. Бесплатными становятся самые дешёвые вещи из подходящих.
window.PROMOS = [
  {
    id: 'tee-1plus3',
    badge: '1+3',
    title: 'Три футболки в подарок',
    text: 'Покупаете одну футболку — ещё три бесплатно.',
    cat: 'Футболки',
    buy: 1, free: 3,
    unit: ['футболку', 'футболки', 'футболок'],
    store: 'ksp'
  }
];

// Готовые образы: набор товаров из списка ниже, каждый в своём цвете.
window.LOOKS = [
  {
    id: 'look-brown',
    name: 'Джемпер, серые брюки и кеды',
    photos: ['img/look-brown-1.jpg', 'img/look-brown-2.jpg', 'img/sneakers-croco-1.jpg', 'img/trousers-grey-1.jpg'],
    items: [
      { id: 'masculino-jumper', color: 'Терракотовый' },
      { id: 'bottino-trousers-grey', color: 'Серый' },
      { id: 'sneakers-croco', color: 'Сине-серый' }
    ]
  },
  {
    id: 'look-black',
    name: 'Пуховик, карго и кеды',
    photos: ['img/look-black-1.jpg', 'img/puffer-1.jpg', 'img/puffer-2.jpg', 'img/cargo-black-1.jpg', 'img/sneakers-navy-1.jpg'],
    items: [
      { id: 'puffer-hooded', color: 'Чёрный' },
      { id: 'bottino-cargo-black', color: 'Чёрный' },
      { id: 'sneakers-navy', color: 'Тёмно-синий' }
    ]
  },
  {
    id: 'look-horse',
    name: 'Лонгслив с конём и джоггеры',
    photos: ['img/look-horse-1.jpg'],
    items: [
      { id: 'longsleeve-horse', color: 'Бордовый' },
      { id: 'joggers-orange', color: 'Чёрный' },
      { id: 'sneakers-ribbed', color: 'Графит' }
    ]
  },
  {
    id: 'look-zipgrey',
    name: 'Светлый кардиган и чёрные джинсы',
    photos: ['img/look-zipgrey-1.jpg'],
    items: [
      { id: 'zip-knit', color: 'Светло-серый' },
      { id: 'jeans-straight', color: 'Чёрный' },
      { id: 'sneakers-ring', color: 'Тёмно-синий' }
    ]
  },
  {
    id: 'look-zipnavy',
    name: 'Тёмный кардиган и индиго',
    photos: ['img/look-zipnavy-1.jpg'],
    items: [
      { id: 'zip-knit', color: 'Тёмно-синий' },
      { id: 'jeans-straight', color: 'Индиго' },
      { id: 'sneakers-suede', color: 'Тёмно-синий' }
    ]
  },
  {
    id: 'look-suit',
    name: 'Серый костюм с бордовым капюшоном',
    photos: ['img/look-suit-1.jpg'],
    items: [
      { id: 'suit-hood', color: 'Серый меланж' },
      { id: 'sneakers-knit', color: 'Бордовый' }
    ]
  },
  {
    id: 'look-windbreaker',
    name: 'Чёрная ветровка',
    photos: ['img/windbreaker-black-1.jpg?v=2'],
    items: [
      { id: 'windbreaker-suit', color: 'Чёрный' },
      { id: 'sneakers-runner', color: 'Чёрный' }
    ]
  },
  {
    id: 'look-windbreaker-grey',
    name: 'Графитовая ветровка',
    photos: ['img/windbreaker-grey-1.jpg?v=2'],
    items: [
      { id: 'windbreaker-suit', color: 'Графитовый' },
      { id: 'sneakers-runner', color: 'Серый' }
    ]
  }
];

window.PRODUCTS = [
  {
    id: 'tee-zeidan',
    cat: 'Футболки',
    name: 'Футболка Zeidan',
    price: 1500,
    desc: 'Гладкий плотный хлопок, светло-серая окантовка ворота и рукавов — эффект двух футболок.',
    sizes: CLOTHES,
    colors: [
      { name: 'Терракотовый', hex: '#7A2E1A', photo: 0 },
      { name: 'Бордовый', hex: '#4B1A24', photo: 0 },
      { name: 'Чёрный', hex: '#15171C', photo: 0 },
      { name: 'Коричневый', hex: '#7A4A2A', photo: 0 }
    ],
    photos: ['img/tee-zeidan-1.jpg']
  },
  {
    id: 'tee-patch',
    cat: 'Футболки',
    name: 'Футболка с нашивкой',
    price: 1500,
    desc: 'Мягкий хлопок, круглая нашивка на груди и яркий оранжевый кант по вороту и рукавам.',
    sizes: CLOTHES,
    colors: [
      { name: 'Оранжевый', hex: '#C8683A', photo: 0 },
      { name: 'Чёрный', hex: '#15171C', photo: 0 },
      { name: 'Графит', hex: '#55565E', photo: 0 }
    ],
    photos: ['img/tee-patch-1.jpg']
  },
  {
    id: 'tee-logo',
    cat: 'Футболки',
    name: 'Футболка с вышивкой',
    price: 1500,
    desc: 'Тёмная футболка с крупной объёмной вышивкой на груди и нашивкой на рукаве.',
    sizes: CLOTHES,
    colors: [{ name: 'Тёмно-синий', hex: '#171B26', photo: 0 }],
    photos: ['img/tee-logo-1.jpg']
  },
  {
    id: 'tee-bigprint',
    cat: 'Футболки',
    name: 'Футболка с крупным принтом',
    price: 1500,
    desc: 'Свободный крой, крупный принт с узором на груди.',
    sizes: CLOTHES,
    colors: [
      { name: 'Бордовый', hex: '#4E1C26', photo: 0 },
      { name: 'Белый', hex: '#F4F2EE', photo: 0 }
    ],
    photos: ['img/tee-bigprint-1.jpg']
  },
  {
    id: 'tee-print',
    cat: 'Футболки',
    name: 'Футболка с принтом',
    price: 1990,
    desc: 'Свободная футболка из плотного хлопка: вышивка на груди и крупный рисованный принт на спине. Четыре расцветки.',
    sizes: CLOTHES,
    colors: [
      { name: 'Чёрный', hex: '#15171C', photo: 0 },
      { name: 'Бордовый', hex: '#4A1D24', photo: 1 },
      { name: 'Голубой', hex: '#A9C2DA', photo: 2 },
      { name: 'Белый', hex: '#F4F2EE', photo: 3 }
    ],
    photos: ['img/tee-black.jpg', 'img/tee-burgundy.jpg', 'img/tee-blue.jpg', 'img/tee-white.jpg']
  },
  {
    id: 'puffer-hooded',
    cat: 'Куртки',
    name: 'Пуховик с капюшоном',
    price: 9990,
    desc: 'Тёплая куртка с капюшоном, накладными карманами и застёжкой на молнию и кнопки.',
    sizes: CLOTHES,
    colors: [
      { name: 'Чёрный', hex: '#111111', photo: 0 },
      { name: 'Бежевый', hex: '#CBBFAE' }
    ],
    photos: ['img/puffer-1.jpg', 'img/puffer-2.jpg', 'img/sneakers-navy-1.jpg', 'img/look-black-1.jpg']
  },
  {
    id: 'sneakers-croco',
    cat: 'Обувь',
    name: 'Кеды с тиснением',
    price: 4990,
    desc: 'Кожаные кеды с тиснением под рептилию, контрастным задником и высокой подошвой.',
    sizes: SHOES,
    colors: [{ name: 'Сине-серый', hex: '#4E6377', photo: 0 }],
    photos: ['img/sneakers-croco-1.jpg', 'img/look-brown-1.jpg']
  },
  {
    id: 'sneakers-check',
    cat: 'Обувь',
    name: 'Кеды с клетчатой фактурой',
    price: 5490,
    desc: 'Кожаные кеды с тиснением в клетку, белой подошвой и бордовой вставкой на пятке.',
    sizes: SHOES,
    colors: [{ name: 'Тёмно-синий', hex: '#1E2A44', photo: 0 }],
    photos: ['img/sneakers-check-1.jpg', 'img/sneakers-check-2.jpg', 'img/sneakers-check-3.jpg']
  },
  {
    id: 'sneakers-navy',
    cat: 'Обувь',
    name: 'Кеды кожаные',
    price: 4990,
    desc: 'Кеды из зернистой кожи с молочными вставками и тёмной подошвой.',
    sizes: SHOES,
    colors: [{ name: 'Тёмно-синий', hex: '#1B2233', photo: 0 }],
    photos: ['img/sneakers-navy-1.jpg', 'img/look-black-1.jpg']
  },
  {
    id: 'masculino-jumper',
    cat: 'Джемперы',
    name: 'Джемпер Masculino',
    price: 3490,
    desc: 'Базовый джемпер с воротником, комфортной посадкой и аккуратной контрастной окантовкой.',
    sizes: CLOTHES,
    colors: [
      { name: 'Терракотовый', hex: '#8A4530', photo: 1 },
      { name: 'Тёмно-синий', hex: '#1B2233', photo: 2 },
      { name: 'Чёрный', hex: '#111111', photo: 3 },
      { name: 'Коричневый', hex: '#5A4330', photo: 4 }
    ],
    photos: ['img/masculino-1.jpg', 'img/masculino-2.jpg', 'img/masculino-3.jpg', 'img/masculino-4.jpg', 'img/masculino-5.jpg', 'img/look-brown-2.jpg']
  },
  {
    id: 'bottino-cardigan',
    cat: 'Кардиганы',
    name: 'Кардиган Bottino',
    price: 3690,
    desc: 'Фактурная вязка, высокий воротник и удобная застёжка на молнии. Практичная базовая модель для повседневных образов.',
    sizes: CLOTHES,
    colors: [
      { name: 'Бежевый', hex: '#D9D2C7', photo: 0 },
      { name: 'Тёмно-синий', hex: '#1B2233', photo: 1 }
    ],
    photos: ['img/botino-1.jpg', 'img/botino-2.jpg']
  },
  {
    id: 'bottino-trousers-grey',
    cat: 'Брюки',
    name: 'Брюки Bottino',
    price: 3490,
    desc: 'Брюки на эластичном поясе со шнурком и накладным карманом на пуговице.',
    sizes: CLOTHES,
    colors: [{ name: 'Серый', hex: '#9A948C', photo: 0 }],
    photos: ['img/trousers-grey-1.jpg', 'img/look-brown-1.jpg']
  },
  {
    id: 'bottino-cargo-black',
    cat: 'Брюки',
    name: 'Брюки-карго Bottino',
    price: 3490,
    desc: 'Карго на эластичном поясе со шнурком и двумя накладными карманами.',
    sizes: CLOTHES,
    colors: [{ name: 'Чёрный', hex: '#111111', photo: 0 }],
    photos: ['img/cargo-black-1.jpg', 'img/look-black-1.jpg']
  },
  {
    id: 'longsleeve-horse',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Лонгсливы',
    name: 'Лонгслив с вышитым конём',
    price: 2990,
    desc: 'Плотный гладкий хлопок, объёмная вышивка с переходом цвета и контрастная окантовка ворота.',
    sizes: CLOTHES,
    colors: [{ name: 'Бордовый', hex: '#5E1F27', photo: 0 }],
    photos: ['img/look-horse-1.jpg']
  },
  {
    id: 'joggers-orange',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Брюки',
    name: 'Джоггеры с контрастным поясом',
    price: 3490,
    desc: 'Мягкий трикотаж, широкий пояс с оранжевым кантом и накладной карман на молнии.',
    sizes: CLOTHES,
    colors: [{ name: 'Чёрный', hex: '#14161B', photo: 0 }],
    photos: ['img/look-horse-1.jpg']
  },
  {
    id: 'sneakers-ribbed',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Обувь',
    name: 'Кроссовки на рифлёной подошве',
    price: 5990,
    desc: 'Сетка и замша, лёгкая рифлёная подошва с ярким оранжевым элементом.',
    sizes: SHOES,
    colors: [{ name: 'Графит', hex: '#4A4C50', photo: 0 }],
    photos: ['img/look-horse-1.jpg']
  },
  {
    id: 'zip-knit',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Кардиганы',
    name: 'Кардиган на молнии с надписью',
    price: 3990,
    desc: 'Тонкая шерстяная вязка, высокий воротник с вязаной надписью, полосатые манжеты и низ.',
    sizes: CLOTHES,
    colors: [
      { name: 'Светло-серый', hex: '#C9CACC', photo: 0 },
      { name: 'Тёмно-синий', hex: '#161B2B', photo: 1 }
    ],
    photos: ['img/look-zipgrey-1.jpg', 'img/look-zipnavy-1.jpg']
  },
  {
    id: 'jeans-straight',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Брюки',
    name: 'Джинсы прямые',
    price: 3490,
    desc: 'Плотный деним с контрастной строчкой, классическая посадка и прямой крой.',
    sizes: CLOTHES,
    colors: [
      { name: 'Чёрный', hex: '#16171B', photo: 0 },
      { name: 'Индиго', hex: '#22283F', photo: 1 }
    ],
    photos: ['img/look-zipgrey-1.jpg', 'img/look-zipnavy-1.jpg']
  },
  {
    id: 'sneakers-ring',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Обувь',
    name: 'Кеды с белой эмблемой',
    price: 4990,
    desc: 'Гладкая кожа и замша, рельефная белая эмблема сбоку и молочная подошва.',
    sizes: SHOES,
    colors: [{ name: 'Тёмно-синий', hex: '#1C2238', photo: 0 }],
    photos: ['img/look-zipgrey-1.jpg']
  },
  {
    id: 'sneakers-suede',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Обувь',
    name: 'Кеды кожа и замша',
    price: 4990,
    desc: 'Классический силуэт, вставки из замши, молочные шнурки и тонкая подошва.',
    sizes: SHOES,
    colors: [{ name: 'Тёмно-синий', hex: '#1E2540', photo: 0 }],
    photos: ['img/look-zipnavy-1.jpg']
  },
  {
    id: 'suit-hood',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Костюмы',
    name: 'Костюм с бордовым капюшоном',
    price: 6990,
    desc: 'Толстовка на молнии и брюки из мягкого трикотажа, бордовый капюшон и вставки на карманах.',
    sizes: CLOTHES,
    colors: [{ name: 'Серый меланж', hex: '#C4C4C2', photo: 0 }],
    photos: ['img/look-suit-1.jpg']
  },
  {
    id: 'sneakers-knit',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Обувь',
    name: 'Кроссовки трикотажные',
    price: 5490,
    desc: 'Дышащий трикотажный верх, кожаные вставки и мягкая белая подошва.',
    sizes: SHOES,
    colors: [{ name: 'Бордовый', hex: '#4A1C22', photo: 0 }],
    photos: ['img/look-suit-1.jpg']
  },
  {
    id: 'windbreaker-suit',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Костюмы',
    name: 'Костюм-ветровка',
    price: 5990,
    desc: 'Лёгкий нейлон с эффектом мятой ткани, куртка с капюшоном и брюки на манжетах.',
    sizes: CLOTHES,
    colors: [
      { name: 'Чёрный', hex: '#111214', photo: 0 },
      { name: 'Графитовый', hex: '#5A5F6B', photo: 1 }
    ],
    photos: ['img/windbreaker-black-1.jpg?v=2', 'img/windbreaker-grey-1.jpg?v=2']
  },
  {
    id: 'sneakers-runner',
    hidden: true,   // только внутри образа, отдельной карточки нет
    cat: 'Обувь',
    name: 'Кроссовки на прозрачной подошве',
    price: 5990,
    desc: 'Сетка и замша, высокая подошва с рисунком внутри, белые шнурки.',
    sizes: SHOES,
    colors: [
      { name: 'Чёрный', hex: '#15161A', photo: 0 },
      { name: 'Серый', hex: '#8E9097', photo: 1 }
    ],
    photos: ['img/windbreaker-black-1.jpg?v=2', 'img/windbreaker-grey-1.jpg?v=2']
  }
];
