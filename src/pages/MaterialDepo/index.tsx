import React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';

const MaterialDepo: React.FC = () => {
  return (
    <PageContainer
      title="Material Depo"
      breadcrumbs={[
        { title: 'Home', path: '/' },
        { title: 'Material Depo', path: '/material-depo' },
      ]}
    >
      <div> Material Depo</div>
    </PageContainer>
  );
};

export default MaterialDepo;
