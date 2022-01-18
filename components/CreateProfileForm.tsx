// noinspection DuplicatedCode
import React, {useCallback, useState} from "react";
import {
  Actionsheet,
  Avatar,
  Button,
  Checkbox,
  Circle,
  Divider,
  FormControl,
  Hidden,
  HStack,
  Icon,
  Input,
  Link,
  Pressable,
  Select,
  Text,
  useDisclose,
  useToast,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../interface/navigation";
import {OWNERSHIP_TYPES, SCREEN_NAMES} from "../constants";
import {useFormik} from "formik";
import {createProfileValidationRules} from "../validators/auth";
import $t from "../i18n";
import {RouteProp, useFocusEffect, useNavigation, useRoute} from "@react-navigation/native";
import {t} from "i18n-js";
import {AntDesign, Entypo, Ionicons, MaterialIcons} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import authService from "../services/AuthService";
import {useDispatch} from "react-redux";
import {loginUserRequest} from "../redux/actions/userActions";

declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;

    set(name: string, value: FormDataValue, fileName?: string): void;
  }
}

// Shape of form values
interface CreateProfileFormValues {
  name: string,
  flat: string,
  mobileNum: string,
  ownershipType: OWNERSHIP_TYPES
}

const initialValues: CreateProfileFormValues = {
  name: "",
  flat: "",
  mobileNum: "",
  ownershipType: OWNERSHIP_TYPES.Owner,
};

const initialTouched = {
  name: false,
  flat: false,
  mobileNum: false,
  ownershipType: false,
};

const CreateProfileForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, SCREEN_NAMES.CreateProfile>>();
  const route = useRoute<RouteProp<RootStackParamList, SCREEN_NAMES.CreateProfile>>();

  const toast = useToast();
  const dispatch = useDispatch();
  const [pending, setPending] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclose();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const openImagePickerLib = async () => {
    let permissionResultMedia = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResultMedia.granted) {
      toast.show({
        title: t("error.permissions.mediaTitle"),
        description: t("error.permissions.mediaDescription"),
        status: "warning",
      });
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      allowsMultipleSelection: false,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.2,
    });
    if (pickerResult.cancelled) return;
    onClose();
    setSelectedImage(pickerResult.uri);
  };

  const openImagePickerCamera = async () => {
    let permissionResultCamera = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResultCamera.granted) {
      toast.show({
        title: t("error.permissions.cameraTitle"),
        description: t("error.permissions.cameraDescription"),
        status: "warning",
      });
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      allowsMultipleSelection: false,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.2,
    });
    if (pickerResult.cancelled) return;
    onClose();
    setSelectedImage(pickerResult.uri);
  };

  const onSubmit = async (values: CreateProfileFormValues) => {
    const formData = new FormData();
    Object.entries(values).map((value) => {
      formData.append(value[0], value[1]);
    });
    if (selectedImage) formData.append("file", {
      name: "_profile",
      uri: selectedImage,
      type: "image/jpg",
    });
    formData.append("userId", route.params.userId);
    setPending(true);
    const response = await authService.createProfile(formData);
    if (response.status >= 400) {
      toast.show({
        title: response.data,
        status: "error",
      });
    } else {
      toast.show({
        status: "success",
        title: "Thanks for signing up with us.",
        duration: 500,
      });
      setPending(false);
      dispatch(loginUserRequest({
        email: route.params.email,
        password: route.params.password,
      }));
    }
  };

  const formik = useFormik({
    initialErrors: undefined,
    initialTouched,
    initialValues,
    onSubmit,
    validationSchema: createProfileValidationRules,
  });

  useFocusEffect(useCallback(() => {
    return () => {
      formik.handleReset(initialValues);
      setPending(false);
    };
  }, []));

  const AddImageAction = () => (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <HStack justifyContent={"center"} alignItems={"center"}>
          <Actionsheet.Item w={"33%"} justifyContent={"center"} onPress={openImagePickerLib}>
            <VStack alignItems={"center"} space={"sm"}>
              <Circle size={16} bg={"#ccc"}>
                <Icon as={MaterialIcons} name="insert-photo" />
              </Circle>
              <Text>{t("common.gallery")}</Text>
            </VStack>
          </Actionsheet.Item>
          <Actionsheet.Item w={"33%"} justifyContent={"flex-start"} onPress={openImagePickerCamera}>
            <VStack alignItems={"center"} space={"sm"}>
              <Circle size={16} bg={"#ccc"}>
                <Icon as={Entypo} name="camera" />
              </Circle>
              <Text>{t("common.camera")}</Text>
            </VStack>
          </Actionsheet.Item>
        </HStack>
      </Actionsheet.Content>
    </Actionsheet>
  );

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
        pb="9"
        pt="4"
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
              {t("auth.createProfile")}
            </Text>
          </Hidden>
          <VStack>
            <VStack space="8">
              <VStack space={{base: "7", md: "4"}} alignItems={"center"}>
                <Pressable onPress={onOpen}>
                  {selectedImage ?
                    <Avatar size={"xl"}
                            source={{uri: selectedImage}}>
                      <Avatar.Badge bg="primary.600" boxSize="8" alignItems="center" justifyContent="center"><Icon
                        as={Ionicons} name="camera" size={3} color={"white"} /></Avatar.Badge>
                    </Avatar>
                    : <Avatar size={"xl"}>
                      <Icon as={AntDesign} name="user" size={"xl"} />
                      <Avatar.Badge bg="primary.600" boxSize="8" alignItems="center" justifyContent="center"><Icon
                        as={Ionicons} name="camera" size={3} color={"white"} /></Avatar.Badge>
                    </Avatar>
                  }
                </Pressable>
                <AddImageAction />
                <FormControl isRequired isInvalid={(!!formik.errors.name && formik.touched.name)}>
                  <Input
                    isRequired
                    onFocus={() => {
                      formik.setFieldTouched("name", true);
                    }}
                    type="text"
                    value={formik.values.name}
                    borderRadius={4}
                    placeholderTextColor={"#9ca3af"}
                    placeholder={$t("auth.enterName")}
                    onChangeText={formik.handleChange("name")}
                    size={"md"}
                    _dark={{
                      borderColor: "coolGray.700",
                    }}
                    _light={{
                      borderColor: "coolGray.300",
                    }}
                    autoCompleteType="name"
                    keyboardType="default"
                    returnKeyType="next"
                    textContentType="name"
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {formik.errors.name}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={!!formik.errors.flat && formik.touched.flat}>
                  <Input
                    isRequired
                    onFocus={() => formik.setFieldTouched("flat", true)}
                    type="text"
                    placeholder={$t("auth.enterFlat")}
                    size={"md"}
                    placeholderTextColor={"#9ca3af"}
                    borderRadius={4}
                    value={formik.values.flat}
                    onChangeText={formik.handleChange("flat")}
                    _dark={{
                      borderColor: "coolGray.700",
                    }}
                    _light={{
                      borderColor: "coolGray.300",
                    }}
                    autoCompleteType="street-address"
                    keyboardType="numeric"
                    returnKeyType="next"
                    textContentType="streetAddressLine1"
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {formik.errors.flat}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={!!formik.errors.mobileNum && formik.touched.mobileNum}>
                  <Input
                    isRequired
                    onFocus={() => formik.setFieldTouched("mobileNum", true)}
                    type="text"
                    placeholder={$t("auth.enterPhoneNum")}
                    size={"md"}
                    placeholderTextColor={"#9ca3af"}
                    borderRadius={4}
                    value={formik.values.mobileNum}
                    onChangeText={formik.handleChange("mobileNum")}
                    _dark={{
                      borderColor: "coolGray.700",
                    }}
                    _light={{
                      borderColor: "coolGray.300",
                    }}
                    autoCompleteType="tel"
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    textContentType="telephoneNumber"
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {formik.errors.mobileNum}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={!!formik.errors.ownershipType && formik.touched.ownershipType}>
                  <FormControl.Label>{t("auth.chooseOwnership")}</FormControl.Label>
                  <Select
                    placeholderTextColor={"#9ca3af"}
                    selectedValue={formik.values.ownershipType}
                    onValueChange={formik.handleChange("ownershipType")}
                    borderRadius={4}
                    _dark={{
                      borderColor: "coolGray.700",
                    }}
                    _light={{
                      borderColor: "coolGray.300",
                    }}
                    dropdownOpenIcon={<Icon as={Entypo} name="chevron-small-up" color={"#9ca3af"} />}
                    dropdownCloseIcon={<Icon as={Entypo} name="chevron-small-down" color={"#9ca3af"} />}
                  >
                    {Object.values(OWNERSHIP_TYPES).map((value) =>
                      <Select.Item label={value} value={value} key={value} />,
                    )}
                  </Select>
                  <FormControl.ErrorMessage>
                    Please make a selection!
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
                isLoading={pending}
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
export default CreateProfileForm;
