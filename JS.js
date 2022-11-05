// задача по 99 бутылкам
function generateSingleStanza(number) {
  let bottles =
    '99 пива на стене, 99 пива! Возьми одну, пусти по кругу, 98 пива на стене!'
  let arr = bottles.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == Number(arr[i])) {
      arr[i] = number + ' бутылок'
      if (number == 1) {
        arr[i] = number + ' бутылка'
      }
      if (number == 2) {
        arr[i] = number + ' бутылки'
      }
      if (number == 3) {
        arr[i] = number + ' бутылки'
      }
      if (number == 4) {
        arr[i] = number + ' бутылки'
      }
      if (number == 0) {
        return false
      }
    }
  }
  let res = arr.join(' ').split(' ')
  let count = 0
  for (let j = 0; j < res.length; j++) {
    if (res[j] == Number(res[j])) {
      count++
    }
    if (count == 3) {
      res[j] -= 1
      break
    }
  }
  for (let k = 0; k < res.length; k++) {
    if (res[k] == 1) {
      res[k + 1] = 'бутылка'
    } else if (res[k] == 0) {
      res[k] = 'нет'
      res[k + 1] = 'бутылок'
      break
    }
  }

  return res.join(' ')
}

function generateSongText() {
  let finish = []
  for (let i = 99; i >= 1; i--) {
    finish.push(generateSingleStanza(i))
  }
  return finish.join(' ')
}
console.log(generateSongText())

// задача по генерированию пароля
