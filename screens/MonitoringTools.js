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
  Select,
  Switch,
  StyleSheet
 

} from 'react-native-clean-form'

const countryOptions = [
  {label: 'Bhutan', value: 'DK'},
  {label: 'Denmark', value: 'DK'},
  {label: 'Germany', value: 'DE'},
  {label: 'United State', value: 'US'}
]
const dzongkhagOptions = [
  {label: 'Select Dzongkhag/Thomde'},
  {label: 'Sarpang', value: 'sar'},
  {label: 'Punakha', value: 'pun'},
  {label: 'Paro', value: 'par'},
   {label: 'Wangdue', value: 'sar'},
  {label: 'Haa', value: 'pun'},
  {label: 'Gasa', value: 'par'}
]
const GewogOptions = [
  {label: 'Select Gewog'},
  {label: 'Geleph', value: 'sar'},
  {label: 'Dekling', value: 'pun'},
  {label: 'Gawaling', value: 'par'},
   {label: 'Pemaling', value: 'sar'},
  {label: 'Haa', value: 'pun'},
  {label: 'Gasa', value: 'par'}
]

const SchoolOptions = [
  {label: 'Select Parent School'},
  {label: 'Gelephu HSS', value: 'sar'},
  {label: 'Dekling MSS', value: 'pun'},
  {label: 'Sarpang HSS', value: 'par'},
   {label: 'Perithang MSS', value: 'sar'},
  {label: 'Haa HSS', value: 'pun'},
  {label: 'Gasa HSS', value: 'par'}
]
const CenterOptions = [
  {label: 'Select Name of Center'},
  {label: 'Gelephu HSS', value: 'sar'},
  {label: 'Dekling MSS', value: 'pun'},
  {label: 'Sarpang HSS', value: 'par'},
   {label: 'Perithang MSS', value: 'sar'},
  {label: 'Haa HSS', value: 'pun'},
  {label: 'Gasa HSS', value: 'par'}
]
const MonitoringTools = props => (
  <Form>
    <FieldsContainer >
    <Fieldset label="Monitoring Tools" last>
        <FormGroup>
          <Label>Dzongkhag</Label>
          <Select
              
              options={dzongkhagOptions}
              placeholder="Dzongkhag/Thomde"
          />
        </FormGroup>
        <FormGroup>
          <Label>Gewog</Label>
          <Select
              
              options={GewogOptions}
              placeholder="Gewog"
          />
        </FormGroup>
        <FormGroup>
          <Label>Parent School</Label>
          <Select
              
              options={SchoolOptions}
              placeholder="Parent School"
          />
        </FormGroup>
        <FormGroup>
          <Label>Center Name</Label>
          <Select
              
              options={CenterOptions}
              placeholder="Center Name"
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Center ID</Label>
          <Input placeholder="Center ID" />
        </FormGroup>
        
        
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button icon="md-checkmark" iconPlacement="right">Save</Button>
    </ActionsContainer>
  </Form>
)

export default MonitoringTools

