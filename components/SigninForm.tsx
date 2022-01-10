// noinspection DuplicatedCode

import React, {useCallback, useEffect} from "react";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
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
import {useFormik} from "formik";
import {signInValidationRules} from "../validators/auth";
import $t from "../i18n";
import {Entypo} from "@expo/vector-icons";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../interface/navigation";
import {SCREEN_NAMES} from "../constants";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {loginUserRequest} from "../redux/actions/userActions";
import {LoginFormValues} from "../interface/userDataInterface";
import {getErrorSelector, getPendingSelector} from "../redux/selectors/userSelector";
import {t} from "i18n-js";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, SCREEN_NAMES.Login>>();
  const dispatch = useDispatch();
  const toast = useToast();

  const pending = useSelector(getPendingSelector);
  const error = useSelector(getErrorSelector);

  const [showPass, setShowPass] = React.useState(false);

  useFocusEffect(useCallback(() => {
    return () => {
      formik.handleReset(initialValues);
    };
  }, []));

  /*Server Side Error Handling*/
  useEffect(() => {
    if (error.login) {
      let toastData;
      switch (error.login) {
        case 404:
          toastData = {
            title: t("auth.emailDoesNotExist"),
            status: "error",
          };
          break;
        case 406:
          toastData = {
            title: t("auth.invalidCredentials"),
            status: "error",
          };
          break;
        default:
          toastData = {
            title: t("error.serverError"),
            status: "error",
          };
      }
      toast.show({
        title: toastData.title,
        status: toastData.status,
      });
    }
  }, [error.login]);

  //Formik Init
  const formik = useFormik({
    initialErrors: undefined,
    initialTouched: {email: false, password: false},
    initialValues,
    onSubmit(values: LoginFormValues): void | Promise<any> {
      dispatch(loginUserRequest(values));
    },
    validationSchema: signInValidationRules,
  });

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
        space="3"
        justifyContent="space-between"
        borderTopRightRadius={{base: "2xl", md: "xl"}}
        borderBottomRightRadius={{base: "0", md: "xl"}}
        borderTopLeftRadius={{base: "2xl", md: "0"}}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign in to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="3">
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
              </VStack>
              <Link
                ml="auto"
                _text={{
                  fontSize: "xs",
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
              >
                Forgot password?
              </Link>
              <Checkbox
                alignItems="flex-start"
                mt="5"
                isChecked
                value="demo"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <Text
                  pl="3"
                  fontWeight="normal"
                  _light={{color: "coolGray.800"}}
                  _dark={{color: "coolGray.400"}}
                >
                  {$t("auth.RememberMe")}
                </Text>
              </Checkbox>
              <Button
                mt="5"
                size="md"
                borderRadius="4"
                _text={{
                  fontWeight: "medium",
                }}
                _light={{
                  bg: "primary.900",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                isLoading={pending.login}
                isLoadingText={t("auth.verifying")}
                onPress={() => formik.handleSubmit()}
              >
                SIGN IN
              </Button>
              <HStack
                mt="5"
                space="2"
                mb={{base: 6, md: 7}}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{bg: "coolGray.200"}}
                  _dark={{bg: "coolGray.700"}}
                />
                <Text
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
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{base: "auto", md: "8"}}
        >
          <Text
            _light={{color: "coolGray.800"}}
            _dark={{color: "coolGray.400"}}
          >
            Don't have an account?
          </Text>
          {/* Opening Link Tag navigateTo:"SignUp" */}
          <Link
            _text={{
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
              navigation.navigate(SCREEN_NAMES.SignUp);
            }}
          >
            Sign up
          </Link>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default SignInForm;
