// Ассортимент. Новый товар = новый объект в этом списке.
var CLOTHES = ['M', 'L', 'XL', 'XXL', '3XL'];
var SHOES = ['39', '40', '41', '42', '43', '44'];

// Примерочная: манекен на подиуме. Каждый образ — своё видео с тем же манекеном и той же сценой.
// Новый образ = ещё один объект: video, poster, name и (по желанию) look — id готового образа ниже.
window.RUNWAY = [
  { id: 'black', name: 'Total black', video: 'video/mannequin-1.mp4', poster: 'video/mannequin-1.jpg', look: 'look-black' }
];

// Акции. store: 'ksp' | 'kz' | 'all'. Бесплатными становятся самые дешёвые вещи из подходящих.
window.PROMOS = [
  {
    id: 'cardigan-1plus1',
    badge: '1+1',
    title: 'Второй кардиган — бесплатно',
    text: 'Покупаете один кардиган — второй в подарок.',
    cat: 'Кардиганы',
    buy: 1, free: 1,
    unit: ['кардиган', 'кардигана', 'кардиганов'],
    store: 'ksp'
  },
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
  }
];
