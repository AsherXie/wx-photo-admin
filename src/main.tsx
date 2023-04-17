import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import '@/index.module.less';
const render = createRoot(document.querySelector('#root') as Element);
render.render(<RouterProvider router={router} />);
