import React from 'react';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
  Input,
  Select


} from 'react-native-clean-form'

const countryOptions = [
  {label: 'Bhutan', value: 'DK'},
  {label: 'Denmark', value: 'DK'},
  {label: 'Germany', value: 'DE'},
  {label: 'United State', value: 'US'}
]

const SettingsScreen = props => (
  <Form>
    <FieldsContainer >
    <Fieldset label="Shipping details" last>
        <FormGroup style={{width: 100,height:70}} >
          <Label>First name</Label>
          <Input style={{width: 100,height:20}} placeholder="Doe" />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input placeholder="Doe" />
        </FormGroup>
        <FormGroup>
        
          <Label>Phone</Label>
          <Input placeholder="+45 88 88 88 88" />
        </FormGroup>
        <FormGroup>
          <Label>First name</Label>
          <Input placeholder="John" />
        </FormGroup>
      </Fieldset>
      <Fieldset label="Shipping details" last>
        <FormGroup>
          <Label>Address</Label>
          <Input placeholder="Hejrevej 33" />
        </FormGroup>
        <FormGroup>
          <Label>City</Label>
          <Input placeholder="Copenhagen" />
        </FormGroup>
        <FormGroup>
          <Label>ZIP Code</Label>
          <Input placeholder="2400" />
        </FormGroup>
        <FormGroup>
          <Label>Country</Label>
          <Select
              name="country"
              label="Country"
              options={countryOptions}
              placeholder="country"
          />
        </FormGroup>
        
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button icon="md-checkmark" iconPlacement="right">Save</Button>
    </ActionsContainer>
  </Form>
)

export default SettingsScreen

