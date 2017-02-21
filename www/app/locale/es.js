;(function(module) {
  'use strict';

  module.config(function(localeProvider) {
    localeProvider.locale('es', {
      language: 'es',
      displayName: 'Español',
      messages: {
        'About': 'Acerca de',
        'Add server': 'Añadir servidor',
        'Add stream': 'Añadir stream',
        'Add to playlist': 'Añadir a playlist',
        'Add to tracklist': 'Añadir a lista de pistas',
        'Album artist': 'Álbum del Artista',
        'Album': 'Álbum',
        'Any': 'Cualquiera',
        'Artist': 'Artista',
        'Back': 'Volver',
        'Bitrate': 'Bitrate',
        'Cancel': 'Cancelar',
        'Clear cache': 'Limpiar cache',
        'Clear tracklist': 'Limpiar lista de pistas',
        'Clear': 'Limpiar',
        'Comment': 'Comentario',
        'Composer': 'Compositor',
        'Configured servers': 'Servidores configurados',
        'ConnectionError': 'Error de conexión',
        'Consume mode': 'Modo consumo',
        'Cover art': 'Portada',
        'Create playlist': 'Crear playlist',
        'Date': 'Fecha',
        'Debug messages': 'Mensajes de rastreo',
        'Default click action': 'Acción predeterminada del click',
        'Default': 'Por defecto',
        'Delete playlist': 'Borrar playlist',
        'Delete': 'Borrar',
        'Disc number': 'Número de Disco',
        'Done': 'Hecho',
        'Duration': 'Duración',
        'Edit playlist': 'Editar playlist',
        'Edit playlists': 'Editar playlists',
        'Edit tracklist': 'Editar lista de pistas',
        'Error': 'Error',
        'Exit': 'Salir',
        'Find exact': 'Buscar exacto',
        'Genre': 'Género',
        'Host': 'Servidor',
        'Ignore': 'Ignorar',
        'Language': 'Idioma',
        'Library': 'Libreria',
        'Licenses': 'Licencias',
        'Logging': 'Registros',
        'Look and feel': 'Apariencia',
        'Mopidy servers': 'Servidores Mopidy',
        'Name': 'Nombre',
        'No servers found': 'No se han encontrado servidores',
        'Nothing playing': 'No hay nada reproduciendose',
        'OK': 'OK',
        'Path': 'Ruta',
        'Performer': 'Intérprete',
        'Play next': 'Rep. Siguiente',
        'Play now': 'Reproducir ahora',
        'Playback': 'Reproducir',
        'Playlists': 'Playlists',
        'Please make sure Zeroconf is enabled for any Mopidy servers in the same WiFi network as your device.': 'Asegurese que Zeroconf está activo en los servidores que estén en la misma red WiFI que su dispositivo.',
        'Port': 'Puerto',
        'Pull to refresh': 'Tirar para refrescar',
        'Remove server': 'Quitar servidor',
        'Replace tracklist': 'Reemplazar lista de pistas',
        'Request timeout': 'Tiempo de consulta agotado',
        'Reset all settings to default values and restart application': 'Volver a los valores originales y reiniciar la aplicación',
        'Reset': 'Valores orginales',
        'Restart application': 'Reiniciar aplicación',
        'Restart': 'Reiniciar',
        'Retry': 'Reintentar',
        'Save as': 'Guardar como',
        'Save': 'Guardar',
        'Search here': 'Buscar aquí',
        'Search results': 'Resultados de la busqueda',
        'Search term': 'Término a buscar',
        'Search {name}': 'Buscar {name}',
        'Search': 'Buscar',
        'Secure connection': 'Conexión segura',
        'ServerError': 'Error del servidor',
        'Settings': 'Configuración',
        'Share': 'Compartir',
        'Show track info': 'Mostrar información de la pista',
        'Sort by name': 'Ordernar por nombre',
        'Sort by scheme': 'Ordenar por esquema',
        'Theme': 'Tema',
        'Then pull to refresh, or add a server manually.': 'Entonces tire para refrescar, o añada un servidor manualmente.',
        'TimeoutError': 'Error de tiempo agotado',
        'Track info': 'Información de la Pista',
        'Track number': 'Número de Pista',
        'Track': 'Pista',
        'Tracklist': 'Lista de Pistas',
        'Translations': 'Traducciones',
        'URI': 'URI',
        'URL': 'URL',
        'Version {version}': 'Versión {version}',
        'Volume keys': 'Teclas de volumen',
        '{count} seconds': '{count, plural, one{1 segundo} other{# segundos}}',
        '{count} tracks': '{count, plural, =0{Sin Pistas} one{1 Pista} other{# Pistas}}',
        '{index} of {count}': '{index} de {count}',
      }
    });
  });
})(angular.module('app.locale.es', ['app.services.locale']));
