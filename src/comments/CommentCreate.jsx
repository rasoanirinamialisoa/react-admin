import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const CommentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

export default CommentCreate;
