import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Services: 'Services',
        Blog: 'Blog',
        ContactUs: 'Contact Us',
        AboutUs: 'About Us',

        apply: 'Apply',
        loading: 'Loading...',

        requests: {
          errorOther: 'An error occurred.',
          errorEmailValidation:
            'Just enter a Gmail address (example: example@gmail.com).',
          errorEmailValidation2: 'The email address you entered is incorrect.',
          errorEmailLimited:
            'You can only send requests 2 times per day with this account.',
          successFormMessage:
            'Your request has been sent, we will get back to you as soon as possible.',
        },

        hero: {
          title: 'Discover the world and enjoy its beauty',
          desc: 'Where are you planning to travel?',
          search: 'Search...',
        },

        popular: {
          title1: 'Popular Place',
          title2: "Let's enjoy this heaven on earth",
          title3:
            'Many places are very famous, beautiful, clean, and will give a very deep impression to visitors and make them come back',
          travel_make: 'Travel to make sweet memories',
          travel_make_title: 'Find trips that fit a flexible lifestyle',
          travel_make1: 'Find trips that fit your freedom',
          travel_make1_title:
            'Travel provides the freedom to explore, the flexibility to roam, the solitude to reflect, the spontaneity to discover, and the privacy to find your purpose.',
          travel_make2: 'Get back to nature by travel',
          travel_make2_title:
            "The world is a vast playground, and you finally have the opportunity to discover Mother Nature's unique masterpiece.",
          travel_make3: 'Reignite your passion for travel.',
          travel_make3_title:
            'There are countless reasons to love travel, and one of the best is the food—glorious food.',
          travel_make_btn: 'Start your explore',
        },

        adventure: {
          tickets_btn: 'Book tickets and go now!',
        },

        footer: {
          aboutH5: 'About us',
          about: {
            features: 'Features',
            news: 'News',
            plans: 'Plans',
          },
          businessH5: 'Business',
          business: {
            whyBusiness: 'Why visamazbaku',
            faq: 'FAQ',
            blog: 'Blog',
          },
          supportH5: 'Support',
          support: {
            supportCenter: 'Support center',
            feedback: 'Feedback',
            contactUs: 'Contact us',
          },
        },

        aboutUs: {
          aboutH2: 'About',
          chatH2: 'Chat with us',
          chatP1: 'Response time: Immediate',
          chatP2: 'Contact us on WhatsApp or gmail',
          chatP3: "We're available 24/7.",
          chatWpBtn: 'Chat on WhatsApp',

          aboutTitle: 'About us',
          aboutTitleDesc:
            'Our mission is to make your travels an unforgettable experience. We are with you in your travel plans with our professional team and innovative solutions.',
          aboutWhy: 'Why Choose Us?',
          aboutWhyP1:
            'With our industry experience and our focus on customer satisfaction, we make your travel plans easy and offer the best options for you. As a team that is with you every step of the way, we are committed to providing a safe and enjoyable experience.',
          aboutWhyP2:
            'With our commitment to sustainable tourism and innovative solutions, we provide travel experiences that respect our planet.',
          aboutVision: 'Our Vision and Values',
          aboutVisionP1:
            'Our vision is to provide affordable, reliable and sustainable travel experiences for all travelers. We always aim to provide the highest quality and ensure that every individual enjoys their travel experience.',
          aboutVisionP2:
            'As a team, we place honesty, transparency and customer satisfaction at the center of our values. We make your trip a special experience, not just a service.',
          aboutReviews: 'Customer Reviews',
          aboutReviews1:
            '«Traveling with the VisamAzBaku team was very comfortable! Many thanks!»',
          aboutReviews2:
            '«Everything was very well organized during my trip. Thank you!»',
          aboutReviews3:
            '«Excellent service and very comfortable! Everything was better than I expected.»',
          aboutOurTeam: 'Our Team',
          teamCeo: 'CEO',
          teamMarketing: 'Marketing Director',
          teamCustomer: 'Customer Services',
          teamIT: 'IT',
        },

        contactForm: {
          title: 'How can we help?',
          desc: "Don't know who to talk to? You can contact us via info@visamazbaku.az. We are ready to answer any questions you may have about the website.",
          fullName: 'Full name',
          email: 'Your e-mail address',
          request: 'Request type',
          requestVisa: 'Visa questions',
          requestTravel: 'Travel planning',
          requestOther: 'Other',
          requestYour: 'Your request',
          symbols: 'Remaining symbols',
          formBtn: 'Confirm',
        },
      },
    },
    az: {
      translation: {
        Services: 'Xidmətlərimiz',
        Blog: 'Bloq',
        ContactUs: 'Əlaqə',
        AboutUs: 'Haqqımızda',

        apply: 'Müraciət et',
        loading: 'Yüklənir...',

        requests: {
          errorOther: 'Xəta baş verdi.',
          errorEmailValidation:
            'Yalnız Gmail ünvanı daxil edin (nümunə: example@gmail.com).',
          errorEmailValidation2: 'Daxil etdiyiniz email ünvanı düzgün deyil.',
          errorEmailLimited:
            'Bu hesabla gün ərzində yalnız 2 dəfə sorğu göndərə bilərsiniz.',
          successFormMessage:
            'Sorğunuz göndərildi, ən qısa zamanda sizə geri dönüş olacaq.',
        },

        hero: {
          title: 'Dünyanı kəşf edin və onun gözəlliyindən həzz alın',
          desc: 'Hara səyahət planlayırsınız',
          search: 'Axtarış...',
        },
        popular: {
          title1: 'Məhşur Yerlər',
          title2: 'Gəlin yer üzündəki bu cənnətdən zövq alaq',
          title3:
            'Bir çox yerlər çox məşhur, gözəl, təmizdir və ziyarətçilərdə çox dərin təəssürat yaradacaq və onları geri qaytaracaq',
          travel_make: 'Şirin xatirələr yaratmaq üçün səyahət et.',
          travel_make_title: 'Çevik həyat tərzinə uyğun səfərlər tapın',
          travel_make1: 'Azadlığınıza uyğun səfərlər tapın',
          travel_make1_title:
            'Səyahət araşdırmaq azadlığı, gəzmək üçün çeviklik, düşünmək üçün təklik, kəşf etmək üçün kortəbiilik və məqsədinizi tapmaq üçün məxfilik təmin edir.',
          travel_make2: 'Səyahətlə təbiətə qayıdın',
          travel_make2_title:
            'Dünya böyük bir oyun meydançasıdır, və nəhayət Ana Təbiətin bənzərsiz əsərini kəşf etmək imkanı əldə edirsiniz.',
          travel_make3: 'Səyahət həvəsinizi yenidən alovlandırın',
          travel_make3_title:
            'Səyahəti sevmək üçün saysız-hesabsız səbəb var, və onlardan ən gözəli yeməklərdir – möhtəşəm yeməklər!',
          travel_make_btn: 'Kəşf etməyə başla',
        },

        adventure: {
          tickets_btn: 'Biletləri rezerv et və indi get!',
        },

        footer: {
          aboutH5: 'Haqqımızda',
          about: {
            features: 'Xüsusiyyətlər',
            news: 'Xəbərlər',
            plans: 'Planlar',
          },
          businessH5: 'Şirkət',
          business: {
            whyBusiness: 'Niyə visamazbaku',
            faq: 'FAQ',
            blog: 'Bloq',
          },
          supportH5: 'Dəstək',
          support: {
            supportCenter: 'Dəstək mərkəzi',
            feedback: 'Geri bildirim',
            contactUs: 'Bizimlə əlaqə',
          },
        },

        aboutUs: {
          aboutH2: 'Əlaqə',
          chatH2: 'Bizimlə söhbət edin',
          chatP1: 'Cavab vaxtı: Dərhal',
          chatP2: 'WhatsApp və ya gmail vasitəsilə bizimlə əlaqə saxlayın',
          chatP3: '24/7 xidmətinizdəyik.',
          chatWpBtn: 'WhatsApp-da söhbət edin',

          aboutTitle: 'Haqqımızda',
          aboutTitleDesc:
            'Missiyamız, səyahətlərinizi unudulmaz bir təcrübəyə çevirməkdir. Peşəkar komandamız və yenilikçi həllərimizlə səyahət planlarınızda yanınızdayıq.',
          aboutWhy: 'Niyə Bizi Seçməlisiniz?',
          aboutWhyP1:
            'Sənayedəki təcrübəmiz və müştəri məmnuniyyətinə verdiyimiz önəm sayəsində səyahət planlarınızı asanlaşdırır və sizin üçün ən yaxşı seçimləri təklif edirik. Yolculuğunuzun hər addımında yanınızda olan bir komanda olaraq, təhlükəsiz və xoş bir təcrübə təqdim etməyi öhdəmizə götürürük.',
          aboutWhyP2:
            'Davamlı turizmə sadiqliyimiz və yenilikçi həllərimizlə, planetimizə hörmət edən səyahət təcrübələri təmin edirik.',
          aboutVision: 'Vizyonumuz və Dəyərlərimiz',
          aboutVisionP1:
            'Vizyonumuz, bütün səyahətsevərlər üçün əlçatan, etibarlı və davamlı səyahət təcrübələri təqdim etməkdir. Hər zaman ən yüksək keyfiyyəti təmin etməyi hədəfləyirik və hər bir fərdin səyahət təcrübəsindən zövq almasını önəmsəyirik.',
          aboutVisionP2:
            'Komanda olaraq dürüstlük, şəffaflıq və müştəri məmnuniyyətini dəyərlərimizin mərkəzinə qoyuruq. Səyahətinizi yalnız bir xidmət deyil, xüsusi bir təcrübəyə çeviririk.',
          aboutReviews: 'Müştəri Rəyləri',
          aboutReviews1:
            '«VisamAzBaku komandası ilə səyahət etmək çox rahat idi! Çox təşəkkürlər!»',
          aboutReviews2:
            '«Səyahətim ərzində hər şey çox yaxşı təşkil olunmuşdu. Təşəkkürlər!»',
          aboutReviews3:
            '«Əla xidmət və çox rahatlıq! Hər şey gözlədiyimdən daha yaxşı idi.»',
          aboutOurTeam: 'Bizim Komanda',
          teamCeo: 'CEO',
          teamMarketing: 'Marketinq Direktoru',
          teamCustomer: 'Müştəri Xidmətləri',
          teamIT: 'IT',
        },

        contactForm: {
          title: 'Necə kömək edə bilərik?',
          desc: 'Kimlə danışacağınızı bilmirsiniz? Bizimlə info@visamazbaku.az vasitəsilə əlaqə saxlaya bilərsiniz. Web saytla bağlı hər hansı bir sorğunuza cavab verməyə hazırıq.',
          fullName: 'Ad soyad',
          email: 'E-mail ünvanınız',
          request: 'Sorğu növü',
          requestVisa: 'Viza sualları',
          requestTravel: 'Səyahət Planlaşdırma',
          requestOther: 'Digər',
          requestYour: 'Sorğunuz',
          symbols: 'Qalan Simvollar',
          formBtn: 'Təsdiq et',
        },
      },
    },
    ru: {
      translation: {
        Services: 'Сервисы',
        Blog: 'Блог',
        ContactUs: 'Контакты',
        AboutUs: 'О нас',

        apply: 'Обратиться',
        loading: 'Загрузка...',

        requests: {
          errorOther: 'произошла ошибка',
          errorEmailValidation:
            'Просто введите адрес Gmail (например: example@gmail.com).',
          errorEmailValidation2:
            'Введенный вами адрес электронной почты неверен.',
          errorEmailLimited:
            'С помощью этой учетной записи вы можете отправлять запросы только 2 раза в день.',
          successFormMessage:
            'Ваш запрос отправлен, мы свяжемся с вами как можно скорее.',
        },

        hero: {
          title: 'Откройте для себя мир и наслаждайтесь его красотой',
          desc: 'Куда вы планируете поехать?',
          search: 'Поиск...',
        },
        popular: {
          title1: 'Популярное Место',
          title2: 'Давайте насладимся этим раем на земле.',
          title3:
            'Многие места очень известны, красивы, чисты и оставляют глубокое впечатление на посетителей, заставляя их возвращаться',
          travel_make: 'Путешествуйте, чтобы создавать сладкие воспоминания.',
          travel_make_title:
            'Найдите путешествия, которые подходят для гибкого образа жизни.',
          travel_make1: 'Найдите поездки, которые соответствуют вашей свободе.',
          travel_make1_title:
            'Путешествия дают свободу для исследований, гибкость для передвижения, уединение для размышлений, спонтанность для открытий и уединение для поиска своей цели.',
          travel_make2: 'Вернитесь к природе через путешествия.',
          travel_make2_title:
            'Мир — это огромная игровая площадка, и у вас наконец-то появилась возможность открыть для себя уникальный шедевр Матушки Природы.',
          travel_make3: 'Разожгите свою страсть к путешествиям заново.',
          travel_make3_title:
            'Существует бесконечное множество причин любить путешествия, и одна из них — это еда, великолепная еда!',
          travel_make_btn: 'Начни своё исследование.',
        },

        adventure: {
          tickets_btn: 'Забронируй билеты и поехали прямо сейчас!',
        },

        footer: {
          aboutH5: 'О нас',
          about: {
            features: 'Функции',
            news: 'Новости',
            plans: 'Планы',
          },
          businessH5: 'бизнес',
          business: {
            whyBusiness: 'Почему visamazbaku',
            faq: 'FAQ',
            blog: 'Блог',
          },
          supportH5: 'Поддерживать',
          support: {
            supportCenter: 'Центр поддержки',
            feedback: 'Обратная связь',
            contactUs: 'Связаться с нами',
          },
        },

        aboutUs: {
          aboutH2: 'О нас',
          chatH2: 'Пообщайтесь с нами',
          chatP1: 'Время ответа: Немедленно',
          chatP2: 'Свяжитесь с нами через WhatsApp или Gmail',
          chatP3: 'Мы к вашим услугам 24/7.',
          chatWpBtn: 'Чат в WhatsApp',

          aboutTitle: 'О нас',
          aboutTitleDesc:
            'Наша миссия - сделать ваши путешествия незабываемыми. Наша профессиональная команда и инновационные решения помогут вам в ваших путешествиях.',
          aboutWhy: 'Почему выбирают нас?',
          aboutWhyP1:
            'Благодаря нашему опыту работы в отрасли и ориентации на удовлетворение потребностей клиентов мы упростим ваши планы путешествий и предложим лучшие варианты для вас. Наша команда, которая будет с вами на каждом шагу, стремится обеспечить безопасный и приятный опыт.',
          aboutWhyP2:
            'Благодаря нашей приверженности устойчивому туризму и инновационным решениям мы обеспечиваем путешествия, которые бережно относятся к нашей планете.',
          aboutVision: 'Наше видение и ценности',
          aboutVisionP1:
            'Наша цель - обеспечить доступные, надежные и экологичные путешествия для всех путешественников. Мы всегда стремимся обеспечить высочайшее качество и гарантировать, что каждый человек получит удовольствие от своего путешествия.',
          aboutVisionP2:
            'Как команда, мы ставим честность, прозрачность и удовлетворенность клиентов в центр наших ценностей. Мы превращаем ваше путешествие в особый опыт, а не просто в услугу.',
          aboutReviews: 'Отзывы покупателей',
          aboutReviews1:
            '«Путешествовать с командой VisamAzBaku было очень комфортно! Большое спасибо!»',
          aboutReviews2:
            '«Все было очень хорошо организовано во время моей поездки. Спасибо!»',
          aboutReviews3:
            '«Отличный сервис и очень комфортно! Все было лучше, чем я ожидал».',
          aboutOurTeam: 'Наша команда',
          teamCeo: 'CEO',
          teamMarketing: 'Директор по маркетингу',
          teamCustomer: 'Обслуживание клиентов',
          teamIT: 'IT',
        },

        contactForm: {
          title: 'Как мы можем помочь?',
          desc: 'Не знаете, с кем поговорить? Вы можете связаться с нами по адресу info@visamazbaku.az. Мы готовы ответить на любые ваши вопросы о сайте.',
          fullName: 'Полное имя',
          email: 'Ваш электронный адрес',
          request: 'Тип запроса',
          requestVisa: 'Визовые вопросы',
          requestTravel: 'Планирование путешествия',
          requestOther: 'Другой',
          requestYour: 'Ваш запрос',
          symbols: 'Остальные символы',
          formBtn: 'Подтвердите',
        },
      },
    },
  },
  lng: 'az',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
