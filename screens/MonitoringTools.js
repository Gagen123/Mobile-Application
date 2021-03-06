import React from 'react';
import { 
    View, 
    Text, 
    Icon,
    TouchableOpacity, 
     TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
 
} from 'react-native';
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


  const DzonkhagOptions  = [
    {label: 'Select Dzongkhag/Thromde', value: 'DK'},
    {label: 'Sarpang', value: 'SAR'},
    {label: 'Thimphu', value: 'THI'},
    {label: 'Punakha', value: 'PUNA'}
  ]

  const gewogOptions  = [
    {label: 'Select Gewog/Demkhong', value: 'DK'},
    {label: 'Dekiling', value: 'SAR'},
    {label: 'Pemaling', value: 'THI'},
    {label: 'Wangchukling', value: 'PUNA'}
  ]

  const parentschoolOptions  = [
    {label: 'Select Parent School', value: 'DK'},
    {label: 'Sarpang HSS', value: 'SAR'},
    {label: 'YHSS', value: 'THI'},
    {label: 'Punakha HSS', value: 'PUNA'}
  ]
  const villageOptions  = [
    {label: 'Select Village', value: 'DK'},
    {label: 'Chuzom', value: 'SAR'},
    {label: 'Sangayling', value: 'THI'},
    {label: 'pemaling', value: 'PUNA'}
  ]
import * as Animatable from 'react-native-animatable';
import { COLORS, FONTS, SIZES, icons} from '../constants';


    const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

   

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#fff' barStyle="light-content"/>
        <View style={styles.header}>
        <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>Monitoring Tools</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
       
    <FieldsContainer >
    <Fieldset>
       
        <FormGroup>
          <Label style={styles.action}>Dzongkhag/Thromde</Label>
          <Select
              name="village"
              label="village"
              options={DzonkhagOptions}
              
          />
        </FormGroup>

        <FormGroup>
          <Label>Gewog/Demkhong</Label>
          <Select
              name="village"
              label="village"
              options={gewogOptions}
             
          />
        </FormGroup>
        <FormGroup>
          <Label>Parent School</Label>
          <Select
              name="village"
              label="village"
              options={parentschoolOptions}
             
          />
        </FormGroup>

          <FormGroup>
          <Label>Village</Label>
          <Select
              name="Village"
              label="village"
              options={villageOptions}
             
          />
        </FormGroup>
        
      </Fieldset>
    </FieldsContainer>
    
 


            <View style={styles.button}>
                              
               <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.link, {
                        borderColor: '#111',
                        borderWidth: 0.1,
                        marginTop: 0
                    }]}
                >
                    <Text style={[styles.textlink, {
                        color: '#40464a',
                        marginLeft: 20,
                        fontSize:15,
                    }]}>A. Planning</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>{}}
                    style={[styles.link, {
                        borderColor: '#111',
                        borderWidth: 0.1,
                        marginTop: 15,
                    }]}
                >
                    <Text style={[styles.textlink, {
                        color: '#40464a',
                        marginLeft: 20,
                        fontSize:15,
                    }]}>B. Classroom Management,</Text> 
                    
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>{}}
                    style={[styles.link, {
                        borderColor: '#111',
                        borderWidth: 0.1,
                        marginTop: 15,
                        
                    }]}
                >
                    <Text style={[styles.textlink, {
                        color: '#40464a',
                        marginLeft: 20,
                        fontSize:15,
                    }]}>C. Assessment And kill Developent</Text>
                </TouchableOpacity>
                
                
            </View>
           
          
            </ScrollView>
            <TouchableOpacity
                    onPress={() =>{}}
                
                >
            <ActionsContainer>
             
            <Button icon="md-checkmark" iconPlacement="right">Save</Button>
            
            </ActionsContainer>
            </TouchableOpacity>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#f2f2f2'
    },
    header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 15,
        color:'#111',
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#40464a',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#111',
        fontSize: 24
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        borderColor:'#05375a',
        borderWidth: 0.5,
        borderRadius: 8,
        height:42,
    
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    link: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 10,
        
        backgroundColor: '#f2f2f2',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        
    },
    textlink: {
        fontSize: 18,
        fontWeight: 'bold'
    },
   
  });
