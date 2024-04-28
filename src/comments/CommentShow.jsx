import { Show, SimpleShowLayout, TextField, ReferenceField } from 'react-admin';

const CommentShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="postId" reference="posts">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);

export default CommentShow;
