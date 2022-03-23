import Alpine from 'alpinejs';
import docsearch from '@docsearch/js';
import '@docsearch/css';

require('./anchors')
require('./scrollspy')
require('./cookies')
require('./external-links')
require('./language-badges')
require('./clipboard')

var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

window.dayjs = dayjs;


docsearch({
  container: '#docsearch',
  appId: 'BH4D9OD16A',
  indexName: 'statamic_3',
  apiKey: 'b5e8f73c7462a6d5c8b525ef183aabec',
  transformItems(items) {
    return items.map((item) => {
        // Transform the absolute URL into a relative URL so it works locally.
        const a = document.createElement('a');
        a.href = item.url;

        // If the result is the h1, remove the hash
        const hash = a.hash === '#content' ? '' : a.hash;

        return {...item, url: `${a.pathname}${hash}`}
    });
  },
});

window.Alpine = Alpine;

Alpine.start();
