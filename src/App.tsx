import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import {authProvider} from './authProvider';
import PostList from './posts/PostList';
import PostEdit from './posts/PostEdit';
import PostCreate from './posts/PostCreate';
import PostShow from './posts/PostShow';
import CommentList from './comments/CommentList';
import CommentEdit from './comments/CommentEdit';
import CommentCreate from './comments/CommentCreate';
import CommentShow from './comments/CommentShow';

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
        <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} show={CommentShow} />
    </Admin>
);
