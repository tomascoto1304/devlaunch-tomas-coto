const getFormattedName = (username: string) => {
  const names = username.replace('.', ' ').split(' ')

  return names.reduce((text, word, i) => {
    const capitalizeFirstLetter = word[0].toUpperCase()
    const wordsAfterFirstLetter = word.slice(1)
    const name = capitalizeFirstLetter + wordsAfterFirstLetter
    const space = i < names.length - 1 ? ' ' : ''

    return text + name + space
  }, '')
}



const processEmails = (emails: string[]) => {
  const uniqueEmails = [...new Set(emails)]

  return uniqueEmails.map(email =>{
    const [username, domain] = email.split('@')

    return{
      email: email,

      message: `Hello ${getFormattedName(username)}. Thank you for being part of our community!`
    }

  })
}

const emails = [
  'ana.smith@gmail.com',
  'juan.perez@yahoo.com',
  'maria.garcia@hotmail.com',
  'ana.smith@gmail.com',
  'carlos.lopez@gmail.com',
  'maria.garcia@hotmail.com',
  'laura.martinez@gmail.com'
]

console.log(processEmails(emails))