const playersInit = function(browser) {
    mp.players.forEach(player => {
        browser.execute(`addPlayerInTheTable('${player.id}', '${player.name}');`);
    });
};

exports = {
    playersInit,
}
