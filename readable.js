browser.runtime.onMessage.addListener(message => {
  breakPoint = message.data
  console.log(message.data)
  bolden(message.data)
})

const bolden = (breakPoint) => {
  const paragraphs = document.getElementsByTagName('p')

  for (let i = 0; i < paragraphs.length; i++) {
    const words = paragraphs[i].textContent.split(' ')

    for (let j = 0; j < words.length; j++) {
      words[j] = `<strong>${words[j].slice(0, breakPoint)}</strong>${words[j].slice(breakPoint)}`
    }

    const modifiedText = words.join(' ')
    paragraphs[i].innerHTML = modifiedText
  }
}

bolden(2)
