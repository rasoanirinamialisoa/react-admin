import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

export default PostCreate;
