// Case copy grounded in the supplied Notion cases and local Figma audits.
// Intended effects are hypotheses; neither case establishes a shipped product.
export const cases = {
  ecopart: {
    ru: {
      title: 'Ecopart',
      subtitle: 'Доверие прежде, чем ключи от квартиры.',
      category: 'Мобильное приложение · Совместное жильё',
      status: 'Дизайн и прототип · Приложение не разработано',
      role: 'Продуктовый дизайнер · Исследование, UX/UI',
      period: 'Ноябрь 2025 — февраль 2026',
      team: '',
      summary: 'Выбрать комнату — значит выбрать людей, с которыми будешь жить. Я спроектировала сервис совместного жилья вокруг этого решения: от исследования опасений арендаторов и собственников до логики просмотра, заявки и визуальной системы.',
      sections: [
        {
          id: 'context',
          title: 'Что мешает сказать «да»?',
          body: [
            'В исследовании я изучала, что заставляет арендаторов и собственников сомневаться. За вопросами о документах, соседях и правилах стояла общая потребность: понимать, кому доверяешь и что произойдёт дальше.',
            'Я связала эти опасения с этапами пути пользователя и описала сущности сервиса: жильё, комнаты, просмотры и участников. Это стало основой для проектирования сценариев и интерфейса.',
          ],
          takeaway: 'Главный вопрос: как помочь двум незнакомым людям принять осознанное решение?',
        },
        {
          id: 'decision',
          title: 'Сначала просмотр. Затем заявка.',
          body: [
            'Я сделала просмотр обязательным условием заявки на аренду. В прототипе следующий этап открывается, когда просмотр отмечен как завершённый. Человек получает возможность познакомиться с жильём и будущими соседями до обязательств.',
            'Это осознанный компромисс: дополнительный шаг замедляет процесс, но может сделать решение увереннее. Проверка личности перед заявкой, понятная последовательность действий и единый раздел с документами и платежами поддерживают ту же логику.',
          ],
          takeaway: 'Гипотеза: уместное дополнительное действие может укреплять доверие. Её ещё нужно проверить.',
        },
        {
          id: 'system',
          title: 'Один характер во всех состояниях.',
          body: [
            'Округлые карточки, мягкие фиолетовые и зелёные акценты и типографика Urbanist задают спокойный тон. Повторяемые компоненты связывают поиск жилья, просмотр, профиль и поддержку в одну систему.',
            'Маскот появляется в напряжённых и неопределённых моментах: при проверке личности, ожидании и ошибках. Его задача — поддержать объяснение происходящего и следующий шаг. В Figma система включает текстовые стили, переменные и светлый и тёмный режимы.',
          ],
        },
        {
          id: 'reflection',
          title: 'Проверять механизм, а не только впечатление.',
          body: [
            'Проект помог мне рассматривать дополнительные шаги как часть продуктового решения. Важен смысл каждого требования и то, насколько понятно оно человеку в конкретный момент.',
            'Следующий вопрос — какие механизмы действительно помогают, а какие создают лишнюю нагрузку. Отдельная проверка обязательного просмотра и верификации даст больше информации, чем общая оценка привлекательности интерфейса.',
          ],
        },
      ],
      outcome: 'Результат работы — исследование, логика сервиса, пользовательские сценарии, визуальная система и прототип мобильного приложения. Улучшение качества совпадений и снижение тревоги остаются ожидаемыми эффектами; данных запущенного продукта нет.',
      next: 'Для следующей итерации я бы проверила, понимают ли участники порядок действий, могут ли завершить ключевой сценарий и где обязательные шаги вызывают сомнения. По этим наблюдениям — скорректировала бы логику и объяснения.',
      figma: 'https://www.figma.com/design/vEzs2mfSuBpPfgembUUaLU/Ecopart_Co-living_Mobile-App?node-id=0-1',
      external: 'https://katerinasysoeva.com/en/work/ecopart',
    },
    en: {
      title: 'Ecopart',
      subtitle: 'Trust comes before the keys.',
      category: 'Mobile app · Shared living',
      status: 'Design and prototype · App not developed',
      role: 'Product Designer · Research, UX/UI',
      period: 'November 2025–February 2026',
      team: '',
      summary: 'Choosing a room also means choosing the people you will live with. I designed a shared-living service around that decision, from researching renters’ and owners’ concerns to defining the viewing flow, application logic, and visual system.',
      sections: [
        {
          id: 'context',
          title: 'What makes people hesitate?',
          body: [
            'I explored the reasons behind renters’ and owners’ hesitation through research. Questions about documents, housemates, and rules pointed to a shared need: knowing whom to trust and what happens next.',
            'I mapped those concerns across the user journey and defined the service entities: listings, rooms, viewings, and participants. This provided the foundation for the flows and interface.',
          ],
          takeaway: 'The central question: how can two strangers make an informed decision about living together?',
        },
        {
          id: 'decision',
          title: 'View first. Apply second.',
          body: [
            'I made a viewing a prerequisite for a rental application. In the prototype, the next stage becomes available once the viewing is marked complete. People have an opportunity to meet their potential housemates and see the home before committing.',
            'The trade-off is deliberate: another step slows the process, but may support a more confident decision. Identity verification before applying, a clear sequence of steps, and one place for documents and payments follow the same principle.',
          ],
          takeaway: 'The hypothesis: a well-placed extra step can strengthen trust. That still needs testing.',
        },
        {
          id: 'system',
          title: 'A consistent character across every state.',
          body: [
            'Rounded cards, muted violet and green accents, and Urbanist typography set a calm tone. Reusable components connect discovery, viewings, profiles, and support into a coherent system.',
            'The mascot appears at moments of uncertainty: identity checks, waiting, and errors. Its purpose is to support an explanation and a next step. In Figma, the system includes text styles, variables, and light and dark modes.',
          ],
        },
        {
          id: 'reflection',
          title: 'Test each mechanism, not just the overall impression.',
          body: [
            'This project helped me treat additional steps as product decisions. Each requirement needs a purpose that people can understand at the moment they encounter it.',
            'The next question is which mechanisms help and which create unnecessary effort. Testing the mandatory viewing and verification separately would reveal more than a general assessment of the interface’s appeal.',
          ],
        },
      ],
      outcome: 'The work produced research, service logic, user flows, a visual system, and a mobile app prototype. Better matches and reduced anxiety remain intended effects; there are no live product results.',
      next: 'For the next iteration, I would test whether participants understand the sequence, can complete the main flow, and hesitate at any mandatory steps. Those observations would guide changes to the logic and explanations.',
      figma: 'https://www.figma.com/design/vEzs2mfSuBpPfgembUUaLU/Ecopart_Co-living_Mobile-App?node-id=0-1',
      external: 'https://katerinasysoeva.com/en/work/ecopart',
    },
  },
  ehope: {
    ru: {
      title: 'Ehope',
      subtitle: 'Сообщество начинается с первого действия.',
      category: 'Веб-платформа · Экологические инициативы',
      status: 'Концептуальный проект',
      role: 'Продуктовый дизайнер · UX/UI',
      period: 'Октябрь–ноябрь 2025 · Самостоятельная доработка: март 2026',
      team: 'Product Owner, я и ещё два дизайнера',
      summary: 'Как вовлечь человека, пока на платформе ещё мало участников и событий? Вместе с командой я разрабатывала направление и UX/UI Ehope с нуля, а затем самостоятельно довела интерфейс и визуальную систему до детальных макетов.',
      sections: [
        {
          id: 'context',
          title: 'Первый полезный опыт — до большого сообщества.',
          body: [
            'Ehope — концепция экологической платформы для Франции. На раннем этапе её ценность должна быть понятна даже при небольшом объёме контента: человеку нужно увидеть доступное действие и понять, как присоединиться.',
            'Гость и участник приходят с разными вопросами. Гостевая главная знакомит с идеей и смыслом участия до регистрации. Главная участника сосредоточена на календаре, подборках инициатив и людях, которые развивают сообщество.',
          ],
          takeaway: 'Гостю — причина присоединиться. Участнику — понятный следующий шаг.',
        },
        {
          id: 'decision',
          title: 'Помочь выбрать, когда искать пока нечего.',
          body: [
            'При малом количестве инициатив глобальный поиск рисковал приводить к пустой выдаче. Основой знакомства с платформой стали календарь, фильтры и тематические подборки: они показывают доступные варианты и помогают сузить выбор.',
            'Это компромисс между свободой запроса и понятным маршрутом по существующему контенту. Цель решения — уменьшить число тупиков в начале знакомства с сервисом; изменение поведения пользователей ещё не измерялось.',
          ],
        },
        {
          id: 'system',
          title: 'Выразительный характер, полезные состояния.',
          body: [
            'Тёмно-синяя основа, оранжевые акценты действий, фотографии людей и округлые карточки создают визуальный язык Ehope. Узкие заголовки League Gothic сочетаются с основным текстом Inter.',
            'Я переработала первоначальную идею маскота в восьмибитного ежа. Он появляется в пустых состояниях и на странице 404 вместе с объяснением и действием для продолжения. Пиксельный персонаж добавляет характер чистому современному интерфейсу.',
          ],
          takeaway: 'Пустой экран тоже должен помогать двигаться дальше.',
        },
        {
          id: 'reflection',
          title: 'Мотивацию нужно проверять отдельно.',
          body: [
            'В концепцию вошли скидки у экологических партнёров, специальные мастер-классы и рейтинг участников. Это гипотезы о том, как связать участие с личной пользой. Они требуют проверки реализуемости и интереса аудитории.',
            'Для меня главный вопрос следующей итерации — достаточно ли понятного первого действия, чтобы человек захотел вернуться. Ответ поможет определить, какие механики стоит развивать и какой контент нужен в первую очередь.',
          ],
        },
      ],
      outcome: 'Результат — концепция пользовательских сценариев и детальные макеты с узнаваемой визуальной системой. Командный этап и самостоятельная доработка составляют разные части моего вклада. Запуск, партнёрские соглашения и измеримые результаты продукта не подтверждены.',
      next: 'Далее я бы проверила два сценария: может ли гость объяснить ценность платформы и выбрать действие, а участник — найти подходящую инициативу без пустого поиска. Отдельно — интерес к вознаграждениям и возможность их обеспечить.',
      figma: 'https://www.figma.com/design/vu3BNg8IQnrwXmvUqOsqZV?node-id=1-3',
      external: 'https://katerinasysoeva.com/en/work/ehope',
    },
    en: {
      title: 'Ehope',
      subtitle: 'A community starts with one action.',
      category: 'Web platform · Environmental initiatives',
      status: 'Concept project',
      role: 'Product Designer · UX/UI',
      period: 'October–November 2025 · Independent refinement: March 2026',
      team: 'Product Owner, me, and two other designers',
      summary: 'How do you engage someone while a platform still has few members and activities? I helped develop Ehope’s direction and UX/UI from scratch with a team, then independently refined the interface and visual system into high-fidelity designs.',
      sections: [
        {
          id: 'context',
          title: 'A useful first experience, before a large community.',
          body: [
            'Ehope is an environmental platform concept for France. At an early stage, its value needs to be clear even with limited content: people need to see an available action and understand how to take part.',
            'Guests and members arrive with different questions. The guest homepage explains the idea and value of participating before registration. The member homepage centres on a calendar, curated initiatives, and the people contributing to the community.',
          ],
          takeaway: 'Give guests a reason to join and members a clear next step.',
        },
        {
          id: 'decision',
          title: 'Help people choose before asking them to search.',
          body: [
            'With few initiatives available, global search risked producing empty results. A calendar, filters, and curated collections became the main discovery tools, showing available options and helping people narrow their choices.',
            'The trade-off balances open-ended queries with a clear route through existing content. The aim is to reduce dead ends early in the experience; a change in user behaviour has not yet been measured.',
          ],
        },
        {
          id: 'system',
          title: 'A distinctive character, useful interface states.',
          body: [
            'A navy foundation, orange action accents, photographs of people, and rounded cards define Ehope’s visual language. Condensed League Gothic headings pair with Inter body text.',
            'I developed the initial mascot idea into an 8-bit hedgehog. It appears in empty states and on the 404 page alongside an explanation and a way forward. The pixel character brings personality to a clean, modern interface.',
          ],
          takeaway: 'An empty screen should still help someone move forward.',
        },
        {
          id: 'reflection',
          title: 'Motivation needs its own validation.',
          body: [
            'The concept includes discounts from environmental partners, exclusive workshops, and a participant leaderboard. These are hypotheses about connecting participation with personal value. Feasibility and audience interest still need testing.',
            'For the next iteration, the key question is whether a clear first action gives someone a reason to return. The answer would help prioritise both the mechanics and the content the platform needs first.',
          ],
        },
      ],
      outcome: 'The work produced a concept for the user journeys and high-fidelity designs with a distinctive visual system. The team phase and independent refinement are separate parts of my contribution. Launch, partner agreements, and measurable product outcomes have not been confirmed.',
      next: 'I would next test two scenarios: whether guests can explain the platform’s value and choose an action, and whether members can find a relevant initiative without an empty search. Reward interest and the ability to deliver those rewards would be tested separately.',
      figma: 'https://www.figma.com/design/vu3BNg8IQnrwXmvUqOsqZV?node-id=1-3',
      external: 'https://katerinasysoeva.com/en/work/ehope',
    },
  },
};
