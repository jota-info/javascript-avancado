class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(
            ...texto
            .split('-')
            .map((number, index) => index === 1 ? parseInt(number) - 1 : parseInt(number))
        );
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
}