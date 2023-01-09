import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Profile from '~/pages/Profile';
const publicRoute = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/upload', element: Upload, layout: HeaderOnly },
    { path: '/@:nickname', element: Profile },
];
export { publicRoute };
