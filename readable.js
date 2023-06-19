const breakPoint = 2;
const paragraphs = document.getElementsByTagName('p')


for (let i = 0; i < paragraphs.length; i++) {
  const words = paragraphs[i].textContent.split(' ')
  for (let j = 0; j < words.length; j++) {
    if (words[j].length < 3) continue
    words[j] = `<strong>${words[j].slice(0, breakPoint)}</strong>${words[j].slice(breakPoint)}`
  }

  const modifiedText = words.join(' ')
  paragraphs[i].innerHTML = modifiedText
}
