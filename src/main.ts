'use strict';

import { PIXI as PIXI_ } from "pixi"

var PIXI: any = PIXI_

document.addEventListener(
  'DOMContentLoaded',
  () => {
    _main();
  },
  false
);

const _init = (content: Element): void => {
  console.log('Initializing JSGL');

  const content_size = content.getBoundingClientRect()
  console.log(content_size)

  const app = new PIXI.Application({width: content_size.width, height: content_size.height});

  const rectangle = new PIXI.Graphics();
  rectangle.lineStyle({width: 4, color: 0xFF3300, alpha: 1});
  rectangle.beginFill(0x66CCFF);
  rectangle.drawRect(0, 0, 64, 64);
  rectangle.endFill();
  rectangle.x = 170;
  rectangle.y = 170;
  app.stage.addChild(rectangle);

  content?.appendChild(app.view);
}

var _entry_fn = (): void => {};

export const start = (fn: () => void): void => {
  _entry_fn = fn
}

const _main = (): void => {
  var content = document.getElementById('content');
  if (content == null) {
    console.log('Unable to start JSGL. Unable to find content div')
    return
  }

  _init(content);

  console.log('Starting JSGL');
  _entry_fn();

  console.log('Stopping JSGL');
}
