

/**
 * Esta función me permite obtener el valor de cada carta
 * @param {String} carta
 * @returns {Number} valor
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}