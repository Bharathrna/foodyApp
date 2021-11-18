import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';

import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import Dimensions from '../../Constants/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';

const OTPScreen = props => {
  const [resendCode, setResendCode] = useState(false);
  const [attempts, setAttempts] = useState(3);
  const [otpError, setOtpError] = useState(false);
  const windowWidth = Dimensions.width;
  const windowHeight = Dimensions.height;

  const phoneNumber = props.navigation.getParam('phone');

  const resendCodeHandler = () => {
    ToastAndroid.showWithGravity(
      'OTP sent successfully',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    setResendCode(false);
    setAttempts(attempts - 1);
  };

  const onCodeFilledHandler = otp => {
    setOtpError(true);
  };

  const onCodeChangeHandler = otp => {
    if (otp.length < 6) {
      setOtpError(false);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: moderateScale(15),
          marginLeft: moderateScale(10),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={30}
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: moderateScale(20),
            fontSize: moderateScale(20),
            fontFamily: 'AtkinsonHyperlegible-Regular',
          }}>
          Enter Verification Code
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: moderateScale(14),
          }}>
          We have sent a verification code to
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: moderateScale(14),
            marginTop: moderateScale(5),
          }}>
          +91-{phoneNumber}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: moderateScale(25),
          marginTop: moderateScale(30),
        }}>
        <OTPInputView
          selectionColor="black"
          pinCount={6}
          style={{
            width: '100%',
            height: moderateScale(70),
          }}
          codeInputFieldStyle={{
            borderRadius: moderateScale(7),
            borderColor: 'lightgrey',
            color: 'black',
            fontFamily: 'Montserrat-Regular',
            fontSize: moderateScale(17),
          }}
          codeInputHighlightStyle={{
            borderRadius: moderateScale(7),
            color: 'black',
            fontFamily: 'Montserrat-Regular',
            fontSize: moderateScale(17),
            borderColor: 'black',
          }}
          onCodeChanged={code => {
            onCodeChangeHandler(code);
          }}
          onCodeFilled={code => {
            onCodeFilledHandler(code);
          }}
        />
      </View>
      {otpError ? (
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: moderateScale(11),
              color: 'red',
            }}>
            The OTP entered is invalid/incorrect. Please try again.
          </Text>
        </View>
      ) : null}
      {attempts < 3 ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: moderateScale(70),
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: moderateScale(11),
              color: '#1E90FF',
            }}>
            A new OTP has been sent
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: moderateScale(11),
              color: '#1E90FF',
            }}>
            ({attempts} out of 3 attempts)
          </Text>
        </View>
      ) : null}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: moderateScale(25),
        }}>
        <View style={{marginBottom: moderateScale(20)}}>
          <CountDown
            key={attempts}
            until={30}
            digitStyle={{
              backgroundColor: 'transparent',
              width: 'auto',
              height: 'auto',
            }}
            digitTxtStyle={{
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal',
              fontSize: moderateScale(19),
            }}
            timeLabels={{m: null, s: null}}
            timeToShow={['M', 'S']}
            showSeparator
            onFinish={() => {
              setResendCode(true);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: moderateScale(11),
            }}>
            Didn't receive the code?
          </Text>
          {resendCode && attempts > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resendCodeHandler();
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: moderateScale(11),
                  color: 'red',
                }}>
                {' '}
                Resend now
              </Text>
            </TouchableOpacity>
          ) : (
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                fontSize: moderateScale(11),
                color: 'grey',
              }}>
              {' '}
              Resend now
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export const otpScreenOptions = navData => {
  return {
    headerShown: false,
  };
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default OTPScreen;
