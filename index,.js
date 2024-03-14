const Aluno = require('./aluno')
const Turma = require('./turma')
const TurmaPresencial = require('./turmaPresencial')

const aluno = new Aluno('Gustavo', 'gustavoferreira', '2268884')
const turma = new Turma('ES61', 5)
const turmaPresencial = new TurmaPresencial('ES61', 7, 80)

console.log(`Aluno: ${aluno.nome}\nRA: ${aluno.RA}\n`)
console.log('Aprovado na turma: ', turma.aprovado())
console.log('Aprovado na turma presencial: ', turmaPresencial.aprovado())