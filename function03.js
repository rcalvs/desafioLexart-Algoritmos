// Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC

const idGenerator = () => {
  // Gerador Alfanumérico
  // https://stackoverflow.com/a/44622300
  const gen = Array.from(Array(19), () => Math.floor(Math.random() * 36).toString(36)).join('')

  // Divide String em 4 partições
  // https://stackoverflow.com/questions/32030727/replace-every-nth-character-from-a-string/32030796
  const split = gen.replace(/(....)./g, "$1-");

  return split
}

const id = idGenerator();

console.log(id);
