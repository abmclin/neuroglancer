/**
 * @license
 * Copyright 2019 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './icon.css';

export function makeIcon(options: {
  text?: string,
  svg?: string,
  title?: string,
  onClick?: (event: MouseEvent) => void,
  href?: string,
}): HTMLElement {
  const {title, onClick, href} = options;
  let element: HTMLDivElement|HTMLAnchorElement;
  if (href !== undefined) {
    element = document.createElement('a');
    element.href = href;
    element.target = '_blank';
  } else {
    element = document.createElement('div');
  }

  if (title !== undefined) {
    element.title = title;
  }
  if (onClick !== undefined) {
    element.addEventListener('click', onClick);
  }
  const {svg} = options;
  element.className = 'neuroglancer-icon';
  if (svg !== undefined) {
    element.innerHTML = svg;
  } else {
    element.textContent = options.text!;
  }
  return element;
}