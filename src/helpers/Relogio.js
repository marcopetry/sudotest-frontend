export function horarioRestanteProva(horaTerminoProva) {
    const data = new Date();
    const horaSeparada = horaTerminoProva.toString().split(':');
    let horaTermino = parseInt(horaSeparada[0]);
    let minutosTermino = parseInt(horaSeparada[1]);
    let horaAtual = data.getHours();
    let minutosAtuais = data.getMinutes();
    
    if(minutosTermino < minutosAtuais) 
        minutosAtuais = 60 - minutosAtuais + minutosTermino;
    else 
        minutosAtuais = minutosTermino - minutosAtuais;

    if(horaTermino < horaAtual) 
        horaAtual = 24 - horaAtual + horaTermino
    else 
        horaAtual = horaTermino - horaAtual;

    return horaAtual + ' : ' + minutosAtuais;
}