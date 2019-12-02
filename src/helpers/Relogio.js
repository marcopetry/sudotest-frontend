export function horarioRestanteProva(horaTermino, horaInicio) {
    const date = new Date();
    console.log(date);
    const termino = horaTermino.toString().split(':');
    let horaRestantes = parseInt(termino[0]) - (date.getHours() - 1);
    let minutosRestantes = parseInt(termino[1]) - date.getMinutes();
    if(minutosRestantes < 0) {
        minutosRestantes += 60; 
        horaRestantes -= 1;
    }

    return (horaRestantes * 3600000) + (minutosRestantes * 60000);
}
