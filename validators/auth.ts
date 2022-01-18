import * as Yup from "yup";
import $t from "../i18n";
import {OWNERSHIP_TYPES} from "../constants";

export const signInValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t("validation.emailIsRequired"))
    .email($t("validation.mustBeValidEmail")),
  password: Yup.string()
    .required($t("validation.passwordIsRequired")),
});

export const signUpValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t("validation.emailIsRequired"))
    .email($t("validation.mustBeValidEmail")),
  password: Yup.string()
    .required($t("validation.passwordIsRequired"))
    .min(6, $t("validation.passwordMinCharacters")),
  confirmPassword: Yup.string()
    .required($t("validation.confirmPasswordIsRequired"))
    .min(6, $t("validation.confirmPasswordMinCharacters"))
    .oneOf([Yup.ref("password"), null], $t("auth.passwordsMustMatch")),
});

export const createProfileValidationRules = Yup.object({
  name: Yup.string()
    .required($t("validation.nameIsRequired")),
  flat: Yup.number()
    .required($t("validation.flatIsRequired"))
    .moreThan(0, $t("validation.flatIsInvalid")),
  mobileNum: Yup.string()
    .required($t("validation.mustBeValidPhoneNumber"))
    .matches(/^[6-9]\d{9}$/, {
      message: $t("validation.mustBeValidPhoneNumber"),
      excludeEmptyString: true,
    }),
  ownershipType: Yup.string()
    .required($t("validation.invalidOwnership"))
    .oneOf(Object.values(OWNERSHIP_TYPES), $t("validation.invalidOwnership")),
});

export const forgotPasswordValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t("validation.emailIsRequired"))
    .email($t("validation.mustBeValidEmail")),
});

export const resetPasswordValidationRules = Yup.object().shape({
  password: Yup.string()
    .required($t("validation.passwordIsRequired"))
    .min(8, $t("validation.passwordMinCharacters")),
  password_confirmation: Yup.string()
    .required($t("validation.confirmPasswordIsRequired"))
    .min(8, $t("validation.confirmPasswordMinCharacters"))
    .oneOf([Yup.ref("password"), null], $t("auth.passwordsMustMatch")),
});
