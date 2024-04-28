import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

const CommentList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="postId" reference="posts">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export default CommentList;
