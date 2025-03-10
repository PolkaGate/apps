// Copyright 2017-2025 @polkadot/app-claims authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StatementKind } from '@polkadot/types/interfaces';

import React from 'react';

import { styled } from '@polkadot/react-components';

import { useTranslation } from './translate.js';
import { getStatement } from './util.js';

export interface Props {
  className?: string;
  kind?: StatementKind | null;
  systemChain: string;
}

// Get the full hardcoded text for a statement
function StatementFullText ({ statementUrl, systemChain }: { statementUrl?: string; systemChain: string }): React.ReactElement | null {
  const { t } = useTranslation();

  switch (systemChain) {
    case 'Polkadot':
    case 'Polkadot CC1':
      return statementUrl
        ? <iframe src={statementUrl} />
        : null;

    default:
      return <p>{t('Warning: we did not find any attest statement for {{chain}}', { replace: { chain: systemChain } })}</p>;
  }
}

function Statement ({ className, kind, systemChain }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();
  const statementUrl = getStatement(systemChain, kind)?.url;

  if (!statementUrl) {
    return null;
  }

  return (
    <StyledDiv className={className}>
      {t('Please read these terms and conditions carefully. By submitting this statement, you are deemed to have accepted these Terms and Conditions. If you do not agree to these terms, please refrain from accessing or proceeding. You can also find them at:')}
      <a
        className='statementUrl'
        href={statementUrl}
        rel='noopener noreferrer'
        target='_blank'
      >{statementUrl}</a>
      <div className='statement'>
        <StatementFullText
          statementUrl={statementUrl}
          systemChain={systemChain}
        />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .statement{
    border: 1px solid #c2c2c2;
    background: #f2f2f2;
    height: 15rem;
    padding: 1rem;
    width: 100%;
    margin: 1rem 0;
    white-space: normal;

    p {
      color: var(--color-text) !important;
    }

    iframe {
      border: 0;
      height: 100%;
      width: 100%;
    }
  }

  .statementUrl{
    margin-left: 0.3rem
  }
`;

export default React.memo(Statement);
