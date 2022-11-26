import wordBank from './wordBank.txt'

export const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

export const guessWord = async () => {
    let wordSet;
    let answerWord;
    await fetch(wordBank)
        .then(response => response.text())
        .then((result) => {
            const wordArr = result.split('\n')
            answerWord = wordArr[Math.floor(Math.random() * wordArr.length)]
            wordSet = new Set(wordArr)
        })
    return {wordSet, answerWord};
}