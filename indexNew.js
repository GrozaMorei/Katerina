const button = document.querySelector('.next');
const form = document.querySelector('.form');
const timerBar = document.querySelector('.time');
const text = document.querySelector('.input-title');
const sign = document.querySelector('.sign__inner');
const textList = [
	'Добро пожаловать!',
	'Данное приложение было специально разработано для Катерины',
	'С целью помочь открыть все тайны создателя',
	'Но для начало необходимо подтвердить вашу личность',
	'Просто выберите подходящие варианты ответов',
	'Я...',
	'Здравствуй, солнце! ^_^',
	'Обращаюсь к тебе из прошлого, а именно с 5 по 6 число',
	'В моем времени ты уже спишь, а я сижу ночью и страдаю над кодом)',
	'Если ты читаешь это, обнимешь меня сейчас?)',
	'Итак, мы вышли с вокзала',
	'Для дальнейшего продвижения, необходимо повернуть налево и двигаться по улице Держинского до первого перекрестка',
	'Отлично! Вот первый намек: "Если я расскажу об этом, это потеряет всякий смысл..."',
	'Соответствует ли это твоему предположению?',
	'Дальше поворачиваем направо и двигаемся вперед, пока не дойдем до парка',
	'Где-то в центре должна быть чья-то голова, фио головы отроют доступ к тайне (P.S. без инета)',
	'Второй намек уже близок ^_^',
	'Молодец! Как всегда горжусь тобой)',
	'Наше общение началось 81 день назад, 21 февраля',
	'Я написал тебе в 15:29, а уже в 16:30 я осознал, что общение с тобой будет незабываемым',
	'Если смотреть на голову со стороны дороги, то тебе нужно повернуться направо',
	'Теперь иди в конец парка, немного приподнимаясь к дороге с правой стороны',
	'Перед тобой должна быть небольшая развязка дорог, тебе необходимо на Греческую улицу',
	'Топай, пока не дойдешь до лесенки с левой стороны дороги',
	'А теперь вниз по лесенке до парка, как дойдешь, возвращайся)',
	'Здесь должно быть красиво...',
	'Надеюсь я прав)',
	'Я тут кое-что вспомнил...',
	'Можешь сейчас встать на против меня и смотреть в глаза более 10 секунд?)',
	'Второй намек: "Отчасти это связано с тобой"',
	'А теперь...',
	'Обратно наверх',
	'Ладно, шучу, можешь топать вдоль набережной',
	'Но с тебя крепкое обьтие)',
	'Возвращайся, как дойдешь до кольца',
	'На кольце нужно перейти на правую сторону',
	'Там будет дорожка наверх, по которой необходимо подняться',
	'Затем дойти по парку до Петра 1',
	'Отсюда должен открывать "Красивый" вид',
	'Думаю пора вспомнить третий намек',
	'Намек три: "Я могу рассказать об этом только при личной встрече"',
	'Теперь идем дальше по главной улице до церкви',
	'Топай к 3-х этажному дому, а далее сверни на улицу между домиками из красного кирпича',
	'А теперь проверим твои навыки в ориентировании',
	'Где-то впереди есть спуск к воде, найди его',
	'Обнимашки?)',
	'Топай обратно к церкви',
	'У ее входа необходимо повернуть налево до остановки',
	'Дальше на автобус до центрального пляжа',
	'Возле моста необходимо спуститься и потопать по дороге в cторону пляжа',
	'Надеюсь, там получится пройти)',
	'Как будешь на пляже, возвращайся за следующим намеком',
	'Если нам повезло с погодой, то должно быть красиво',
	'Намек четыре: "Если я даже просто расскажу о цели, то я отчасти получу ее..."',
	'Тот самый намек, который отсекает 99% вариантов)',
	'Все ли на этом?',
	'Нет, еще один намек',
	'Намек из-за которого все началось',
	'Твой намек',
	'Однако его я уже скажу тебе лично',
	'Спасибо, что ты сейчас рядом',
	'ʕ⁠っ⁠•⁠ᴥ⁠•⁠ʔ⁠っ',
];

// ================ ОБНОВЛЕНИЕ ДАННЫХ =================
function load() {
	const index = localStorage.getItem('index');
	text.innerHTML = textList[index];
}
function save(number) {
	localStorage.setItem('index', number);
}

// ===================== ТАЙМЕР =======================
function setTimer(minutes) {
	const realTime = new Date().toLocaleTimeString();
	const timeList = realTime.split(':');
	let hours = parseInt(timeList[0]);
	let minute = parseInt(timeList[1]);

	minute += minutes;
	if (minute >= 60) {
		hours += 1;
		minute -= 60;
	}
	hours = hours.toString().padStart(2, '0');
	minute = minute.toString().padStart(2, '0');

	const newTime = `${hours}:${minute}:${timeList[2]}`;
	localStorage.setItem('time', newTime);
}

function timerCheck() {
	const realTime = new Date().toLocaleTimeString();
	const newTime = localStorage.getItem('time');

	if (newTime == null) return null;

	const timeList = realTime.split(':');
	const hours = parseInt(timeList[0]);
	const minute = parseInt(timeList[1]);
	const minutes = minute + 60 * hours;

	const newTimeList = newTime.split(':');
	const newHours = parseInt(newTimeList[0]);
	const newMinute = parseInt(newTimeList[1]);
	const newMinutes = newMinute + 60 * newHours;

	return minutes > newMinutes;
}

function flag(status) {
	localStorage.setItem('flag', status);
}

function flagCheck() {
	const status = localStorage.getItem('flag');
	if (status == null) {
		localStorage.setItem('flag', false);
		return false;
	} else if (status == 'true') {
		return true;
	} else if (status == 'false') {
		return false;
	}
}

// ================== 5 ЭПИЗОДОВ ======================
function station() {
	// Вокзал - памятник. Первый намек

	console.log('station');

	let index = localStorage.getItem('index');

	// Cтартовая анимация
	let timer;
	if (index < 6) {
		button.style.opacity = '0';
		timerBar.style.display = 'block';
		timer = setInterval(function () {
			load();
			index++;
			save(index);

			if (index == 6) deletTimer();
		}, 5000);
	} else {
		load();
		onButton();
	}

	// Отключение стартовой анимации
	function deletTimer() {
		clearInterval(timer);
		timerBar.style.display = 'none';
		sign.style.display = 'flex';
		offButton();
	}

	// Прослушиватель событий нажатия
	sign.addEventListener('click', function (e) {
		e.target.classList.add('active');
		if (document.querySelectorAll('.active').length == 5) {
			onButton();
		}
	});

	if (index == 7) sign.style.display = 'none';

	if (index == 11) {
		offButton();
		if (timerCheck() == null) setTimer(1);
		if (timerCheck()) onButton();
	}

	if (index == 16) {
		console.log('form');
		offButton();
		form.style.display = 'block';
		button.style.opacity = '0';

		// Добавляем слушатель форме
		form.addEventListener('input', function (e) {
			const inputValue = e.target.value;
			const nameList = [
				'В Я Литвинов',
				'В. Я. Литвинов',
				'В.Я.Литвинов',
				'В.Я. Литвинов',
				'в я литвинов',
				'в. я. литвинов',
				'в.я.литвинов',
				'в.я. литвинов',
				'Виктор Яковлевич Литвинов',
				'виктор яковлевич литвинов',
			];
			if (nameList.includes(inputValue)) {
				form.classList.add('active');
				setTimeout(() => {
					load();
					form.style.display = 'none';
					button.style.opacity = '1';
					onButton();
					buttonClick();
				}, 3000);
			}
		});
	}
}

function monument() {
	// Памятник - лестница. Второй намек
	console.log('monument');
	let index = localStorage.getItem('index');
	load();
	onButton();

	// Идем в конец парка
	if (index == 21) {
		offButton();
		if (!flagCheck()) {
			setTimer(2);
			flag(true);
		}
		if (timerCheck()) {
			onButton();
		}
	}

	// Идем до лестницы
	if (index == 23) {
		offButton();
		if (flagCheck()) {
			setTimer(3);
			flag(false);
		}
		if (timerCheck()) {
			onButton();
		}
	}

	// Идем вниз по лестнице
	if (index == 24) {
		offButton();
		if (!flagCheck()) {
			setTimer(3);
			flag(true);
		}
		if (timerCheck()) {
			onButton();
		}
	}

	// Топаем по набережной до кольца
	if (index == 34) {
		offButton();
		if (flagCheck()) {
			setTimer(3);
			flag(false);
		}
		if (timerCheck()) {
			onButton();
		}
	}
}

function ladder() {
	// Лестница - площадка. Третий намек
	console.log('ladder');
	let index = localStorage.getItem('index');
	load();
	onButton();

	// Идем от кольца до Петра 1
	if (index == 37) {
		offButton();
		if (!flagCheck()) {
			setTimer(3);
			flag(true);
		}
		if (timerCheck()) {
			onButton();
		}
	}

	// Идем от Петра 1 до церкви
	if (index == 41) {
		offButton();
		if (flagCheck()) {
			setTimer(3);
			flag(false);
		}
		if (timerCheck()) {
			onButton();
		}
	}

	// Идем от церкви до берега
	if (index == 44) {
		offButton();
		if (!flagCheck()) {
			setTimer(3);
			flag(true);
		}
		if (timerCheck()) {
			onButton();
		}
	}
}

function area() {
	// Площадка - пляж. Четвертый намек
	console.log('area');
	let index = localStorage.getItem('index');
	load();
	onButton();

	// Идем от берега до церкви
	if (index == 46) {
		offButton();
		if (flagCheck()) {
			setTimer(3);
			flag(false);
		}
		if (timerCheck()) {
			onButton();
		}
	}

	// Едем от церкви до пляжя
	if (index == 48) {
		offButton();
		if (!flagCheck()) {
			setTimer(3);
			flag(true);
		}
		if (timerCheck()) {
			onButton();
		}
	}

	// Идем от остановки до пляжа
	if (index == 51) {
		offButton();
		if (flagCheck()) {
			setTimer(3);
			flag(false);
		}
		if (timerCheck()) {
			onButton();
		}
	}

	// Финал
	if (index == 61) {
		offButton();
		button.style.opacity = '0';
		document.querySelector('.main').style.backgroundColor = '#16b0ff';
		text.style.color = '#fff';
	}
}

// =================== КНОПКА =====================
function buttonClick() {
	// Получаем значение индекса
	let index = localStorage.getItem('index');
	load();
	// Увеличиваем и сохраняем
	index++;
	save(index);
	console.log(index);
	// Анимация клика
	button.classList.add('button-click');
	setTimeout(() => {
		button.classList.remove('button-click');
	}, 300);
	// Перевызываем функцию
	start();
}

function onButton() {
	// Добавление слушателя
	button.addEventListener('click', buttonClick);
	// Обновление дизайна
	button.classList.add('active');
	button.style.opacity = '1';
}

function offButton() {
	// Удаление слушателя
	button.removeEventListener('click', buttonClick);
	// Обновление дизайна
	button.classList.remove('active');
	button.style.opacity = '1';
}

// ==================== СТАРТ =====================
function start() {
	// Получаем сохраненное значение индека
	let index = localStorage.getItem('index');
	// Проверка на первый старт
	if (index == null) {
		index = 0;
		save(0);
	}

	// Запускаем необходимый эпизод
	if (index >= 0 && index <= 16) {
		station();
	} else if (index >= 17 && index <= 34) {
		monument();
	} else if (index >= 35 && index <= 45) {
		ladder();
	} else if (index >= 46) {
		area();
	}
}

// save(0);
// localStorage.removeItem('time');
// localStorage.removeItem('flag');
start();
