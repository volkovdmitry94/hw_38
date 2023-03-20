export function savePlayerToStore(isWin) {
    const oldArr = getPlayerFromStore('player');
    isWin ? oldArr.statsPlayer++ : oldArr.statsComputer++;
    sessionStorage.setItem('player', JSON.stringify(oldArr));
}

export function getPlayerFromStore() {
    const dataStr = sessionStorage.getItem('player');
    return (dataStr) ? JSON.parse(dataStr) : {statsComputer: 0, statsPlayer: 0};
}