import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CustomButton from '../../Components/UI/CustomButton';
import CustomTextInput from '../../Components/UI/CustomTextInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dimensions from '../../Constants/Dimensions';
import PhoneInput from "react-native-phone-number-input";

const AuthScreen = props => {
  const windowWidth = Dimensions.width;
  const windowHeight = Dimensions.height;

  const [phoneNumber, setPhoneNumber] = useState("");
//  const [valid, setValid] = useState(false);
  const phoneInput = useRef(null);

  const textChangeHandler = text => {
      console.log("Im txt handler", text);
      setPhoneNumber(text);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          style={styles.loginImage}
          resizeMode="cover"
          source={require('../../assets/images/login.jpg')}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              ...styles.skipContainer,
              position: 'absolute',
              left: windowWidth * 0.75,
              right: 0,
              top: 25,
              bottom: 0,
            }}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: windowHeight * 0.51,
              marginLeft: moderateScale(20),
              marginRight: moderateScale(25),
              backgroundColor: 'black',
              padding: moderateScale(2),
              borderRadius: moderateScale(5)
            }}>
             <PhoneInput
            ref={phoneInput}
            value={phoneNumber}
            placeholder="Phone Number"
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              textChangeHandler(text);
              console.log("Text entered: ", text);
            }}
            // onChangeFormattedText={(text) => {
            //   //setFormattedValue(text);
            //   setPhoneNumber(text);
            //   console.log("Formatted Text entered: ", text);
            // }}
            containerStyle = {styles.phoneNumberContainer}
            textContainerStyle = {styles.phoneTextContainer}
            textInputProps = {{
              maxLength: 15,
                        
              // style: {
              //   fontFamily: 'AtkinsonHyperlegible-Bold',
              //  // fontSize: moderateScale(15),
              //  // color: 'black'
              //},
            }}
            textInputStyle = {{
             fontSize: moderateScale(15),
             fontFamily: 'AtkinsonHyperlegible-Bold',
            }}
            codeTextStyle = {{ 
             fontFamily: 'AtkinsonHyperlegible-Bold',
             fontSize: moderateScale(15)
            }}
            withShadow
            //autoFocus
          />
            <Icon
              name="cancel"
              size={20}
              color="white"
              style={{
                paddingLeft: moderateScale(10),
                paddingRight: moderateScale(8)
              }}
              onPress={() => textChangeHandler("")}
            />
          </View>
          <View
            style={{
              marginLeft: moderateScale(20),
              marginTop: moderateScale(10),
              flex: 1,
            }}>
            <CustomButton
              style={{backgroundColor: 'black', width: '93%'}}
              textStyle={styles.otpButtonText}
              onPress={() => {
                // const checkValid = phoneInput.current?.isValidNumber(phoneNumber);
                const countryCode = phoneInput.current?.getCallingCode();
                //console.log("Validity: ", checkValid, countryCode, phoneNumber);
                //setValid(checkValid ? checkValid : false);
               // if(valid) {
                  props.navigation.navigate('OTP', {
                    phone: phoneNumber,
                    code: countryCode
                  })
                // } else {
                //   ToastAndroid.showWithGravity(
                //     'Enter a valid number',
                //     ToastAndroid.LONG,
                //     ToastAndroid.BOTTOM,
                //   );
                //}
              }}>
              Send OTP
            </CustomButton>
          </View>
          <View style={styles.seperatorView}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                flex: 1,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontFamily: 'AtkinsonHyperlegible-Bold',
                fontSize: 15,
                alignSelf: 'center',
                color: 'black',
                paddingHorizontal: 5,
              }}>
              OR
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                flex: 1,
                alignSelf: 'center',
              }}
            />
          </View>
          <View
            style={{
              marginLeft: moderateScale(20),
              marginBottom: moderateScale(10),
              flex: 1,
            }}>
            <CustomButton
              style={{backgroundColor: 'white', width: '93%'}}
              textStyle={styles.ssoButtonText}>
              Continue with Email
            </CustomButton>
          </View>
          <View
            style={{
              ...styles.ssoContainer,
              marginHorizontal: windowWidth * 0.06,
              marginBottom: moderateScale(10),
            }}>
            <View
              style={{
                marginLeft: moderateScale(-3),
                flex: 1,
              }}>
              <CustomButton
                style={{
                  backgroundColor: 'white',
                  width: (windowWidth - moderateScale(55)) / 2,
                }}
                textStyle={{
                  ...styles.ssoButtonText,
                  paddingLeft: moderateScale(30),
                }}>
                Facebook
              </CustomButton>
            </View>
            <View
              style={{
                marginLeft: moderateScale(8),
                flex: 1,
              }}>
              <CustomButton
                style={{
                  backgroundColor: 'white',
                  width: (windowWidth - moderateScale(55)) / 2,
                }}
                textStyle={{
                  ...styles.ssoButtonText,
                  paddingLeft: moderateScale(20),
                }}>
                {' '}
                Google
              </CustomButton>
            </View>
          </View>
          <Image
            style={{
              width: '9%',
              height: '50%',
              resizeMode: 'contain',
              position: 'absolute',
              top: windowHeight * 0.6 + moderateScale(15),
              bottom: 0,
              left: windowWidth * 0.1,
              right: 0,
            }}
            source={require('../../assets/images/email.png')}
          />
          <Image
            style={{
              width: '8%',
              height: '50%',
              resizeMode: 'contain',
              position: 'absolute',
              top: windowHeight * 0.5 + moderateScale(145),
              bottom: 0,
              left: windowWidth * 0.1,
              right: 0,
            }}
            source={require('../../assets/images/facebook.png')}
          />
          <Image
            style={{
              width: '7%',
              height: '50%',
              resizeMode: 'contain',
              position: 'absolute',
              top: windowHeight * 0.5 + moderateScale(145),
              bottom: 0,
              left: windowWidth * 0.55,
              right: 0,
            }}
            source={require('../../assets/images/google.png')}
          />
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export const authScreenOptions = navData => {
  return {
    headerShown: false,
  };
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkorange',
  },

  line: {
    borderColor: 'green',
    borderBottomWidth: 1,
  },

  ssoInnerStyle: {
    borderWidth: '1@ms',
    borderRadius: '7@ms',
    borderColor: 'white',
    padding: '15@ms',
  },

  seperatorView: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: '30@ms',
    paddingLeft: '20@ms',
    paddingRight: '25@ms',
  },

  ssoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'darkorange',
  },

  phoneNumberContainer: {
   // width: '200%',
    borderRadius: '5@ms',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },

  phoneTextContainer: {
    backgroundColor: 'white',
    paddingLeft: '0@ms',
    paddingVertical: '2@ms'
  },

  otpButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: moderateScale(16),
    fontFamily: 'AtkinsonHyperlegible-Regular',
  },

  ssoButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: '14@ms',
    fontFamily: 'AtkinsonHyperlegible-Regular',
  },

  phoneTextInput: {
    //flex: 1,
    paddingLeft: '100@ms',
    fontFamily: 'AtkinsonHyperlegible-Regular',
    fontSize: '15@ms',
  },

 skipText: {
    fontFamily: 'AtkinsonHyperlegible-Bold',
    textAlign: 'center',
    paddingTop: '2@ms',
    color: '#BCBCBC',
  },

  skipContainer: {
    padding: '5@ms',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: '15@ms',
    width: '65@ms',
    height: '30@ms',
  },

  loginImage: {
    //flex: 1,
    height: '77%',
    //aspectRatio: 1.0,
    //width: '100%',
  },
});

export default AuthScreen;
