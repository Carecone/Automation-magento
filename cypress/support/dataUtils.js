class dataUtils {
    gerarEmail() {
        var stringAleatoria = '';
        var caracteres = 'abcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < 5; i++) {
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return stringAleatoria;
    }
}
module.exports = new dataUtils();