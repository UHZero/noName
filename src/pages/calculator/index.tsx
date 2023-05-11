import type { ReactElement } from 'react';

import type { NextPageWithLayout } from '../_app';
import Calculator from '@/components/Calculator';
 
const Page: NextPageWithLayout = () => {
  return <Calculator />;
};
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
        {page}
    </div>
  );
};
 
export default Page;