// Задача 4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
// Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt,
// необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету,
// выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету
// и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let diffrenceCreditsToTotalPrice;
let howManyDroidWantToBuy = prompt("Сколько дронов вы желаете приобрести?");

if (!isNaN(howManyDroidWantToBuy) || howManyDroidWantToBuy !== null || howManyDroidWantToBuy !== "") {
  message = "Отменено пользователем! Введите, пожалуйста, число!";
  console.log(message);
} else {
  totalPrice = howManyDroidWantToBuy * pricePerDroid;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    diffrenceCreditsToTotalPrice = credits - totalPrice;
    message = `Вы купили ${howManyDroidWantToBuy} дроидов, на счету осталось ${diffrenceCreditsToTotalPrice} кредитов.`;
  }
  console.log(message);
}
