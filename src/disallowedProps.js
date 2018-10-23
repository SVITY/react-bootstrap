const disallowedProps = {
  a: [
    'activeHref', 'activeKey', 'navItem', 'eventKey', 'divider'
  ],
  ul: [
    'bsStyle',
    'stacked',
    'activeKey',
    'justified',
    'pullRight',
    'pullLeft',
    'bsClass',
    'items',
    'activePage',
    'maxButtons',
    'prev',
    'next',
    'ellipsis',
    'boundaryLinks',
    'first',
    'last',
    'buttonComponentClass'
  ],
  div: [
    'header',
    'defaultExpanded',
    'bsClass',
    'bsStyle',
    'initialValue',
    'onUpdate',
    'valid',
    'invalid',
    'dirty',
    'pristine',
    'touched',
    'visited',
    'labelClassName',
    'wrapperClassName',
    'componentClass',
    'dropup',
    'pullRight',
    'bsSize',
    'onToggle',
    'justified',
    'vertical'
  ],
  button: [
    'active',
    'block',
    'navItem',
    'navDropdown',
    'noCaret',
    'useAnchor',
    'bsRole'
  ]
};

export default disallowedProps;
