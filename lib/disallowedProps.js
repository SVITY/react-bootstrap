'use strict';

exports.__esModule = true;
var disallowedProps = {
  a: ['activeHref', 'activeKey', 'navItem'],
  ul: ['bsStyle', 'stacked', 'activeKey', 'justified', 'pullRight', 'pullLeft', 'bsClass', 'items', 'activePage', 'maxButtons', 'prev', 'next', 'ellipsis', 'boundaryLinks', 'first', 'last']
};

exports['default'] = disallowedProps;
module.exports = exports['default'];