function cryptoNum(): number {
  const num = new Uint32Array(1);
  const cryptoRandom = window.crypto.getRandomValues(num);
  return cryptoRandom[0] / (2 ** 32 - 1);
}

function randomNumber(): string {
  return String.fromCharCode(Math.floor(cryptoNum() * 10) + 48);
}
function randomSymbol(): string {
  const symbols = '~!@#$%^&*()_+{}":?><;.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomUpperEnLetter(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomLowerEnLetter(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const randomFunction = {
  upper: randomUpperEnLetter,
  lower: randomLowerEnLetter,
  number: randomNumber,
  symbol: randomSymbol,
};

export function generatePassword(
  length: number,
  upper: boolean,
  lower: boolean,
  number: boolean,
  symbol: boolean,
): string {
  let pswd = '';
  const typeArray = [{ upper }, { lower }, { number }, { symbol }].filter((item) => Object.values(item)[0]);
  // eslint-disable-next-line
  for (let i = 0; i < length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    typeArray.forEach((type) => {
      const functionName = Object.keys(type)[0];
      pswd += randomFunction[functionName]();
    });
  }
  return pswd.slice(0, length).split('').sort(() => Math.random() - 0.4).join('');
}
