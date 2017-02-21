;(function(module) {
  'use strict';

  module.config(function(localeProvider) {
    localeProvider.locale('ca', {
      language: 'ca',
      displayName: 'Català',
      messages: {
        'About': 'Sobre',
        'Add server': 'Afegir servidor',
        'Add stream': 'Afegir stream',
        'Add to playlist': 'Afegir a playlist',
        'Add to tracklist': 'Afegir a llista de pistes',
        'Album artist': 'Album de l\'artista',
        'Album': 'Àlbum',
        'Any': 'Quasevol',
        'Artist': 'Artista',
        'Back': 'Tornar',
        'Bitrate': 'Bitrate',
        'Cancel': 'Cancel·lar',
        'Clear cache': 'Netejar memòria cau',
        'Clear tracklist': 'Netejar llista de pistes',
        'Clear': 'Netejar',
        'Comment': 'Comentari',
        'Composer': 'Compositor',
        'Configured servers': 'Servidors configurats',
        'ConnectionError': 'Error de connexiò',
        'Consume mode': 'Mode consum',
        'Cover art': 'Portada',
        'Create playlist': 'Crear playlist',
        'Date': 'Data',
        'Debug messages': 'Missatges de rastreig',
        'Default click action': 'Acció predeterminada del clic',
        'Default': 'Per defecte',
        'Delete playlist': 'Esborrar playlist',
        'Delete': 'Esborrar',
        'Disc number': 'Numero de Disc',
        'Done': 'Fet',
        'Duration': 'Duració',
        'Edit playlist': 'Editar playlist',
        'Edit playlists': 'Editar playlists',
        'Edit tracklist': 'Editar llista de pistes',
        'Error': 'Error',
        'Exit': 'Sortir',
        'Find exact': 'Cercar exacte',
        'Genre': 'Gènere',
        'Host': 'Servidor',
        'Ignore': 'Ignorar',
        'Language': 'Idioma',
        'Library': 'Llibreria',
        'Licenses': 'Llicencies',
        'Logging': 'Registres',
        'Look and feel': 'Aparença',
        'Mopidy servers': 'Servidors Mopidy',
        'Name': 'Nom',
        'No servers found': 'No s\'han trobat servidors',
        'Nothing playing': 'No hi ha res reproduint-se',
        'OK': 'OK',
        'Path': 'Ruta',
        'Performer': 'Interpret',
        'Play next': 'Rep. Següent',
        'Play now': 'Reproduir ara',
        'Playback': 'Reproduir',
        'Playlists': 'Playlists',
        'Please make sure Zeroconf is enabled for any Mopidy servers in the same WiFi network as your device.': 'Assegureu-vos que Zeroconf es actiu als servidors que estiguin en la mateixa xarxa WiFI que el seu dispositiu.',
        'Port': 'Port',
        'Pull to refresh': 'Tirar per a refrescar',
        'Remove server': 'Treure servidor',
        'Replace tracklist': 'Substituir llista de pistes',
        'Request timeout': 'Temps de consulta esgotat',
        'Reset all settings to default values and restart application': 'Tornar als valor originals i reiniciar la aplicació',
        'Reset': 'Valors orginals',
        'Restart application': 'Reiniciar aplicació',
        'Restart': 'Reiniciar',
        'Retry': 'Tornar a provar',
        'Save as': 'Desar com',
        'Save': 'Desar',
        'Search here': 'Cercar aqui',
        'Search results': 'Resultats de la cerca',
        'Search term': 'Terme a cercar',
        'Search {name}': 'Cercar {name}',
        'Search': 'Cercar',
        'Secure connection': 'Connexió segura',
        'ServerError': 'Error del servidor',
        'Settings': 'Configuració',
        'Share': 'Compartir',
        'Show track info': 'Veure informació de la pista',
        'Sort by name': 'Ordernar per nom',
        'Sort by scheme': 'Ordenar per esquema',
        'Theme': 'Tema',
        'Then pull to refresh, or add a server manually.': 'Llavors tiri per refrescar, o afegueixi un servidor manualment.',
        'TimeoutError': 'Error de temps esgotat',
        'Track info': 'Informació de la Pista',
        'Track number': 'Numero de Pista',
        'Track': 'Pista',
        'Tracklist': 'Llista de Pistes',
        'Translations': 'Traduccions',
        'URI': 'URI',
        'URL': 'URL',
        'Version {version}': 'Versió {version}',
        'Volume keys': 'Tecles de volum',
        '{count} seconds': '{count, plural, one{1 segon} other{# segons}}',
        '{count} tracks': '{count, plural, =0{Sense Pistes} one{1 Pista} other{# Pistes}}',
        '{index} of {count}': '{index} de {count}',
      }
    });
  });
})(angular.module('app.locale.ca', ['app.services.locale']));
