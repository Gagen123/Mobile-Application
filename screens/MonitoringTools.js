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
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS, FONTS, SIZES, icons} from '../constants';

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
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
               
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
                
            </View>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
               
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
                
            </View>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
               
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
                
            </View>

            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
               
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
                
            </View>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
               
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
                
            </View>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
               
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
                
            </View>


            <View style={styles.button}>
                              
               <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.signIn, {
                        borderColor: '#111',
                        borderWidth: 1,
                        marginTop: 0
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#40464a',
                        marginLeft: 20,
                    }]}>A. Planning</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>{}}
                    style={[styles.signIn, {
                        borderColor: '#111',
                        borderWidth: 1,
                        marginTop: 15,
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#40464a',
                        marginLeft: 20,
                    }]}>B. Classroom Management,</Text> 
                    
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>{}}
                    style={[styles.signIn, {
                        borderColor: '#111',
                        borderWidth: 1,
                        marginTop: 15,
                        
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#40464a',
                        marginLeft: 20,
                    }]}>C. Assessment And kill Developent</Text>
                </TouchableOpacity>
                
                
            </View>
           
            
            </ScrollView>
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
        color: '#05375a',
        fontSize: 18
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
        borderWidth: 1,
        borderRadius: 10,
    
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        width: '100%',
        height: 60,
        justifyContent: 'center',

        // alignItems: 'center',
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
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
   
  });
