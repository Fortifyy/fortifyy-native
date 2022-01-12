// noinspection DuplicatedCode

import React, {useCallback, useEffect} from "react";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  Hidden,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  Text,
  useToast,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../interface/navigation";
import {SCREEN_NAMES} from "../constants";
import {useFormik} from "formik";
import {signUpValidationRules} from "../validators/auth";
import $t from "../i18n";
import {Entypo} from "@expo/vector-icons";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {getErrorSelector, getPendingSelector} from "../redux/selectors/userSelector";
import {createUserRequest} from "../redux/actions/userActions";
import {t} from "i18n-js";
import {LoginFormValues} from "../interface/userDataInterface";

// Shape of form values
interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: SignUpFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const initialTouched = {
  email: false,
  password: false,
  confirmPassword: false,
};

const SignUpForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, SCREEN_NAMES.SignUp>>();
  const dispatch = useDispatch();
  const toast = useToast();
  const error = useSelector(getErrorSelector);
  const pending = useSelector(getPendingSelector);
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);

  const formik = useFormik({
    initialErrors: undefined,
    initialTouched,
    initialValues,
    onSubmit(values: SignUpFormValues): void | Promise<any> {
      let formValues: LoginFormValues = {
        email: values.email.toLowerCase(),
        password: values.password,
      };
      dispatch(createUserRequest(formValues));

    },
    validationSchema: signUpValidationRules,
  });
  /*Server Side Error Handling*/
  useEffect(() => {
    if (error.signup) {
      toast.show({
        title: error.signup,
        status: "error",
      });
    }
  }, [error.signup]);

  useFocusEffect(useCallback(() => {
    return () => {
      formik.handleReset(initialValues);
    };
  }, []));

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{flex: 1}}
    >
      <VStack
        flex="1"
        px="6"
        py="9"
        _light={{bg: "white"}}
        _dark={{bg: "coolGray.800"}}
        justifyContent="space-between"
        space="3"
        borderTopRightRadius={{base: "2xl", md: "xl"}}
        borderBottomRightRadius={{base: "0", md: "xl"}}
        borderTopLeftRadius={{base: "2xl", md: "0"}}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign up to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="8">
              <VStack space={{base: "7", md: "4"}}>
                <FormControl isInvalid={(!!formik.errors.email && formik.touched.email)}>
                  <Input
                    isRequired
                    onFocus={() => {
                      formik.setFieldTouched("email", true);
                    }}
                    type="text"
                    value={formik.values.email}
                    borderRadius={4}
                    placeholderTextColor={"#9ca3af"}
                    placeholder={$t("auth.enterEmail")}
                    onChangeText={formik.handleChange("email")}
                    size={"md"}
                    _dark={{
                      borderColor: "coolGray.700",
                    }}
                    _light={{
                      borderColor: "coolGray.300",
                    }}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    returnKeyType="next"
                    textContentType="emailAddress"
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {formik.errors.email}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.password && formik.touched.password}>
                  <Input
                    isRequired
                    onFocus={() => formik.setFieldTouched("password", true)}
                    type={showPass ? "" : "password"}
                    placeholder={$t("auth.enterPassword")}
                    size={"md"}
                    placeholderTextColor={"#9ca3af"}
                    borderRadius={4}
                    value={formik.values.password}
                    onChangeText={formik.handleChange("password")}
                    InputRightElement={
                      <IconButton
                        variant="unstyled"
                        icon={
                          <Icon
                            size="4"
                            color="coolGray.400"
                            as={Entypo}
                            name={showPass ? "eye-with-line" : "eye"}
                          />
                        }
                        onPress={() => {
                          setShowPass(prevState => !prevState);
                        }}
                      />
                    }
                    _dark={{
                      borderColor: "coolGray.700",
                    }}
                    _light={{
                      borderColor: "coolGray.300",
                    }}
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {formik.errors.password}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.confirmPassword && formik.touched.confirmPassword}>
                  <Input
                    isRequired
                    onFocus={() => formik.setFieldTouched("confirmPassword", true)}
                    type={showConfirmPass ? "" : "password"}
                    placeholder={$t("auth.enterPassword")}
                    size={"md"}
                    placeholderTextColor={"#9ca3af"}
                    borderRadius={4}
                    value={formik.values.confirmPassword}
                    onChangeText={formik.handleChange("confirmPassword")}
                    InputRightElement={
                      <IconButton
                        variant="unstyled"
                        icon={
                          <Icon
                            size="4"
                            color="coolGray.400"
                            as={Entypo}
                            name={showConfirmPass ? "eye-with-line" : "eye"}
                          />
                        }
                        onPress={() => {
                          setShowConfirmPass(prevState => !prevState);
                        }}
                      />
                    }
                    _dark={{
                      borderColor: "coolGray.700",
                    }}
                    _light={{
                      borderColor: "coolGray.300",
                    }}
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {formik.errors.confirmPassword}
                  </FormControl.ErrorMessage>
                </FormControl>
              </VStack>
              <Checkbox
                alignItems="flex-start"
                defaultIsChecked
                value="demo"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <HStack alignItems="center">
                  <Text fontSize="sm" color="coolGray.400" pl="2">
                    I accept the{" "}
                  </Text>
                  <Link
                    _text={{
                      fontSize: "sm",
                      fontWeight: "semibold",
                      textDecoration: "none",
                    }}
                    _light={{
                      _text: {
                        color: "primary.900",
                      },
                    }}
                    _dark={{
                      _text: {
                        color: "primary.500",
                      },
                    }}
                  >
                    Terms of Use
                  </Link>
                  <Text fontSize="sm"> & </Text>

                  <Link
                    _text={{
                      fontSize: "sm",
                      fontWeight: "semibold",
                      textDecoration: "none",
                    }}
                    _light={{
                      _text: {
                        color: "primary.900",
                      },
                    }}
                    _dark={{
                      _text: {
                        color: "primary.500",
                      },
                    }}
                  >
                    Privacy Policy
                  </Link>
                </HStack>
              </Checkbox>
              <Button
                size="md"
                borderRadius="4"
                _text={{
                  fontSize: "sm",
                  fontWeight: "medium",
                }}
                _light={{
                  bg: "primary.900",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                isLoading={pending.signup}
                isLoadingText={t("auth.verifying")}
                onPress={() => formik.handleSubmit()}
              >
                SIGN UP
              </Button>
              <HStack
                space="2"
                mb={{base: "6", md: "7"}}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{bg: "coolGray.200"}}
                  _dark={{bg: "coolGray.700"}}
                />
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _light={{color: "coolGray.300"}}
                  _dark={{color: "coolGray.500"}}
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{bg: "coolGray.200"}}
                  _dark={{bg: "coolGray.700"}}
                />
              </HStack>
            </VStack>
          </VStack>
        </VStack>
        <HStack
          mb="4"
          space="1"
          alignItems="center"
          justifyContent="center"
          mt={{base: "auto", md: "8"}}
        >
          <Text
            fontSize="sm"
            _light={{color: "coolGray.800"}}
            _dark={{color: "coolGray.400"}}
          >
            Already have an account?
          </Text>
          {/* Opening Link Tag navigateTo:"SignIn" */}
          <Link
            _text={{
              fontSize: "sm",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            _light={{
              _text: {
                color: "primary.900",
              },
            }}
            _dark={{
              _text: {
                color: "primary.500",
              },
            }}
            onPress={() => {
              navigation.navigate(SCREEN_NAMES.Login);
            }}
          >
            Sign in
          </Link>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
};
export default SignUpForm;
