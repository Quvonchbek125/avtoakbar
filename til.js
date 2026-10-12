/* AvtoAkbar — til tanlash moduli
   Tillar: Lotin (asosiy), Русский, English, Kirill
   Sayt har safar ochilganda doimo LOTIN tilida turadi (til saqlanmaydi). */
(function (root) {
  'use strict';

  var LANG = 'lotin';

  // ---------- LUG'AT: "lotin": [rus, ingliz] ----------
  var D = {
    "Avtomaktab Boshqaruv Tizimi": ["Система управления автошколой", "Driving School Management System"],
    "Avtomaktab boshqaruv tizimi": ["Система управления автошколой", "Driving school management system"],
    "Parol kiriting": ["Введите пароль", "Enter password"],
    "Kirish": ["Войти", "Log in"],
    "Kirish doimiy bloklangan": ["Вход заблокирован навсегда", "Login is permanently blocked"],
    "Admin bilan bog'laning": ["Свяжитесь с администратором", "Contact the admin"],
    "Xato soni": ["Количество ошибок", "Failed attempts"],
    "Doimiy bloklandi": ["Заблокировано навсегда", "Permanently blocked"],
    "Parol noto'g'ri": ["Неверный пароль", "Wrong password"],
    "Server xato": ["Ошибка сервера", "Server error"],
    "Supabase ulanishda xato": ["Ошибка подключения к Supabase", "Supabase connection error"],
    "Xato": ["Ошибка", "Error"],
    "Bu parol faqat blokdan chiqarish uchun": ["Этот пароль только для разблокировки", "This password is only for unblocking"],
    "Admin panelida Bloklanganlar ro'yxatiga kiring": ["Зайдите в список заблокированных в админ-панели", "Open the Blocked list in the admin panel"],
    "1 soat bloklandi": ["Заблокировано на 1 час", "Blocked for 1 hour"],
    "Yilni tanlang": ["Выберите год", "Select year"],
    "Qaysi yil ma'lumotlarini ko'rmoqchisiz": ["Данные какого года вы хотите посмотреть", "Which year's data do you want to view"],
    "Admin paroli": ["Пароль администратора", "Admin password"],
    "Admin": ["Админ", "Admin"],
    "Filial paroli": ["Пароль филиала", "Branch password"],
    "filiali paroli": ["пароль филиала", "branch password"],
    "Kirish paroli": ["Пароль для входа", "Login password"],
    "Yangi parol": ["Новый пароль", "New password"],
    "Parollar": ["Пароли", "Passwords"],
    "Parol": ["Пароль", "Password"],
    "Chiqish": ["Выйти", "Log out"],
    "Chiqmoqchimisiz": ["Вы хотите выйти", "Do you want to log out"],
    "Bekor": ["Отмена", "Cancel"],
    "Saqlash": ["Сохранить", "Save"],
    "Ha": ["Да", "Yes"],
    "Yo'q": ["Нет", "No"],
    "Bor": ["Есть", "Yes"],
    "Yopish": ["Закрыть", "Close"],
    "O'rnatish": ["Установить", "Set"],
    "Yuklanmoqda": ["Загрузка", "Loading"],
    "Orqaga": ["Назад", "Back"],
    "Yangilash": ["Обновить", "Refresh"],
    "Qayta urinish": ["Повторить", "Retry"],
    "Internet bilan bog'lanishda xato yuz berdi": ["Ошибка подключения к интернету", "Internet connection error"],

    // menyu
    "Filiallar": ["Филиалы", "Branches"],
    "Guruhlar": ["Группы", "Groups"],
    "Talabalar": ["Курсанты", "Students"],
    "To'lovlar": ["Платежи", "Payments"],
    "Bloklanganlar": ["Заблокированные", "Blocked"],
    "Ekspres": ["Экспресс", "Express"],
    "Hisobot": ["Отчёт", "Report"],

    // filiallar
    "Filial qo'shish": ["Добавить филиал", "Add branch"],
    "Filial tahrirlash": ["Редактировать филиал", "Edit branch"],
    "Filial nomi": ["Название филиала", "Branch name"],
    "Filial": ["Филиал", "Branch"],
    "Amallar": ["Действия", "Actions"],
    "Amal": ["Действие", "Action"],
    "Filiallar yo'q": ["Нет филиалов", "No branches"],
    "Masalan: Yunusobod filiali": ["Например: филиал Юнусабад", "e.g. Yunusabad branch"],
    "Nomi va parol to'ldiring": ["Заполните название и пароль", "Fill in the name and password"],
    "Faqat admin": ["Только администратор", "Admin only"],
    "Bu filialdan barcha guruh va talabalar ham o'chadi": ["Все группы и курсанты этого филиала тоже будут удалены", "All groups and students of this branch will also be deleted"],
    "Filial parollarini boshqarish": ["Управление паролями филиалов", "Manage branch passwords"],
    "Xavfsizlik tufayli eski parollarni ko'rsatib bo'lmaydi": ["Из соображений безопасности старые пароли показать нельзя", "For security reasons old passwords cannot be shown"],
    "Yangi parol o'rnating": ["Установите новый пароль", "Set a new password"],
    "Parol kamida 4 ta belgidan iborat bo'lsin": ["Пароль должен содержать не менее 4 символов", "Password must be at least 4 characters"],
    "Sessiya tugadi, qaytadan kiring": ["Сессия истекла, войдите заново", "Session expired, please log in again"],
    "Parol muvaffaqiyatli o'rnatildi": ["Пароль успешно установлен", "Password set successfully"],
    "admin tasdiqlash muvaffaqiyatsiz": ["подтверждение администратора не удалось", "admin verification failed"],

    // guruhlar
    "Barcha filiallar": ["Все филиалы", "All branches"],
    "Guruh qo'shish": ["Добавить группу", "Add group"],
    "Guruh tahrirlash": ["Редактировать группу", "Edit group"],
    "Guruh nomi": ["Название группы", "Group name"],
    "Guruh tanlang": ["Выберите группу", "Select group"],
    "Guruh": ["Группа", "Group"],
    "O'qituvchi": ["Преподаватель", "Teacher"],
    "Qarzdorlik": ["Задолженность", "Debt"],
    "Hammasi to'lagan": ["Все оплатили", "All paid"],
    "Guruhlar yo'q": ["Нет групп", "No groups"],
    "Masalan: A-101": ["Например: A-101", "e.g. A-101"],
    "To'liq ism": ["Полное имя", "Full name"],
    "Filial va guruh nomini to'ldiring": ["Заполните филиал и название группы", "Fill in the branch and group name"],
    "Guruhni o'chirsangiz barcha talabalar ham o'chadi": ["При удалении группы все курсанты тоже будут удалены", "Deleting the group will also delete all its students"],
    "Barcha guruhlar": ["Все группы", "All groups"],

    // talabalar
    "Ism qidirish": ["Поиск по имени", "Search by name"],
    "Talaba qo'shish": ["Добавить курсанта", "Add student"],
    "Talaba tahrirlash": ["Редактировать курсанта", "Edit student"],
    "F.I.O": ["Ф.И.О.", "Full name"],
    "Umumiy to'lov": ["Общая оплата", "Total payment"],
    "Ayol instr.": ["Жен. инстр.", "Female instr."],
    "Ayol instruktor to'lovi": ["Платёж за инструктора-женщину", "Female instructor payment"],
    "Ayol instruktor": ["Инструктор-женщина", "Female instructor"],
    "ayol instruktor": ["инструктор-женщина", "female instructor"],
    "To'langan": ["Оплачено", "Paid"],
    "To'lagan": ["Оплатил", "Paid in full"],
    "Qoldiq": ["Остаток", "Balance"],
    "Holat": ["Статус", "Status"],
    "Qisman": ["Частично", "Partial"],
    "Qarzdor": ["Должник", "Debtor"],
    "Talabalar yo'q": ["Нет курсантов", "No students"],
    "Talabani o'chirasizmi": ["Удалить курсанта", "Delete this student"],
    "Guruh va F.I.O to'ldiring": ["Заполните группу и Ф.И.О.", "Fill in the group and full name"],
    "Telefon raqamini to'liq kiriting (9 ta raqam)": ["Введите номер телефона полностью (9 цифр)", "Enter the full phone number (9 digits)"],
    "Familiya Ism Otasining ismi": ["Фамилия Имя Отчество", "Last name, first name, patronymic"],
    "Telefon raqami": ["Номер телефона", "Phone number"],
    "Qo'shimcha raqam (ixtiyoriy)": ["Доп. номер (необязательно)", "Extra number (optional)"],
    "Tug'ilgan yil": ["Год рождения", "Birth year"],
    "Kun": ["День", "Day"],
    "Oy": ["Месяц", "Month"],
    "Viloyat": ["Область", "Region"],
    "Tuman": ["Район", "District"],
    "Mahalla": ["Махалля", "Neighborhood"],
    "Ko'cha/Uy": ["Улица/Дом", "Street/House"],
    "Ko'cha, uy raqami": ["Улица, номер дома", "Street, house number"],
    "Tanlang": ["Выберите", "Select"],
    "Jami": ["Итого", "Total"],
    "asosiy": ["основная", "base"],
    "so'm": ["сум", "UZS"],
    "Yanvar": ["Январь", "January"], "Fevral": ["Февраль", "February"], "Mart": ["Март", "March"],
    "Aprel": ["Апрель", "April"], "May": ["Май", "May"], "Iyun": ["Июнь", "June"],
    "Iyul": ["Июль", "July"], "Avgust": ["Август", "August"], "Sentabr": ["Сентябрь", "September"],
    "Oktabr": ["Октябрь", "October"], "Noyabr": ["Ноябрь", "November"], "Dekabr": ["Декабрь", "December"],
    "Toshkent shahri": ["город Ташкент", "Tashkent city"],
    "Toshkent viloyati": ["Ташкентская область", "Tashkent region"],
    "Andijon": ["Андижан", "Andijan"], "Farg'ona": ["Фергана", "Fergana"], "Namangan": ["Наманган", "Namangan"],
    "Samarqand": ["Самарканд", "Samarkand"], "Buxoro": ["Бухара", "Bukhara"], "Navoiy": ["Навои", "Navoi"],
    "Qashqadaryo": ["Кашкадарья", "Kashkadarya"], "Surxondaryo": ["Сурхандарья", "Surkhandarya"],
    "Jizzax": ["Джизак", "Jizzakh"], "Sirdaryo": ["Сырдарья", "Syrdarya"], "Xorazm": ["Хорезм", "Khorezm"],
    "Qoraqalpog'iston": ["Каракалпакстан", "Karakalpakstan"],

    // to'lovlar
    "To'lov kiritish": ["Внести платёж", "Enter payment"],
    "To'lov summasi": ["Сумма платежа", "Payment amount"],
    "To'lov saqlandi": ["Платёж сохранён", "Payment saved"],
    "To'lov umumiy summadan oshib ketdi": ["Платёж превысил общую сумму", "Payment exceeds the total amount"],
    "To'lov": ["Платёж", "Payment"],
    "Boshlang'ich to'lov": ["Начальный платёж", "Initial payment"],
    "Boshlang'ich": ["Начальный", "Initial"],
    "2-to'lov": ["2-й платёж", "2nd payment"], "3-to'lov": ["3-й платёж", "3rd payment"],
    "4-to'lov": ["4-й платёж", "4th payment"], "5-to'lov": ["5-й платёж", "5th payment"],
    "Bo'lib to'lash": ["Оплата частями", "Installments"],
    "qolgan qismi": ["оставшаяся часть", "remaining part"],
    "Jami to'langan": ["Всего оплачено", "Total paid"],
    "kiritilgan": ["включено", "included"],
    "Umumiy summa": ["Общая сумма", "Total amount"],
    "Umumiy": ["Общая", "Total"],
    "Ma'lumot yo'q": ["Нет данных", "No data"],

    // bloklanganlar
    "Bloklanganlar ro'yxati": ["Список заблокированных", "Blocked list"],
    "Bloklangan sana": ["Дата блокировки", "Blocked date"],
    "Tugash vaqti": ["Время окончания", "End time"],
    "Bloklangan foydalanuvchi yo'q": ["Нет заблокированных пользователей", "No blocked users"],
    "Doimiy": ["Постоянно", "Permanent"],
    "Cheksiz": ["Бессрочно", "Unlimited"],
    "Faol (blok tugagan)": ["Активен (блок закончился)", "Active (block expired)"],
    "Vaqtinchalikni chiqar": ["Снять временный", "Remove temporary"],
    "Doimiyni chiqar": ["Снять постоянный", "Remove permanent"],
    "Butunlay chiqar": ["Снять полностью", "Remove fully"],
    "Vaqtinchalik blokdan chiqarasizmi": ["Снять временную блокировку", "Remove the temporary block"],
    "Doimiy blokdan chiqarasizmi": ["Снять постоянную блокировку", "Remove the permanent block"],
    "Bu qurilmani butunlay blokdan chiqarasizmi": ["Полностью разблокировать это устройство", "Fully unblock this device"],
    "Vaqtinchalik blok olib tashlandi": ["Временная блокировка снята", "Temporary block removed"],
    "Doimiy blok olib tashlandi": ["Постоянная блокировка снята", "Permanent block removed"],
    "Qurilma blokdan chiqarildi": ["Устройство разблокировано", "Device unblocked"],

    // ekspres
    "Ekspres qo'shish": ["Добавить экспресс", "Add express"],
    "Ekspres tahrirlash": ["Редактировать экспресс", "Edit express"],
    "Ekspres yo'q": ["Нет экспресс-записей", "No express entries"],
    "Ekspres statistikasi": ["Статистика экспресс", "Express statistics"],
    "Ekspres reytingi": ["Рейтинг экспресс", "Express ranking"],
    "Ekspres soni": ["Количество экспресс", "Express count"],
    "083 bormi": ["Есть 083?", "Has 083?"],
    "083 bor": ["083 есть", "Has 083"],
    "083 yo'q": ["083 нет", "No 083"],
    "Sana": ["Дата", "Date"],
    "Bu ekspres yozuvini o'chirmoqchimisiz": ["Удалить эту экспресс-запись", "Delete this express entry"],
    "F.I.O ni kiriting": ["Введите Ф.И.О.", "Enter the full name"],
    "Filialni tanlang": ["Выберите филиал", "Select a branch"],

    // hisobot
    "Filiallar reytingi": ["Рейтинг филиалов", "Branch ranking"],
    "Guruhlar reytingi": ["Рейтинг групп", "Group ranking"],
    "O'rin": ["Место", "Rank"],
    "Barcha yillar": ["Все годы", "All years"],

    "Tizimga kirish": ["Вход в систему", "Sign in"]
  };

  // ---------- Maxsus gaplar (lug'atdan oldin) ----------
  var PRE = [
    [/Ayol instruktor to'lovi (.+?) dan oshmasligi kerak/g,
      ["Платёж за инструктора-женщину не должен превышать $1", "Female instructor payment must not exceed $1"]]
  ];
  // ---------- Raqamli andozalar (lug'atdan keyin) ----------
  var POST = [
    [/(\d+) daqiqa bloklandi/g, ["заблокировано на $1 мин.", "blocked for $1 min"]],
    [/(\d+) soat bloklandi/g, ["заблокировано на $1 ч.", "blocked for $1 h"]],
    [/(\d+) daqiqa blok\b/g, ["блок $1 мин.", "$1 min block"]],
    [/(\d+) daqiqa qoldi/g, ["осталось $1 мин.", "$1 min left"]],
    [/(\d+)-urinish/g, ["попытка $1", "attempt $1"]],
    [/(\d+) ta qarzdor/g, ["$1 должников", "$1 debtors"]],
    [/(\d{4})-yil/g, ["$1 г.", "$1"]],
    [/(\d+) ta\b/g, ["$1 шт.", "$1"]]
  ];

  var IDX = { ru: 0, en: 1 };
  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  var keys = Object.keys(D).sort(function (a, b) { return b.length - a.length; });
  var RE = new RegExp("(?<![A-Za-z'])(" + keys.map(esc).join('|') + ")(?![A-Za-z'])", 'g');
  var APOS = /[’‘ʻʼ`´]/g;

  // ---------- Lotin -> Kirill ----------
  var MAP = { a: 'а', b: 'б', c: 'ц', d: 'д', f: 'ф', g: 'г', h: 'ҳ', i: 'и', j: 'ж', k: 'к', l: 'л', m: 'м',
    n: 'н', o: 'о', p: 'п', q: 'қ', r: 'р', s: 'с', t: 'т', u: 'у', v: 'в', w: 'в', x: 'х', y: 'й', z: 'з' };
  var VOWEL = /[aeiouAEIOU]/;
  function toCyr(s) {
    s = s.replace(APOS, "'");
    var out = '', i = 0, n = s.length;
    while (i < n) {
      var ch = s[i], lo = ch.toLowerCase(), nx = (s[i + 1] || ''), nxl = nx.toLowerCase();
      var up = ch !== lo, prev = i > 0 ? s[i - 1] : '', res = null, adv = 1;
      if (!/[a-z']/.test(lo)) { out += ch; i++; continue; }
      if (lo === "'") { out += VOWEL.test(prev) ? 'ъ' : ''; i++; continue; }
      if (lo === 's' && nxl === 'h') { res = 'ш'; adv = 2; }
      else if (lo === 'c' && nxl === 'h') { res = 'ч'; adv = 2; }
      else if (lo === 'o' && nx === "'") { res = 'ў'; adv = 2; }
      else if (lo === 'g' && nx === "'") { res = 'ғ'; adv = 2; }
      else if (lo === 'y' && nxl === 'o' && s[i + 2] !== "'") { res = 'ё'; adv = 2; }
      else if (lo === 'y' && nxl === 'u') { res = 'ю'; adv = 2; }
      else if (lo === 'y' && nxl === 'a') { res = 'я'; adv = 2; }
      else if (lo === 'y' && nxl === 'e') { res = 'е'; adv = 2; }
      else if (lo === 'e') { res = (i === 0 || !/[A-Za-z']/.test(prev)) ? 'э' : 'е'; }
      else { res = MAP[lo]; }
      out += up ? res.toUpperCase() : res;
      i += adv;
    }
    return out.replace(/([Ээ])кспрес(?!с)/g, '$1кспресс');
  }

  // ---------- Tarjima ----------
  var cache = {};
  function trCore(core, lang) {
    var ck = lang + '|' + core;
    if (cache[ck] !== undefined) return cache[ck];
    var r;
    if (lang === 'kril') {
      r = (core === 'OK' || core === 'IP / ID') ? core : toCyr(core);
    } else {
      var ix = IDX[lang];
      r = core.replace(APOS, "'");
      PRE.forEach(function (p) { r = r.replace(p[0], p[1][ix]); });
      r = r.replace(RE, function (m) { return D[m][ix]; });
      POST.forEach(function (p) { r = r.replace(p[0], p[1][ix]); });
    }
    cache[ck] = r;
    return r;
  }
  function tr(s, lang) {
    if (lang === 'lotin' || !/[A-Za-z]/.test(s)) return s;
    return s.split('\n').map(function (line) {
      var m = line.match(/^(\s*[^A-Za-z0-9\s]*\s*)([\s\S]*?)(\s*)$/);
      if (!m || !/[A-Za-z]/.test(m[2])) return line;
      return m[1] + trCore(m[2], lang) + m[3];
    }).join('\n');
  }

  if (typeof module !== 'undefined' && module.exports) { module.exports = { tr: tr, toCyr: toCyr }; }
  if (typeof document === 'undefined') return;

  // ---------- DOM ----------
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  var recs = new WeakMap();

  function inSelector(el) { return el && el.closest && el.closest('.lang-select'); }

  function doText(n) {
    var p = n.parentNode;
    if (!p || SKIP[p.nodeName] || inSelector(p)) return;
    var rec = recs.get(n);
    if (!(rec && n.data === rec.out)) rec = { orig: n.data, out: n.data };
    // <option> qiymati matn bo'lsa, tarjimadan oldin asl qiymatni qotirib qo'yamiz
    if (p.nodeName === 'OPTION' && !p.hasAttribute('value')) p.setAttribute('value', rec.orig.trim());
    var out = tr(rec.orig, LANG);
    rec.out = out;
    recs.set(n, rec);
    if (n.data !== out) n.data = out;
  }

  var ATTRS = ['placeholder', 'title'];
  function doEl(el) {
    if (!el.hasAttribute || inSelector(el)) return;
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      var st = el.__t || (el.__t = {});
      var cur = el.getAttribute(a), rec = st[a];
      if (!(rec && cur === rec.out)) rec = { orig: cur, out: cur };
      var out = tr(rec.orig, LANG);
      rec.out = out; st[a] = rec;
      if (cur !== out) el.setAttribute(a, out);
    });
  }

  function walk(node) {
    if (node.nodeType === 3) { doText(node); return; }
    if (node.nodeType !== 1 || SKIP[node.nodeName]) return;
    doEl(node);
    var w = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else doEl(n); }
  }

  var LABELS = [['lotin', "O'zbekcha (Lotin)"], ['ru', 'Русский'], ['en', 'English'], ['kril', 'Ўзбекча (Кирилл)']];
  var HTML_LANG = { lotin: 'uz', ru: 'ru', en: 'en', kril: 'uz-Cyrl' };
  var selects = [];

  function setLang(l) {
    LANG = l;
    document.documentElement.setAttribute('lang', HTML_LANG[l]);
    selects.forEach(function (s) { s.value = l; });
    walk(document.documentElement);
  }

  function mkSelect(cls) {
    var s = document.createElement('select');
    s.className = 'lang-select ' + (cls || '');
    LABELS.forEach(function (x) {
      var o = document.createElement('option');
      o.value = x[0]; o.textContent = x[1];
      s.appendChild(o);
    });
    s.value = LANG;
    s.addEventListener('change', function () { setLang(s.value); });
    selects.push(s);
    return s;
  }

  function init() {
    var st = document.createElement('style');
    st.textContent =
      '.lang-select{padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.45);' +
      'background:rgba(255,255,255,.18);color:#fff;font-size:13px;font-weight:600;cursor:pointer;outline:none}' +
      '.lang-select option{color:#222;background:#fff}' +
      '.lang-float{position:absolute;top:14px;right:14px;z-index:5}';
    document.head.appendChild(st);

    var hdr = document.querySelector('header > div');
    if (hdr) hdr.insertBefore(mkSelect(), hdr.firstChild);
    ['loginScreen', 'yearScreen'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.appendChild(mkSelect('lang-float'));
    });

    walk(document.documentElement); // Lotin holatida option qiymatlarini qotiradi

    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.type === 'characterData') doText(m.target);
        else if (m.type === 'childList') m.addedNodes.forEach(walk);
        else if (m.type === 'attributes') doEl(m.target);
      });
    }).observe(document.documentElement, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ['placeholder', 'title']
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})(this);
