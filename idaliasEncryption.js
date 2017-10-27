function idaliasEncryption(string) {
  let encrypted = '';
  for (x = 0; x < string.length; x++) {
    encrypted += string[x] + x;
  }
  return encrypted;
}

function decryption(string) {
  let decrypt = '';
  for (x = 0; x < string.length; x++) {
    if (isNaN(string[x])) {
      decrypt += string[x];
    }
  }
  return decrypt;
}
