const vehiclesConfig = "{\"Mods\":[\"accent\",\"solaris\"],\"Plane\":[\"ALPHAZ1\",\"BOMBUSHKA\",\"HOWARD\",\"MICROLIGHT\",\"MOGUL\",\"MOLOTOK\",\"NOKOTA\",\"PYRO\",\"ROGUE\",\"SEABREEZE\",\"STARLING\",\"TULA\",\"BESRA\",\"CARGOPLANE\",\"CUBAN800\",\"DODO\",\"DUSTER\",\"HYDRA\",\"JET\",\"LAZER\",\"LUXOR\",\"LUXOR2\",\"MAMMATUS\",\"MILJET\",\"NIMBUS\",\"SHAMAL\",\"STUNT\",\"TITAN\",\"VELUM\",\"VELUM2\",\"VESTRA\"],\"Super\":[\"CYCLONE\",\"VISIONE\",\"ADDER\",\"BANSHEE2\",\"BULLET\",\"CHEETAH\",\"ENTITYXF\",\"FMJ\",\"GP1\",\"INFERNUS\",\"ITALIGTB\",\"ITALIGTB2\",\"LE7B\",\"NERO\",\"NERO2\",\"OSIRIS\",\"PENETRATOR\",\"PFISTER811\",\"PROTOTIPO\",\"REAPER\",\"SHEAVA\",\"SULTANRS\",\"T20\",\"TEMPESTA\",\"TURISMO2\",\"TURISMOR\",\"TYRUS\",\"VACCA\",\"VAGNER\",\"VOLTIC\",\"VOLTIC2\",\"WASTELANDER\",\"XA21\",\"ZENTORNO\"],\"Helicopter\":[\"HAVOK\",\"HUNTER\",\"ANNIHILATOR\",\"BLIMP\",\"BLIMP2\",\"BUZZARD\",\"BUZZARD2\",\"CARGOBOB\",\"CARGOBOB2\",\"CARGOBOB3\",\"CARGOBOB4\",\"FROGGER\",\"FROGGER2\",\"MAVERICK\",\"POLMAV\",\"SAVAGE\",\"SKYLIFT\",\"SUPERVOLITO\",\"SUPERVOLITO2\",\"SWIFT\",\"SWIFT2\",\"VALKYRIE\",\"VALKYRIE2\",\"VOLATUS\"],\"SportsClassic\":[\"RAPIDGT3\",\"RETINUE\",\"ARDENT\",\"BTYPE\",\"BTYPE3\",\"CASCO\",\"CHEETAH2\",\"COQUETTE2\",\"COQUETTE3\",\"FELTZER3\",\"JB700\",\"LURCHER\",\"MANANA\",\"MONROE\",\"PEYOTE\",\"PIGALLE\",\"STINGER\",\"STINGERGT\",\"TORERO\",\"TORNADO\",\"TORNADO2\",\"TORNADO3\",\"TORNADO4\",\"ZTYPE\"],\"Military\":[\"VIGILANTE\",\"APC\",\"HALFTRACK\",\"TRAILERSMALL2\"],\"Service\":[\"AIRBUS\",\"AIRTUG\",\"BRICKADE\",\"BULLDOZER\",\"BUS\",\"CABLECAR\",\"CADDY\",\"CADDY2\",\"COACH\",\"FORKLIFT\",\"MOWER\",\"RENTALBUS\",\"RIPLEY\",\"TOURBUS\",\"TRACTOR\",\"TRACTOR2\",\"TRACTOR3\",\"TRASH\",\"TRASH2\",\"UTILLITRUCK\",\"UTILLITRUCK2\",\"UTILLITRUCK3\"],\"Motorcycle\":[\"AKUMA\",\"AVARUS\",\"BAGGER\",\"BATI\",\"BATI2\",\"BF400\",\"CARBONRS\",\"CHIMERA\",\"CLIFFHANGER\",\"DAEMON\",\"DAEMON2\",\"DEFILER\",\"DIABLOUS\",\"DIABLOUS2\",\"DOUBLE\",\"ENDURO\",\"ESSKEY\",\"FAGGIO\",\"FAGGIO2\",\"FAGGIO3\",\"FAGGION\",\"FCR\",\"FCR2\",\"GARGOYLE\",\"HAKUCHOU\",\"HAKUCHOU2\",\"HEXER\",\"INNOVATION\",\"LECTRO\",\"MANCHEZ\",\"NEMESIS\",\"NIGHTBLADE\",\"OPPRESSOR\",\"PCJ\",\"RATBIKE\",\"RUFFIAN\",\"SANCHEZ\",\"SANCHEZ2\",\"SANCTUS\",\"SHOTARO\",\"SOVEREIGN\",\"THRUST\",\"VADER\",\"VINDICATOR\",\"VORTEX\",\"WOLFSBANE\",\"ZOMBIEA\",\"ZOMBIEB\"],\"Sport\":[\"ALPHA\",\"BANSHEE\",\"BESTIAGTS\",\"BLISTA2\",\"BLISTA3\",\"BUFFALO\",\"BUFFALO2\",\"BUFFALO3\",\"CARBONIZZARE\",\"COMET2\",\"COMET3\",\"COQUETTE\",\"ELEGY\",\"ELEGY2\",\"FELTZER2\",\"FUROREGT\",\"FUSILADE\",\"FUTO\",\"INFERNUS2\",\"JESTER\",\"JESTER2\",\"KHAMELION\",\"KURUMA\",\"KURUMA2\",\"LYNX\",\"MAMBA\",\"MASSACRO\",\"MASSACRO2\",\"NINEF\",\"NINEF2\",\"OMNIS\",\"PENUMBRA\",\"RAPIDGT\",\"RAPIDGT2\",\"RAPTOR\",\"RUINER2\",\"RUINER3\",\"RUSTON\",\"SCHWARZER\",\"SEVEN70\",\"SPECTER\",\"SPECTER2\",\"SULTAN\",\"SURANO\",\"TROPOS\",\"VERLIERER2\"],\"Emergency\":[\"AMBULANCE\",\"BARRACKS\",\"BARRACKS2\",\"BARRACKS3\",\"CRUSADER\",\"FBI\",\"FBI2\",\"FIRETRUK\",\"LGUARD\",\"PBUS\",\"POLICE\",\"POLICE2\",\"POLICE3\",\"POLICE4\",\"POLICEB\",\"POLICEOLD1\",\"POLICEOLD2\",\"POLICET\",\"PRANGER\",\"RHINO\",\"RIOT\",\"SHERIFF\",\"SHERIFF2\"],\"Trailer\":[\"ARMYTANKER\",\"ARMYTRAILER\",\"ARMYTRAILER2\",\"BALETRAILER\",\"BOATTRAILER\",\"DOCKTRAILER\",\"FREIGHTTRAILER\",\"GRAINTRAILER\",\"PROPTRAILER\",\"RAKETRAILER\",\"TANKER\",\"TANKER2\",\"TR2\",\"TR3\",\"TR4\",\"TRAILERLOGS\",\"TRAILERS\",\"TRAILERS2\",\"TRAILERS3\",\"TRAILERSMALL\",\"TRFLAT\",\"TVTRAILER\"],\"Sedan\":[\"ASEA\",\"ASEA2\",\"ASTEROPE\",\"COG55\",\"COG552\",\"COGNOSCENTI\",\"COGNOSCENTI2\",\"EMPEROR\",\"EMPEROR2\",\"EMPEROR3\",\"FUGITIVE\",\"GLENDALE\",\"INGOT\",\"INTRUDER\",\"LIMO2\",\"ORACLE\",\"ORACLE2\",\"PREMIER\",\"PRIMO\",\"PRIMO2\",\"REGINA\",\"ROMERO\",\"SCHAFTER2\",\"SCHAFTER3\",\"SCHAFTER4\",\"SCHAFTER5\",\"SCHAFTER6\",\"STANIER\",\"STRATUM\",\"STRETCH\",\"SUPERD\",\"SURGE\",\"TAILGATER\",\"TAXI\",\"WARRENER\",\"WASHINGTON\"],\"SUV\":[\"BALLER\",\"BALLER2\",\"BALLER3\",\"BALLER4\",\"BALLER5\",\"BALLER6\",\"BJXL\",\"CAVALCADE\",\"CAVALCADE2\",\"DUBSTA\",\"DUBSTA2\",\"FQ2\",\"GRANGER\",\"GRESLEY\",\"HABANERO\",\"HUNTLEY\",\"LANDSTALKER\",\"MESA\",\"MESA2\",\"PATRIOT\",\"RADI\",\"ROCOTO\",\"SEMINOLE\",\"SERRANO\",\"XLS\",\"XLS2\"],\"Truck\":[\"BENSON\",\"BIFF\",\"BOXVILLE\",\"BOXVILLE2\",\"BOXVILLE3\",\"BOXVILLE4\",\"BOXVILLE5\",\"CUTTER\",\"DOCKTUG\",\"DUMP\",\"FLATBED\",\"HANDLER\",\"HAULER\",\"MIXER\",\"MIXER2\",\"MULE\",\"MULE2\",\"MULE3\",\"PACKER\",\"PHANTOM\",\"PHANTOM2\",\"POUNDER\",\"RALLYTRUCK\",\"RUBBLE\",\"SCRAP\",\"STOCKADE\",\"STOCKADE3\",\"TIPTRUCK\",\"TIPTRUCK2\",\"TOWTRUCK\",\"TOWTRUCK2\"],\"Offroad\":[\"BFINJECTION\",\"BIFTA\",\"BLAZER\",\"BLAZER2\",\"BLAZER3\",\"BLAZER4\",\"BLAZER5\",\"BODHI2\",\"BRAWLER\",\"DLOADER\",\"DUBSTA3\",\"DUNE\",\"DUNE2\",\"DUNE3\",\"DUNE4\",\"DUNE5\",\"GUARDIAN\",\"INSURGENT\",\"INSURGENT2\",\"INSURGENT3\",\"KALAHARI\",\"MARSHALL\",\"MESA3\",\"MONSTER\",\"NIGHTSHARK\",\"RANCHERXL\",\"RANCHERXL2\",\"REBEL\",\"REBEL2\",\"SANDKING\",\"SANDKING2\",\"TECHNICAL\",\"TECHNICAL2\",\"TECHNICAL3\",\"TROPHYTRUCK\",\"TROPHYTRUCK2\"],\"Pickup\":[\"BISON\",\"BISON2\",\"BISON3\",\"BOBCATXL\",\"CONTENDER\",\"RATLOADER\",\"RATLOADER2\",\"SADLER\",\"SADLER2\"],\"Muscle\":[\"BLADE\",\"BTYPE2\",\"BUCCANEER\",\"BUCCANEER2\",\"CHINO\",\"CHINO2\",\"DOMINATOR\",\"DOMINATOR2\",\"DUKES\",\"DUKES2\",\"FACTION3\",\"GAUNTLET\",\"GAUNTLET2\",\"HOTKNIFE\",\"MINIVAN2\",\"NIGHTSHADE\",\"PHOENIX\",\"PICADOR\",\"RUINER\",\"SABREGT\",\"SABREGT2\",\"SLAMVAN\",\"SLAMVAN2\",\"SLAMVAN3\",\"STALION\",\"STALION2\",\"TAMPA\",\"TAMPA2\",\"TAMPA3\",\"TORNADO5\",\"TORNADO6\",\"VIGERO\",\"VIRGO\",\"VIRGO2\",\"VIRGO3\",\"VOODOO\",\"VOODOO2\"],\"Compact\":[\"BLISTA\",\"BRIOSO\",\"DILETTANTE\",\"DILETTANTE2\",\"ISSI2\",\"PANTO\",\"PRAIRIE\",\"RHAPSODY\"],\"Bicycle\":[\"BMX\",\"CRUISER\",\"FIXTER\",\"SCORCHER\",\"TRIBIKE\",\"TRIBIKE2\",\"TRIBIKE3\"],\"Van\":[\"BURRITO\",\"BURRITO2\",\"BURRITO3\",\"BURRITO4\",\"BURRITO5\",\"CAMPER\",\"GBURRITO\",\"GBURRITO2\",\"JOURNEY\",\"MINIVAN\",\"MOONBEAM\",\"MOONBEAM2\",\"PARADISE\",\"PONY\",\"PONY2\",\"RUMPO\",\"RUMPO2\",\"RUMPO3\",\"SPEEDO\",\"SPEEDO2\",\"SURFER\",\"SURFER2\",\"TACO\",\"YOUGA\",\"YOUGA2\"],\"Utility\":[\"CADDY3\",\"TRAILERLARGE\",\"TRAILERS4\"],\"Coupe\":[\"COGCABRIO\",\"EXEMPLAR\",\"F620\",\"FACTION\",\"FACTION2\",\"FELON\",\"FELON2\",\"JACKAL\",\"SENTINEL\",\"SENTINEL2\",\"WINDSOR\",\"WINDSOR2\",\"ZION\",\"ZION2\"],\"Boat\":[\"DINGHY\",\"DINGHY2\",\"DINGHY3\",\"DINGHY4\",\"JETMAX\",\"MARQUIS\",\"PREDATOR\",\"SEASHARK\",\"SEASHARK2\",\"SEASHARK3\",\"SPEEDER\",\"SPEEDER2\",\"SQUALO\",\"SUBMERSIBLE\",\"SUBMERSIBLE2\",\"SUNTRAP\",\"TORO\",\"TORO2\",\"TROPIC\",\"TROPIC2\",\"TUG\"],\"Train\":[\"FREIGHT\",\"FREIGHTCAR\",\"FREIGHTCONT1\",\"FREIGHTCONT2\",\"FREIGHTGRAIN\",\"METROTRAIN\",\"TANKERCAR\"],\"Commercial\":[\"HAULER2\",\"PHANTOM3\"]}"

exports = {
    vehiclesConfig,
}