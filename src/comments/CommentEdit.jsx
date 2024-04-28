import { Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const CommentEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export default CommentEdit;
