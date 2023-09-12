const searchUser = window.location.search;
const searchParams = new URLSearchParams(searchUser);
const user = parseInt(searchParams.get("userId"));

const userContainer = document.querySelector("#user .user-wrap");

const userImgBg = document.querySelector("#user-img-bg");
const userPosition = document.querySelector("#user-position");
const userSkills = document.querySelector("#user-skills");
const userName = document.querySelector("#user-name");
const prevUser = document.querySelector("#prev-user");
const nextUser = document.querySelector("#next-user");
const users = [
    {
      id: 1,
      name: 'Дмитрий Иванов',
      imgUrl: '/img/dmintry-eblanov-full.png',
      position: 'Генеральный директор, управляющий партнер',
      listOfGoals: [
        'Более чем 15-летний опыт в области маркетинга и рекламы в крупных компаниях',
        '10 лет в управляющем менеджменте проектов, в том числе вывод стартапов федерального и международного уровня',
        'Подготовка и реализация маркетинговых компаний полного цикла, внедрение инновация в маркетинговую среду',
        'Маркетинговый анализ и аудит проектов в рамках инвестиционных сделок',
        'Выведение на рынок более 50-ти брендов (в том числе сетевых) и дальнейшее продвижение']
    },
    {
        id: 2,
        name: 'Кирилл Черный',
        imgUrl: '/img/team-kirill.png',
        position: 'Финансы и инвестиции',
        listOfGoals: [
          'Кирилл просто кирилл ',
          'Черный потому что из африки']
      },
      {
        id: 3,
        name: 'Михаил Куликов',
        imgUrl: '/img/team-mahail-remudov.png',
        position: 'Стратегический маркетинг и продажи',
        listOfGoals: [
          'Миша куликов -1год в стратегическом маркетинге',
          'Никто не знает что он здесь забыл ']
      },
      {
        id: 4,
        name: 'Андрей Колотаев',
        imgUrl: '/img/team-andrei.png',
        position: 'Архитектура',
        listOfGoals: [
          'Колотаев андрей мужик архитектор',
          '45лет в архитектуре хотя ему всего 30']
      },
      {
        id: 5,
        name: 'Сергей Водопетов',
        imgUrl: '/img/sergei-jirnii.png',
        position: 'PR и GR проектов',
        listOfGoals: [
          'Толстый серега Пр и Гр проектов',
          '10 лет в рекламе и не только']
      },
      {
        id: 6,
        name: 'Бондарев Андрей',
        imgUrl: '/img/team-bondarev-andrei.png',
        position: 'Маркетинговые исследования',
        listOfGoals: [
          'Андрюша 22 года не женат ',
          'Имеет 33 ребенка',]
      }
  ]
  function generateListOfGoals(goals) {
    let markupGoals = "";
    goals.forEach((element) => {
      markupGoals += `<li class="user-skills"><h4 class="skills-text">${element}</h4></li>`;
    });
    return markupGoals;
  }

  function markupUser(user) {
    const { id, name, imgUrl, position, listOfGoals } = user;
  
    return `
  
                      <div class="left-img-block" style="background-image: url(..${imgUrl});">
                          <div class="notes">
                              <h3>“</h3>
                              <h4 class="notes-text">Верю в брендинг. Доверяю интуиции</h4>
                          </div>
                      </div>
                      <div class="right-discription-block">
                          <button class="leave-btn">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <g id="x 1">
                                      <path id="Vector" d="M12 4L4 12" stroke="#4BDAFF" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                      <path id="Vector_2" d="M4 4L12 12" stroke="#4BDAFF" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                  </g>
                              </svg>
                              <h3 class="leave">Назад к команде</h3>
                          </button>
                          <div class="position-name">
                              <h2 class="wich-position">${position}</h2>
                              <h3 class="name">${name}</h3>
                          </div>
                          <ul>
                            ${generateListOfGoals(listOfGoals)}
                          </ul>
                          <div class="back-or-next-user">
                              <div class="back">
                                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g id="left-arrow 1" clip-path="url(#clip0_1_441)">
                                          <g id="Group">
                                              <g id="Group_2">
                                                  <path id="Vector"
                                                      d="M12.4922 5.99218H1.73779L3.5193 4.21931C3.71809 4.02147 3.71885 3.69995 3.521 3.50116C3.32316 3.30235 3.00161 3.30162 2.80283 3.49944L0.149408 6.14006C0.14923 6.14021 0.149103 6.14039 0.148951 6.14054C-0.0493244 6.33839 -0.0499591 6.66095 0.1489 6.85945C0.149078 6.8596 0.149205 6.85978 0.149357 6.85993L2.80278 9.50056C3.00154 9.69835 3.32308 9.69766 3.52095 9.49883C3.7188 9.30005 3.71804 8.97853 3.51925 8.78068L1.73779 7.00781H12.4922C12.7727 7.00781 13 6.78046 13 6.5C13 6.21953 12.7727 5.99218 12.4922 5.99218Z"
                                                      fill="#949FA8" />
                                              </g>
                                          </g>
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_1_441">
                                              <rect width="13" height="13" fill="#4BDAFF" />
                                          </clipPath>
                                      </defs>
                                  </svg>
                                  <h3>Андрей Бондарев</h3>
                              </div>
                              <div class="next">
                                  <h3>Кирилл Черный</h3>
                                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g id="left-arrow 1" clip-path="url(#clip0_1_447)">
                                          <g id="Group">
                                              <g id="Group_2">
                                                  <path id="Vector"
                                                      d="M0.507803 5.99218H11.2622L9.4807 4.21931C9.28191 4.02147 9.28115 3.69995 9.479 3.50116C9.67684 3.30235 9.99839 3.30162 10.1972 3.49944L12.8506 6.14006C12.8508 6.14021 12.8509 6.14039 12.851 6.14054C13.0493 6.33839 13.05 6.66095 12.8511 6.85945C12.8509 6.8596 12.8508 6.85978 12.8506 6.85993L10.1972 9.50056C9.99846 9.69835 9.67692 9.69766 9.47905 9.49883C9.2812 9.30005 9.28196 8.97853 9.48075 8.78068L11.2622 7.00781H0.507803C0.227339 7.00781 -9.53674e-06 6.78046 -9.53674e-06 6.5C-9.53674e-06 6.21953 0.227339 5.99218 0.507803 5.99218Z"
                                                      fill="#949FA8" />
                                              </g>
                                          </g>
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_1_447">
                                              <rect width="13" height="13" fill="#4BDAFF"
                                                  transform="matrix(-1 0 0 1 13 0)" />
                                          </clipPath>
                                      </defs>
                                  </svg>
                              </div>
                          </div>
                      </div>
  
    `;
  }


  const selectedUser = users.find(selectedUser => selectedUser.id === user);

    function updateUser(selectedUser){
        userImgBg.style.backgroundImage =`url(..${selectedUser.imgUrl})`
        userPosition.textContent = selectedUser.position;
        userName.textContent = selectedUser.name;
        userSkills.innerHTML = generateListOfGoals(selectedUser.listOfGoals);
    }
    updateUser(selectedUser);