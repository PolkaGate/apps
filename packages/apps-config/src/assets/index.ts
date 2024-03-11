// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Asset } from './types.js';

import { acala } from './acala.js';
import { hydradx } from './hydradx.js';
import { kusamaAssetHub } from './kusamaAssetHub.js';
import { polkadotAssetHub } from './polkadotAssetHub.js';

export function createAssets (): Record<string, Asset[]> {
  return {
    acala,
    hydradx,
    kusamaAssetHub,
    polkadotAssetHub
  };
}
