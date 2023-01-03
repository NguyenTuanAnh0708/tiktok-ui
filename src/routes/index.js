import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
const publicRoute = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/upload', element: Upload, layout: HeaderOnly },
];
export { publicRoute };
