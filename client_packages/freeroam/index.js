const { vehiclesConfig } = require('./freeroam/configs/vehicles.js');
const { skinsConfig } = require('./freeroam/configs/skins.js');
const { weaponConfig } = require('./freeroam/configs/weapon.js');

const { vehiclesInit } = require('./freeroam/menu_initialization/vehicles.js');
const { skinsInit } = require('./freeroam/menu_initialization/skins.js');
const { weaponInit } = require('./freeroam/menu_initialization/weapon.js');
const { playersInit } = require('./freeroam/menu_initialization/players.js');

const { events } = require('./freeroam/events.js');

// CEF browser.
let menu;
// Configs.
let vehicles = JSON.parse(vehiclesConfig);
let skins = JSON.parse(skinsConfig).Skins;
let weapon = JSON.parse(weaponConfig);

// Creating browser.
mp.events.add('guiReady', () => {
    if (!menu) {
        // Creating CEF browser.
        menu = mp.browsers.new('package://freeroam/browser/index.html');
        // Init menus and events, when browser ready.
        mp.events.add('browserDomReady', (browser) => {
            if (browser === menu) {
                // Init events.
                events(menu);
                // Init menus.
                vehiclesInit(menu, vehicles);
                skinsInit(menu, skins);
                weaponInit(menu, weapon);
                playersInit(menu);

                mp.gui.execute(`insertMessageToChat('<div style="background-color: rgba(0, 0, 0, 0.75); font-size: 1.0vw; padding: 6px; color: #ff0000; font-weight: 600;">Press F2 for open freeroam menu.</div>', 'true');`);
            }
        });
    }
});
