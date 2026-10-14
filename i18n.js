/* =====================================================================
   Translations (EN / RU / AZ). English lives in DATA in index.html.
   RU and AZ override the texts below. Anything missing falls back to EN.
   ===================================================================== */
(function () {
  const LANGS = ['en', 'ru', 'az'];
  const pick = () => {
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q && LANGS.includes(q)) { localStorage.setItem('lang', q); return q; }
      const s = localStorage.getItem('lang');
      if (s && LANGS.includes(s)) return s;
    } catch (e) {}
    const n = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return LANGS.includes(n) ? n : 'en';
  };
  const LANG = pick();

  const UI = {
    en: {
      letsTalk: "Let's Talk", collab: "Let's collaborate", mailSubject: "Let's collaborate", scroll: 'Scroll',
      ghostWork: 'Portfolio', ghostService: 'Service', ghostExp: 'Experience',
      selWork: '/Selected Work', viewGithub: 'View GitHub', service: '/Service', experience: '/Experience',
      yearsExp: '+ years of experience', skills: 'Skills', certs: 'Certificates',
      ctaTitle: 'Have a project in mind?',
      ctaText: "Freelance work, a full‑time role or an app that needs a second pair of hands. Tell me what you're building and I'll reply within a day.",
      contactMe: 'Contact Me', copy: 'Copy', copied: 'Copied ✓', selectCopy: 'Select to copy', back: 'Back',
      navWork: 'Work', navService: 'Service', navExp: 'Experience', navContact: 'Contact',
      all: 'All', open: 'Open', view: 'View', openProject: 'Open project',
      linkSoon: 'Link coming soon', downloadOn: 'Download on the', getItOn: 'Get it on', projectDetails: 'Project details',
      removed: 'This app is no longer available on the stores.',
      platform: 'Platform', category: 'Category', serviceL: 'Service', keyFeatures: 'Key features', getApp: 'Get the app',
      portraitOf: 'Portrait of', screenshot: 'screenshot',
      mailTitle: 'Send me an email', mailGmail: 'Open in Gmail', mailOutlook: 'Open in Outlook', mailApp: 'Open mail app', mailCopy: 'Copy email address',
      visits: 'visits', visitsLabel: 'Portfolio views',
      lang: 'Language'
    },
    ru: {
      letsTalk: 'Написать мне', collab: 'Есть проект? Свяжитесь со мной', mailSubject: 'Сотрудничество', scroll: 'Листайте',
      ghostWork: 'Портфолио', ghostService: 'Услуги', ghostExp: 'Опыт',
      selWork: '/Избранные проекты', viewGithub: 'Мой GitHub', service: '/Услуги', experience: '/Опыт',
      yearsExp: '+ лет опыта', skills: 'Навыки', certs: 'Сертификаты',
      ctaTitle: 'Есть идея для проекта?',
      ctaText: 'Фриланс, работа в штате или проект, которому не хватает рук. Расскажите, над чем вы работаете, — отвечу в течение дня.',
      contactMe: 'Связаться со мной', copy: 'Копировать', copied: 'Скопировано ✓', selectCopy: 'Выделите и скопируйте', back: 'Назад',
      navWork: 'Проекты', navService: 'Услуги', navExp: 'Опыт', navContact: 'Контакты',
      all: 'Все', open: 'Открыть', view: 'Смотреть', openProject: 'Открыть проект',
      linkSoon: 'Ссылка скоро появится', downloadOn: 'Загрузите в', getItOn: 'Доступно в', projectDetails: 'Подробнее о проекте',
      removed: 'Приложение больше не доступно в App Store и Google Play.',
      platform: 'Платформа', category: 'Категория', serviceL: 'Что делал', keyFeatures: 'Возможности', getApp: 'Скачать приложение',
      portraitOf: 'Фото:', screenshot: 'экран приложения',
      mailTitle: 'Напишите мне', mailGmail: 'Открыть в Gmail', mailOutlook: 'Открыть в Outlook', mailApp: 'Открыть почтовое приложение', mailCopy: 'Скопировать адрес',
      visits: 'просмотров', visitsLabel: 'Сколько раз открывали портфолио',
      lang: 'Язык'
    },
    az: {
      letsTalk: 'Mənimlə əlaqə', collab: 'Layihəniz var? Əlaqə saxlayın', mailSubject: 'Əməkdaşlıq', scroll: 'Aşağı sürüşdürün',
      ghostWork: 'Portfolio', ghostService: 'Xidmətlər', ghostExp: 'Təcrübə',
      selWork: '/Seçilmiş layihələr', viewGithub: 'GitHub profilim', service: '/Xidmətlər', experience: '/Təcrübə',
      yearsExp: '+ il təcrübə', skills: 'Bacarıqlar', certs: 'Sertifikatlar',
      ctaTitle: 'Layihə ideyanız var?',
      ctaText: 'Frilans layihə, daimi iş və ya əlavə əl tələb edən tətbiq — nə üzərində işlədiyinizi yazın, bir gün ərzində cavab verəcəyəm.',
      contactMe: 'Əlaqə saxlayın', copy: 'Kopyala', copied: 'Kopyalandı ✓', selectCopy: 'Seçib kopyalayın', back: 'Geri',
      navWork: 'Layihələr', navService: 'Xidmətlər', navExp: 'Təcrübə', navContact: 'Əlaqə',
      all: 'Hamısı', open: 'Bax', view: 'Bax', openProject: 'Layihəyə bax',
      linkSoon: 'Link tezliklə', downloadOn: 'Yükləyin:', getItOn: 'Yükləyin:', projectDetails: 'Layihə haqqında ətraflı',
      removed: 'Tətbiq artıq App Store və Google Play-də yoxdur.',
      platform: 'Platforma', category: 'Kateqoriya', serviceL: 'Gördüyüm iş', keyFeatures: 'İmkanlar', getApp: 'Tətbiqi yükləyin',
      portraitOf: 'Foto:', screenshot: 'tətbiqin ekranı',
      mailTitle: 'Mənimlə əlaqə', mailGmail: 'Gmail-də aç', mailOutlook: 'Outlook-da aç', mailApp: 'Poçt proqramında aç', mailCopy: 'Ünvanı kopyala',
      visits: 'baxış', visitsLabel: 'Portfolio neçə dəfə açılıb',
      lang: 'Dil'
    }
  };

  /* Category and tag names. Keys are the English names used in DATA. */
  const WORDS = {
    ru: {
      'Health': 'Здоровье', 'E‑commerce': 'E‑commerce', 'Mobility': 'Транспорт', 'Education': 'Образование', 'Enterprise': 'Для компаний',
      'News': 'Новости', 'Community': 'Сообщества', 'Food & Dining': 'Рестораны', 'Beauty': 'Красота', 'Entertainment': 'Развлечения',
      'Pharmacy': 'Аптека', 'Loyalty': 'Программа лояльности', 'Marketplace': 'Маркетплейс', 'AI': 'ИИ', 'Payments': 'Платежи', 'Taxi': 'Такси',
      'Real‑time': 'Онлайн‑трекинг', 'Driver app': 'Для водителей', 'Pregnancy': 'Беременность', 'Telemedicine': 'Запись к врачу',
      'Medicine': 'Медицина', 'Simulation': 'Симуляция', 'E‑learning': 'Онлайн‑курсы', 'HR': 'HR', 'Banking': 'Банк',
      'Classifieds': 'Объявления', 'Messaging': 'Чат', 'EV charging': 'Зарядка электромобилей', 'Content': 'Медиа',
      'Youth': 'Молодёжь', 'Radio & Podcasts': 'Радио и подкасты', 'Restaurants': 'Рестораны', 'Reservations': 'Бронирование',
      'Bridal': 'Свадебный образ', 'Booking': 'Онлайн‑запись', 'Fashion': 'Одежда', 'Catalog': 'Каталог', 'Raffles': 'Розыгрыши', 'Wallet': 'Кошелёк',
      'Mobile development': 'Мобильная разработка', 'Android & iOS': 'Android и iOS'
    },
    az: {
      'Health': 'Sağlamlıq', 'E‑commerce': 'E‑ticarət', 'Mobility': 'Nəqliyyat', 'Education': 'Təhsil', 'Enterprise': 'Şirkətlər üçün',
      'News': 'Xəbərlər', 'Community': 'İctimai', 'Food & Dining': 'Restoranlar', 'Beauty': 'Gözəllik', 'Entertainment': 'Əyləncə',
      'Pharmacy': 'Aptek', 'Loyalty': 'Loyallıq proqramı', 'Marketplace': 'Marketplace', 'AI': 'Süni intellekt', 'Payments': 'Ödənişlər', 'Taxi': 'Taksi',
      'Real‑time': 'Canlı izləmə', 'Driver app': 'Sürücülər üçün', 'Pregnancy': 'Hamiləlik', 'Telemedicine': 'Həkim qəbulu',
      'Medicine': 'Tibb', 'Simulation': 'Simulyasiya', 'E‑learning': 'Onlayn kurslar', 'HR': 'HR', 'Banking': 'Bank',
      'Classifieds': 'Elanlar', 'Messaging': 'Çat', 'EV charging': 'Elektromobil şarjı', 'Content': 'Media',
      'Youth': 'Gənclər', 'Radio & Podcasts': 'Radio və podkastlar', 'Restaurants': 'Restoranlar', 'Reservations': 'Masa rezervi',
      'Bridal': 'Gəlin bəzəyi', 'Booking': 'Onlayn yazılma', 'Fashion': 'Geyim', 'Catalog': 'Kataloq', 'Raffles': 'Tirajlar', 'Wallet': 'Pul kisəsi',
      'Mobile development': 'Mobil tətbiq hazırlanması', 'Android & iOS': 'Android və iOS'
    }
  };

  const C = {
    ru: {
      role: "Flutter‑разработчик",
      tagline: "<b>Более 4 лет</b> делаю мобильные приложения для Android и iOS, которыми пользуются реальные люди: e‑commerce, аптеки, образование, такси, новости. Превращаю требования клиентов в быстрые и надёжные приложения.",
      available: "Открыт для новых проектов",
      services: [["Разработка мобильных приложений", "Приложения для Android и iOS на одной кодовой базе Flutter — от первого экрана до публикации в сторах."], ["E‑commerce и платежи", "Каталог, корзина, оформление заказа, Apple Pay, встроенные покупки, промокоды и бонусные программы."], ["Интеграция с API и ERP", "REST, WebSocket и 1С на Dio, аккуратный слой данных и внедрение зависимостей."], ["Производительность и стабильность", "Отслеживание сбоев в Crashlytics и Sentry, принудительное обновление и разбор сложных проблем в продакшене."]],
      experience: [["Middle Flutter‑разработчик", "Май 2026 — сейчас", "Баку"], ["Flutter‑разработчик", "Авг 2025 — сейчас", "Азербайджан"], ["Военная служба", "Июл 2024 — Авг 2025", "Азербайджан", "Перерыв в карьере"], ["Flutter‑разработчик", "Ноя 2023 — Июл 2024", "Баку"], ["Flutter‑разработчик", "Дек 2022 — Ноя 2023", "Баку"], ["Flutter‑разработчик", "Июл 2022 — Дек 2022", "Баку"]],
      projects: {
  "aloe": {
    "title": "Aloe+ — онлайн‑аптека и программа лояльности с доставкой по Баку",
    "lead": "Официальное приложение сети аптек Aloe. Здесь можно заказать лекарства, витамины и косметику с доставкой по Баку или забрать заказ в ближайшей аптеке, хранить все карты лояльности в одном месте и получать дополнительный кешбэк за каждый заказ в приложении.",
    "built": [
      "MultiCard: все карты лояльности в одном месте — баланс, бонусы и выбор карты для начисления при оплате",
      "Выбор аптеки и просмотр товаров, которые есть в наличии именно в ней",
      "Доставка по Баку или самовывоз из ближайшей аптеки, выбранной на карте",
      "Дополнительный кешбэк за заказы в приложении — зачисляется на карту сразу после оплаты",
      "Отслеживание заказа: от подтверждения фармацевтом до выдачи",
      "Категория оптики Novo Optika",
      "Apple Pay, deep links, мониторинг через Crashlytics и Sentry, принудительное обновление"
    ]
  },
  "tenderyard": {
    "title": "TenderYard — маркетплейс с интеграцией ИИ, который сводит покупателей и продавцов",
    "lead": "Бесплатная площадка для объявлений о продаже и запросов на покупку в более чем 1 700 категориях. Покупателю не нужно неделями искать товар: он пишет, что ему нужно, а приложение само сводит его с подходящими продавцами. Девиз сервиса — «То, что вы ищете, найдёт вас».",
    "built": [
      "Автоматический подбор объявлений под запросы покупателей и мгновенные уведомления обеим сторонам",
      "ИИ составляет объявление по одной фразе, фото или голосовому сообщению и сам подбирает категорию",
      "Поиск голосом, по фото и тексту, сохранённые фильтры и история поиска",
      "Глобальный поиск, который показывает похожие предложения на других площадках, например на Amazon",
      "Видеообъявления (Reels) и автоматический перевод объявлений на другие языки",
      "Чат с голосовыми и видеозвонками и ИИ‑ассистент TenderBot",
      "Встроенные покупки Apple и Google, оплата картой, промокоды и бонусы"
    ]
  },
  "taxo-rider": {
    "title": "Taxo Rider — приложение для пассажиров национального такси Азербайджана",
    "lead": "Цель Taxo — дать жителям Азербайджана качественное национальное такси. Приложение для пассажиров устроено просто: легко заказать, легко пользоваться, а ещё есть бонусы и скидки.",
    "built": [
      "Заказ поездки: точки подачи и назначения на карте и стоимость заранее",
      "Тарифы Эконом и Комфорт, оплата наличными или картой, промокоды",
      "Кошелёк Taxo: пополнение баланса, сохранённые карты и история платежей",
      "Поездки по предварительному заказу, избранные адреса и история поездок",
      "Статус поездки и местоположение водителя в реальном времени",
      "Профиль, уведомления и настройки в простом и понятном интерфейсе"
    ]
  },
  "taxo-driver": {
    "title": "Taxo Driver — приложение для водителей национального такси Азербайджана",
    "lead": "Водительская часть Taxo, рассчитанная на долгие смены: выходите на линию, принимайте заказы поблизости, выполняйте поездки и следите за заработком. Для водителей тоже есть бонусы и скидки.",
    "built": [
      "Выход на линию и уход с неё, настройка радиуса приёма заказов",
      "Новые заказы на карте: точка подачи, назначение и способ оплаты",
      "Детали поездок по датам и возможность сообщить о проблеме",
      "Заработок, кошелёк и история поездок",
      "Синхронизация с приложением пассажира на протяжении всей поездки",
      "Вход и регистрация, профиль, уведомления и настройки"
    ]
  },
  "anayam": {
    "title": "Anayam — помощник на каждой неделе беременности",
    "lead": "Приложение создано по инициативе Центра общественного здравоохранения и реформ Министерства здравоохранения Азербайджана. Будущие мамы следят за беременностью по неделям, получают ежедневные советы, контролируют самочувствие и записываются к врачу — всё в одном бесплатном приложении.",
    "built": [
      "Развитие малыша по неделям — его размер в сравнении с фруктами",
      "Расчёт даты родов по дате зачатия, последней менструации, ЭКО или УЗИ",
      "Контроль веса, ИМТ и симптомов по медицинским рекомендациям",
      "Ежедневные советы и еженедельный блог о питании, грудном вскармливании, уходе за новорождённым и физической активности",
      "Снимки УЗИ в 2D и 3D и медицинские документы в одном месте",
      "Поиск врача по специальности и запись на онлайн‑ или очный приём",
      "Имена для малыша по странам и список избранного"
    ]
  },
  "md-simulyasiya": {
    "title": "MD Simulyasiya — отработка клинических решений на виртуальных пациентах",
    "lead": "Бесплатный тренажёр для студентов‑медиков и будущих врачей. Пользователь разбирает реалистичные клинические случаи: изучает анамнез и анализы, назначает обследования, выбирает лечение и видит, как меняется состояние пациента, — без риска для живого человека.",
    "built": [
      "Виртуальные пациенты с показателями в реальном времени: пульс, сахар крови, температура и давление",
      "Оценка случаев Covid‑19 по степени тяжести: средняя, средне‑тяжёлая и тяжёлая",
      "Карта пациента: витальные показатели, гемодинамика, лабораторные, микробиологические и лучевые исследования, процедуры",
      "ЭКГ и температура тела на графиках в реальном времени",
      "Назначение обследований и лечения с разбором каждого решения",
      "Обучающие модули и материалы для тех, кто только начинает учиться"
    ]
  },
  "ecourses": {
    "title": "ECourses — образовательный портал ecourses в смартфоне",
    "lead": "«Дистанционное обучение стало ещё проще». Приложение переносит портал ecourses в телефон: курсы по категориям, видеоуроки в удобном темпе и знакомство с менторами.",
    "built": [
      "Главный экран с новостями, партнёрами и новыми материалами",
      "Курсы по категориям: программирование, дизайн, маркетинг, бизнес, здоровье, финансы и другие",
      "Популярные курсы с ценой, скидками, рейтингом и избранным",
      "Видеоуроки по разделам, отслеживание прогресса и полноценный плеер",
      "Профили менторов: биография, курсы, студенты и отзывы"
    ]
  },
  "chr": {
    "title": "CHR — внутреннее HR‑приложение для PASHA Bank",
    "lead": "Core Human Resources переносит повседневные HR‑процессы PASHA Bank из бумажных бланков и почтовой переписки в телефон сотрудника: заявки на отпуск, данные о зарплате и личная информация — в одном защищённом приложении.",
    "built": [
      "Остаток отпуска перед глазами и новая заявка в одно касание",
      "Заявки по статусам — новые, отклонённые, одобренные и отправленные повторно — со всеми деталями",
      "Начисления и удержания по каждому трудовому договору",
      "Детали удержаний: вид, сумма, период, итог, выплачено и остаток",
      "Личный профиль: документы, контакты и трудовая деятельность",
      "Защищённый вход, тёмный интерфейс в цветах CHR, только для внутреннего использования"
    ],
    "note": "Внутреннее приложение для сотрудников PASHA Bank, в App Store и Google Play не публикуется."
  },
  "bazarix": {
    "title": "Bazarix — купить, продать и найти услуги в одном приложении объявлений",
    "lead": "Приложение объявлений для Азербайджана: мебель, недвижимость, услуги, электроника, дом и сад, транспорт. Разместить объявление можно за несколько шагов, найти нужное — с помощью фильтров, а связаться с продавцом — по телефону или в чате.",
    "built": [
      "Главная: категории, свежие объявления, недавно просмотренное и самые популярные авто, недвижимость и электроника",
      "Пошаговое размещение объявления, начиная с выбора категории",
      "Фильтры, сортировка и сохранённые поиски",
      "Страница объявления: фото, цена, описание, число просмотров и профиль продавца",
      "Звонок или сообщение продавцу прямо из объявления и другие его объявления",
      "Избранное, сообщения, уведомления и жалобы на объявления"
    ]
  },
  "amper": {
    "title": "Amper — все зарядки для электромобилей Баку на одной карте",
    "lead": "Приложение для владельцев электромобилей в Баку. Зарядные станции разных операторов собраны на одной карте: можно проверить мощность и свободные порты, запустить зарядку в пару касаний и проложить маршрут до станции.",
    "built": [
      "Станции разных операторов на одной карте, у каждого — свой фирменный значок",
      "Карточка станции: адрес, расстояние, мощность (кВт), время до 100% и свободные порты",
      "Запуск зарядки прямо из карточки или по QR‑коду на зарядном устройстве",
      "Поиск, фильтры и список ближайших станций",
      "Маршрут до станции через Waze или Google Maps"
    ]
  },
  "barsiba": {
    "title": "Barsiba — новостное приложение для Турции",
    "lead": "Новостное приложение для читателей в Турции: срочные новости, мир, спорт и развлечения в удобных лентах по рубрикам, а также самые читаемые материалы.",
    "built": [
      "Ленты по рубрикам: срочные новости, мир, спорт и развлечения",
      "Самые читаемые материалы и сохранённые статьи",
      "Аккуратные страницы статей и удобный шеринг",
      "Опубликовано в Google Play и App Store"
    ]
  },
  "ireli": {
    "title": "İrəli — мобильное приложение общественного объединения İrəli",
    "lead": "Официальное приложение молодёжного общественного объединения İrəli в Азербайджане. Участники следят за проектами, тренингами и объявлениями, слушают радио и подкасты объединения, а все мероприятия и лагеря, в которых они участвовали, сохраняются в личном кабинете.",
    "built": [
      "Главная лента: объявления, проекты, центры и новости",
      "Активности: тренинги, встречи, интеллектуальные игры, база тренеров, здоровый образ жизни и другое",
      "Прямой эфир iradio.az, подкасты и музыка в одном плеере",
      "Разделы местных, военно‑патриотических и международных проектов",
      "Личный кабинет с профилем участника, его мероприятиями и лагерями"
    ]
  },
  "finder": {
    "title": "Finder — найдите ресторан поблизости и забронируйте столик",
    "lead": "Еда везде: Finder показывает рестораны вокруг вас на карте, позволяет заранее посмотреть меню и забронировать свободный столик прямо на странице ресторана.",
    "built": [
      "Карта ресторанов рядом с вами",
      "Популярные блюда и список ресторанов со временем в пути пешком и на машине",
      "Страница ресторана: фото, телефон, адрес и меню — блюда, напитки, закуски и соусы",
      "Схема зала: выберите свободный столик и забронируйте его в одно касание",
      "Избранное, поиск и ваши бронирования в профиле"
    ]
  },
  "orxideya": {
    "title": "Orxideya — запись на свадебный образ, к парикмахеру и в салоны красоты",
    "lead": "Приложение для записи в салоны красоты для женщин. Найдите салон или мастера поблизости и запишитесь на свадебную причёску и макияж, стрижку, маникюр или оформление бровей в пару касаний — а перед визитом приложение само напомнит.",
    "built": [
      "Услуги: свадебный образ, парикмахер, макияж, маникюр, ресницы, брови и окрашивание",
      "Салоны поблизости с рейтингом, расстоянием и поиском",
      "Запись с выбором даты, времени и услуг",
      "Мои записи: предстоящие, завершённые и отменённые, с отменой и электронным чеком",
      "Push‑напоминания перед каждым визитом",
      "Пакетные предложения, например свадебная причёска и макияж вместе"
    ]
  },
  "emiland": {
    "title": "Emiland — мобильное приложение бренда",
    "lead": "Emiland Stores производит свою продукцию в Азербайджане с 1991 года. Приложение повторяет дизайн emiland.com один в один, поэтому на сайте и в телефоне покупатель видит одинаковое оформление и один и тот же каталог.",
    "built": [
      "Мобильная версия, которая точно повторяет дизайн emiland.com",
      "Каталог с категориями и отдельным разделом тканей",
      "Карточки товаров с фотогалереей, размерами и описанием",
      "Корзина, оформление заказа и история заказов",
      "Мультиязычный контент, синхронизированный с сайтом",
      "Общий REST API с интернет‑магазином"
    ]
  },
  "raffle": {
    "title": "Raffle — купите билет и выиграйте автомобиль или новый телефон",
    "lead": "Ваша победа ближе, чем кажется: пользователи пополняют кошелёк, покупают билеты на активные кампании и участвуют в розыгрышах автомобилей, смартфонов и других призов — всего в три шага.",
    "built": [
      "Активные кампании с призами и шкалой проданных билетов",
      "Кошелёк в приложении с балансом в AZN и покупка билета в одно касание",
      "Личные билеты с номером и датой розыгрыша",
      "Победители и ближайшие розыгрыши",
      "Прямые розыгрыши, предложения и корзина в нижнем меню",
      "Вводные экраны, которые за три шага объясняют, как участвовать"
    ]
  }
}
    },
    az: {
      role: "Flutter Developer",
      tagline: "<b>4 ildən artıqdır</b> Android və iOS üçün real istifadəçiləri olan tətbiqlər hazırlayıram: e‑ticarət, aptek, təhsil, taksi və xəbər layihələri. Müştəri tələblərini sürətli və etibarlı mobil tətbiqlərə çevirirəm.",
      available: "Yeni imkanlara açığam",
      services: [["Mobil tətbiq hazırlanması", "Bir Flutter kodu ilə Android və iOS üçün tətbiqlər — ilk ekrandan store-da yayımlanana qədər."], ["E‑ticarət və ödənişlər", "Kataloq, səbət, sifarişin rəsmiləşdirilməsi, Apple Pay, tətbiqdaxili alışlar, promo kodlar və bonus sistemləri."], ["API və ERP inteqrasiyası", "Dio ilə REST, WebSocket və 1C inteqrasiyaları, səliqəli data qatı və dependency injection."], ["Performans və stabillik", "Crashlytics və Sentry ilə xətaların izlənməsi, məcburi yeniləmə və production-dakı çətin problemlərin həlli."]],
      experience: [["Middle Flutter Developer", "May 2026 — hazırda", "Bakı"], ["Flutter Developer", "Avq 2025 — hazırda", "Azərbaycan"], ["Hərbi xidmət", "İyl 2024 — Avq 2025", "Azərbaycan", "Karyerada fasilə"], ["Flutter Developer", "Noy 2023 — İyl 2024", "Bakı"], ["Flutter Developer", "Dek 2022 — Noy 2023", "Bakı"], ["Flutter Developer", "İyl 2022 — Dek 2022", "Bakı"]],
      projects: {
  "aloe": {
    "title": "Aloe+ — Bakı üzrə çatdırılma ilə onlayn aptek və loyallıq proqramı",
    "lead": "Aloe aptek şəbəkəsinin rəsmi tətbiqi. Müştərilər dərman, vitamin və kosmetik məhsulları Bakı daxilində evə sifariş edir və ya yaxınlıqdakı aptekdən götürür, bütün loyallıq kartlarını bir yerdə saxlayır və tətbiqdən verdiyi hər sifarişə əlavə keşbek qazanır.",
    "built": [
      "MultiCard: bütün loyallıq kartları bir yerdə — balans, bonuslar və ödəniş zamanı bonusun hansı karta yazılacağını seçmək",
      "Aptek seçib həmin aptekdə olan məhsulları görmək və sifariş etmək",
      "Bakı daxilində evə çatdırılma və ya xəritədən seçilən ən yaxın aptekdən götürmə",
      "Tətbiqdən verilən sifarişlərə əlavə keşbek — ödənişdən dərhal sonra karta köçürülür",
      "Sifarişin onlayn izlənməsi: əczaçının təsdiqindən təhvilə qədər",
      "Optik məhsullar üçün Novo Optika kateqoriyası",
      "Apple Pay, deep link-lər, Crashlytics və Sentry ilə monitorinq, məcburi yeniləmə"
    ]
  },
  "tenderyard": {
    "title": "TenderYard — alıcı və satıcını bir-birinə yönləndirən süni intellekt inteqrasiyalı marketplace",
    "lead": "1 700-dən çox kateqoriyada satış elanları və alış sorğuları üçün pulsuz platforma. Alıcı həftələrlə axtarmaq əvəzinə nə istədiyini yazır, tətbiq isə onu uyğun satıcılarla birləşdirir. Şüarı da elə budur: axtardığın səni tapacaq.",
    "built": [
      "Alış sorğuları ilə elanların avtomatik uyğunlaşdırılması və hər iki tərəfə dərhal bildiriş",
      "Süni intellekt bir cümlədən, şəkildən və ya səsli mesajdan elan hazırlayır və kateqoriyanı özü seçir",
      "Səslə, şəkillə və mətnlə axtarış, saxlanmış filtrlər və axtarış tarixçəsi",
      "Amazon kimi digər marketplace-lərdəki oxşar təklifləri də göstərən qlobal axtarış",
      "Qısa video elanlar (Reels) və elanların digər dillərə avtomatik tərcüməsi",
      "Səsli və görüntülü zənglərlə tətbiqdaxili çat, TenderBot süni intellekt köməkçisi",
      "Apple və Google tətbiqdaxili alışları, kartla ödəniş, promo kodlar və bonuslar"
    ]
  },
  "taxo-rider": {
    "title": "Taxo Rider — milli taksi brendinin sərnişin tətbiqi",
    "lead": "Taxo-nun məqsədi Azərbaycanda yüksək keyfiyyətli milli taksi xidməti yaratmaqdır. Sərnişin tətbiqi də buna uyğun sadədir: asan sifariş, asan istifadə, üstəlik bonus və endirimlər.",
    "built": [
      "Xəritədə götürülmə və təyinat nöqtəsini seçib sifariş vermək, gediş haqqını əvvəlcədən görmək",
      "Ekonom və ya Komfort seçimi, nağd və ya kartla ödəniş, kupon kodları",
      "Taxo pul kisəsi: balansı artırmaq, kartları saxlamaq, ödəniş tarixçəsi",
      "Gedişi əvvəlcədən rezerv etmək, sevimli ünvanları saxlamaq, gediş tarixçəsi",
      "Gedişin statusunu və sürücünün yerini canlı izləmək",
      "Profil, bildirişlər və tənzimləmələr — sadə və səliqəli interfeysdə"
    ]
  },
  "taxo-driver": {
    "title": "Taxo Driver — milli taksi brendinin sürücü tətbiqi",
    "lead": "Taxo-nun sürücü tərəfi uzun iş günü üçün düşünülüb: xəttə çıx, yaxınlıqdakı sifarişləri qəbul et, gedişi tamamla və qazancını izlə. Sürücülər üçün də bonus və endirimlər var.",
    "built": [
      "Xəttə çıxmaq və ya xətdən çıxmaq, sifarişlərin gələcəyi radiusu seçmək",
      "Yeni sifarişlər xəritədə: götürülmə, təyinat nöqtəsi və ödəniş üsulu",
      "Tarixə görə gediş detalları və problemi bildirmək imkanı",
      "Qazanclar, pul kisəsi və gediş tarixçəsi",
      "Gediş boyu sərnişin tətbiqi ilə canlı sinxronizasiya",
      "Giriş və qeydiyyat, profil, bildirişlər və tənzimləmələr"
    ]
  },
  "anayam": {
    "title": "Anayam — hamiləliyin hər həftəsində yanınızda",
    "lead": "Səhiyyə Nazirliyinin İctimai Səhiyyə və İslahatlar Mərkəzinin təşəbbüsü ilə hazırlanıb. Gələcək analar hamiləliyi həftə-həftə izləyir, gündəlik tövsiyələr alır, sağlamlıq göstəricilərinə nəzarət edir və həkim qəbuluna yazılır — hamısı bir pulsuz tətbiqdə.",
    "built": [
      "Körpənin həftə-həftə inkişafı — ölçüsü meyvələrlə müqayisədə",
      "Doğuş tarixinin hesablanması: mayalanma, son period, süni mayalanma və ya ultrasəs tarixinə görə",
      "Tibbi tövsiyələrə əsasən çəki, bədən kütlə indeksi və simptomların izlənməsi",
      "Qidalanma, ana südü ilə qidalandırma, yenidoğulmuşa qulluq və fiziki aktivlik barədə gündəlik tövsiyələr və həftəlik bloq",
      "2D və 3D ultrasəs görüntüləri, tibbi sənədlər bir yerdə",
      "İxtisasa görə həkim axtarışı, onlayn və ya üz-üzə qəbula yazılma",
      "Ölkələr üzrə uşaq adları və seçilmişlər siyahısı"
    ]
  },
  "md-simulyasiya": {
    "title": "MD Simulyasiya — virtual xəstələr üzərində klinik qərar təcrübəsi",
    "lead": "Tibb tələbələri və gələcək həkimlər üçün pulsuz təlim tətbiqi. İstifadəçi real həyata yaxın klinik hallarda xəstənin anamnezinə və analizlərinə baxır, müayinə təyin edir, müalicə seçir və xəstənin vəziyyətinin necə dəyişdiyini görür — real insanı riskə atmadan.",
    "built": [
      "Canlı göstəriciləri olan virtual xəstələr: ürək ritmi, qan şəkəri, temperatur və təzyiq",
      "Covid-19 hallarının ağırlıq dərəcəsinə görə qiymətləndirilməsi: orta, orta-ağır və ağır",
      "Pasiyent kartı: həyati göstəricilər, hemodinamika, laborator, mikrobioloji, vizual müayinə və prosedur nəticələri",
      "EKQ və bədən temperaturu canlı qrafiklərdə",
      "Müayinə və müalicə təyini, hər qərara görə geri bildirim",
      "Yeni başlayan tələbələr üçün təlim modulları və tədris materialları"
    ]
  },
  "ecourses": {
    "title": "ECourses — ecourses tədris portalı cibinizdə",
    "lead": "“Distant təhsil daha da asanlaşdı.” Tətbiq ecourses portalını telefona gətirir: kursları kateqoriyalara görə seçin, video dərsləri öz tempinizlə keçin və mentorlarla tanış olun.",
    "built": [
      "Xəbərlər, tərəfdaşlar və yeni məzmun olan ana səhifə",
      "Kateqoriyalar üzrə kurslar: proqramlaşdırma, dizayn, marketinq, biznes, sağlamlıq, maliyyə və s.",
      "Qiyməti, endirimi və reytinqi ilə populyar kurslar, seçilmişlər",
      "Bölmələrə ayrılmış video dərslər, irəliləyişin izlənməsi və tam funksional pleyer",
      "Mentor profilləri: bioqrafiya, kurslar, tələbələr və rəylər"
    ]
  },
  "chr": {
    "title": "CHR — PASHA Bank üçün hazırlanmış daxili HR tətbiqi",
    "lead": "Core Human Resources PASHA Bank-da gündəlik HR işlərini kağız formalardan və email yazışmalarından əməkdaşın telefonuna köçürür: məzuniyyət sorğuları, əməkhaqqı məlumatları və şəxsi məlumatlar — hamısı bir təhlükəsiz tətbiqdə.",
    "built": [
      "Qalan məzuniyyət günləri bir baxışda, yeni məzuniyyət sorğusu bir toxunuşla",
      "Statuslara görə sorğular — yeni, imtina edilmiş, təsdiqlənmiş və yenidən göndərilmiş — bütün detalları ilə",
      "Hər əmək müqaviləsi üzrə əməkhaqqına əlavələr və tutulmalar",
      "Tutulmaların detalları: növ, məbləğ, müddət, ümumi, ödənilən və qalıq",
      "Şəxsi profil: şəxsiyyət, əlaqə və əmək fəaliyyəti məlumatları",
      "Təhlükəsiz giriş, CHR rənglərində tünd interfeys, yalnız daxili istifadə üçün"
    ],
    "note": "PASHA Bank əməkdaşları üçün daxili tətbiqdir, App Store və Google Play-də yayımlanmayıb."
  },
  "bazarix": {
    "title": "Bazarix — alqı-satqı və xidmət elanları bir tətbiqdə",
    "lead": "Azərbaycan üçün elan tətbiqi: mebel, daşınmaz əmlak, xidmətlər, elektronika, ev və bağ, nəqliyyat. Elanı bir neçə addımda yerləşdirin, lazım olanı filtrlərlə tapın və satıcı ilə zəng və ya mesajla əlaqə saxlayın.",
    "built": [
      "Kateqoriyalar, ən son elanlar, son baxdıqlarınız və ən çox baxılan avtomobil, əmlak və elektronika elanları",
      "Kateqoriya seçimindən başlayan addım-addım elan yerləşdirmə",
      "Filtrlər, sıralama və axtarışı yadda saxlamaq imkanı",
      "Elan səhifəsi: şəkillər, qiymət, təsvir, baxış sayı və satıcının profili",
      "Elandan birbaşa satıcıya zəng və ya mesaj, satıcının digər elanları",
      "Sevimlilər, mesajlar, bildirişlər və elandan şikayət"
    ]
  },
  "amper": {
    "title": "Amper — Bakıdakı bütün elektromobil şarj məntəqələri bir xəritədə",
    "lead": "Bakıda elektromobil sürücüləri üçün tətbiq. Müxtəlif operatorların şarj məntəqələri bir xəritədə göstərilir: gücü və boş portları yoxlamaq, bir neçə toxunuşla şarja başlamaq və məntəqəyə marşrut qurmaq olur.",
    "built": [
      "Müxtəlif operatorların məntəqələri bir xəritədə, hər biri öz brend nişanı ilə",
      "Məntəqə kartı: ünvan, məsafə, güc (kVt), 100%-ə qədər vaxt və boş portlar",
      "Şarjı birbaşa məntəqə kartından və ya cihazdakı QR kodu oxutmaqla başlatmaq",
      "Axtarış, filtrlər və yaxınlıqdakı məntəqələrin siyahısı",
      "Waze və ya Google Maps ilə məntəqəyə marşrut"
    ]
  },
  "barsiba": {
    "title": "Barsiba — Türkiyə üçün xəbər tətbiqi",
    "lead": "Türkiyədəki oxucular üçün xəbər tətbiqi: son dəqiqə, dünya, idman və əyləncə xəbərləri ayrı-ayrı lentlərdə, üstəlik ən çox oxunan xəbərlər.",
    "built": [
      "Kateqoriya lentləri: son dəqiqə, dünya, idman və əyləncə",
      "Ən çox oxunan xəbərlər və yadda saxlanılan məqalələr",
      "Səliqəli məqalə səhifələri və asan paylaşım",
      "Google Play və App Store-da yayımlanıb"
    ]
  },
  "ireli": {
    "title": "İrəli — İrəli İctimai Birliyinin mobil tətbiqi",
    "lead": "Gənclər təşkilatı olan İrəli İctimai Birliyinin rəsmi tətbiqi. Üzvlər layihələri, təlimləri və elanları izləyir, birliyin canlı radiosunu və podkastlarını dinləyir, iştirak etdikləri hər tədbir və düşərgə şəxsi kabinetdə qalır.",
    "built": [
      "Elanlar, layihələr, mərkəzlər və xəbərlər olan ana səhifə",
      "Fəaliyyətlər: təlimlər, görüşlər, intellektual oyunlar, təlimçi bazası, sağlam həyat və s.",
      "iradio.az canlı yayımı, podkastlar və musiqi bir pleyerdə",
      "Yerli, hərbi-vətənpərvərlik və beynəlxalq layihələr bölmələri",
      "Üzvün profili, iştirak etdiyi tədbirlər və düşərgələrlə şəxsi kabinet"
    ]
  },
  "finder": {
    "title": "Finder — yaxınlıqdakı restoranı tap, masanı rezerv et",
    "lead": "Hər yerdə dadlı yemək: Finder ətrafınızdakı restoranları xəritədə göstərir, getməzdən əvvəl menyuya baxmağa və boş masanı birbaşa restoranın səhifəsindən rezerv etməyə imkan verir.",
    "built": [
      "Olduğunuz yerə yaxın restoranlar xəritədə",
      "Seçilmiş yeməklər və piyada, maşınla nə qədər vaxt aparacağı göstərilən restoran siyahısı",
      "Restoran səhifəsi: şəkillər, telefon, ünvan və yeməklər, içkilər, qəlyanaltılar, souslar üzrə menyu",
      "Zalın vizual planı: boş masanı seçib bir toxunuşla rezerv etmək",
      "Sevimlilər, axtarış və profildə rezervləriniz"
    ]
  },
  "orxideya": {
    "title": "Orxideya — gəlin bəzəyi, saç ustası və gözəllik salonlarına onlayn rezerv",
    "lead": "Qadınlar üçün gözəllik rezervi tətbiqi. Yaxınlıqdakı salon və ustaları tapın, gəlin saç düzümü və makiyajı, saç kəsimi, manikür və ya qaş dizaynına bir neçə toxunuşla yazılın — qəbuldan əvvəl tətbiq özü xatırladacaq.",
    "built": [
      "Xidmətlər: gəlin bəzəyi, saç ustası, makiyaj, manikür, kirpik, qaş və saç boyası",
      "Reytinqi və məsafəsi göstərilən yaxın salonlar, axtarış",
      "Tarix, saat və xidmət seçərək rezerv",
      "Rezervlərim: gələcək, tamamlanan və ləğv edilən, ləğvetmə və elektron qəbz",
      "Hər qəbuldan əvvəl push bildirişlə xatırlatma",
      "Gəlin saç düzümü və makiyajı kimi paket təkliflər"
    ]
  },
  "emiland": {
    "title": "Emiland — brendin mobil tətbiqi",
    "lead": "Emiland Stores 1991-ci ildən məhsullarını Azərbaycanda istehsal edir. Tətbiq emiland.com-un dizaynını birə-bir təkrarlayır, ona görə müştəri saytda da, telefonda da eyni görünüşü və eyni kataloqu görür.",
    "built": [
      "emiland.com dizaynını piksel-piksel izləyən mobil versiya",
      "Kateqoriyalar və ayrıca parçalar bölməsi olan kataloq",
      "Şəkil qalereyası, ölçülər və detallarla məhsul səhifələri",
      "Səbət, sifarişin rəsmiləşdirilməsi və sifariş tarixçəsi",
      "Saytla sinxron işləyən çoxdilli məzmun",
      "Veb mağaza ilə ortaq REST API"
    ]
  },
  "raffle": {
    "title": "Raffle — bilet al, avtomobil və ya yeni telefon qazan",
    "lead": "Qələbən düşündüyündən yaxındır: istifadəçi pul kisəsini artırır, aktiv kampaniyalara bilet alır və avtomobil, smartfon kimi hədiyyələrin tirajlarında iştirak edir — cəmi üç sadə addımla.",
    "built": [
      "Hədiyyələri və satılan biletlərin sayı göstərilən aktiv kampaniyalar",
      "AZN balanslı tətbiqdaxili pul kisəsi və bir toxunuşla bilet alışı",
      "Bilet nömrəsi və tiraj tarixi ilə şəxsi biletlər",
      "Qaliblər və gələcək tirajlar",
      "Alt menyuda canlı tirajlar, təkliflər və səbət",
      "İştirak qaydasını üç addımda izah edən giriş ekranları"
    ]
  }
}
    }
  };

  const T = Object.assign({}, UI.en, UI[LANG] || {});
  const W = WORDS[LANG] || {};
  const tw = s => W[s] || s;

  if (LANG !== 'en' && typeof DATA !== 'undefined') {
    const c = C[LANG];
    DATA.role = c.role; DATA.tagline = c.tagline; DATA.available = c.available;
    DATA.services.forEach((s, i) => { if (c.services[i]) { s.title = c.services[i][0]; s.text = c.services[i][1]; } });
    DATA.experience.forEach((j, i) => {
      const e = c.experience[i]; if (!e) return;
      j.role = e[0]; j.when = e[1]; j.where = e[2]; if (e[3]) j.company = e[3];
    });
    DATA.projects.forEach(p => {
      const o = c.projects[p.id] || {};
      if (o.title) p.title = o.title;
      if (o.lead) p.lead = o.lead;
      if (o.built) p.built = o.built;
      if (o.note) p.note = o.note;
      p.category = tw(p.category); p.platform = tw(p.platform); p.service = tw(p.service);
      p.tags = p.tags.map(tw);
    });
    DATA.marquee = DATA.marquee.map(tw);
    DATA.skills = DATA.skills.map(tw);
  }

  document.documentElement.lang = LANG;
  window.LANG = LANG; window.LANGS = LANGS; window.T = T;
  window.setLang = l => {
    try { localStorage.setItem('lang', l); sessionStorage.setItem('skipLoader', '1'); } catch (e) {}
    const u = new URL(location.href);
    u.searchParams.set('lang', l);
    location.replace(u.toString());
  };
})();
