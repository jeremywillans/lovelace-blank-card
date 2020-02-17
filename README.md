# blank-card

HA Lovelace Blank Card

This card has been created for use in conjunction with state-switch, allowing the option of showing nothing.

[![gh_release]](../../releases)
[![gh_last_commit]](../../commits/master)
[![hacs_custom]](hacs)

## Example
```
type: 'custom:state-switch'
entity: input_boolean.test
states:
  'on':
    type: entities
    title: Lights
    entities:
      - light.kitchen
  'off':
    type: 'custom:blank-card'
```

## Setup

Install using [HACS](hacs) using the following custom plugin repository ```https://github.com/jeremywillans/lovelace-blank-card```
```yaml
resources:
  - type: module
    url: /community_plugin/lovelace-blank-card/blank-card.js
```

OR 

Manually add [blank-card.js]
to your `<config>/www/` folder and add the following to your `ui-lovelace.yaml` file:
```yaml
resources:
  - type: module
    url: /local/blank-card.js  
```

## Support

In case you've found a bug, please [open an issue on GitHub](../../issues).

## My Repos

[ha-rest980-roomba] | 
[roomba-vacuum-card] | 
[hass-addons] | 
[event-emitter]

[![BMC]](https://www.buymeacoffee.com/jeremywillans)


[gh_release]: https://img.shields.io/github/v/release/jeremywillans/lovelace-blank-card.svg?style=for-the-badge
[gh_last_commit]: https://img.shields.io/github/last-commit/jeremywillans/lovelace-blank-card.svg?style=for-the-badge
[hacs_custom]: https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge
[hacs]: https://github.com/custom-components/hacs

[roomba-vacuum-card.js]: https://raw.githubusercontent.com/jeremywillans/lovelace-roomba-blank-card/master/dist/blank-card.js

[ha-rest980-roomba]: https://github.com/jeremywillans/ha-rest980-roomba
[roomba-vacuum-card]: https://github.com/jeremywillans/lovelace-roomba-vacuum-card
[hass-addons]: https://github.com/jeremywillans/hass-addons
[event-emitter]: https://github.com/jeremywillans/event-emitter
[BMC]: https://www.buymeacoffee.com/assets/img/custom_images/white_img.png
