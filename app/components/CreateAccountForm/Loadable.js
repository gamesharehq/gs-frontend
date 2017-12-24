/**
 *
 * Asynchronously loads the component for CreateAccountForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
