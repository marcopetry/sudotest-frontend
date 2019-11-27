export function horarioRestanteProva(horaTerminoProva) {
    const data = new Date();
    const horaSeparada = horaTerminoProva.toString().split(':');
    let horaTermino = parseInt(horaSeparada[0]);
    let minutosTermino = parseInt(horaSeparada[1]);
    let horaAtual = horaTermino - data.getHours();
    let minutosAtuais = data.getMinutes();
    if(minutosTermino < minutosAtuais) minutosAtuais = minutosAtuais - 60 + minutosTermino;
    else minutosAtuais = minutosTermino - minutosAtuais;

    return horaAtual + ' : ' + minutosAtuais;
}