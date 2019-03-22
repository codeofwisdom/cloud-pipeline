/*
 * Copyright 2017-2019 EPAM Systems, Inc. (https://www.epam.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {parser} from './parser';
import AndExpression from './expressions/andExpression';
import OrExpression from './expressions/orExpression';
import LogicalExpression from './expressions/logicalExpression';

export default class Filter {
  constructor () {
    parser.yy.AndExpression = AndExpression;
    parser.yy.OrExpression = OrExpression;
    parser.yy.LogicalExpression = LogicalExpression;
  }

  parse (input) {
    let result;
    try {
      result = parser.parse(input);
    } catch (e) {
      result = {
        error: e.message
      };
    }
    return result;
  }
}
