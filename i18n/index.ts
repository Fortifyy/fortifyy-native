import i18n from "i18n-js";
import * as Localization from "expo-localization";

import en from "./locale/en.json";

i18n.fallbacks = true;

i18n.translations = {
  en,
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function $t(key: i18n.Scope, params = {}) {
  return i18n.t(key, params);
}
