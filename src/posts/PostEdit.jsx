import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;
