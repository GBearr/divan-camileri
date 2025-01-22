import { Button } from "@heroui/button";
import localizationStrings from "@/statics/localization";

export const LanguageSelector = () => {
  const handleLanguageChange = (lang: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
    localizationStrings.setLanguage(lang);
  };

  return (
    <>
      <Button
        className="text-sm font-normal text-default-600 bg-default-100"
        variant="flat"
        onPress={() => handleLanguageChange("eng")}
      >
        EN
      </Button>
      <Button
        className="text-sm font-normal text-default-600 bg-default-100"
        variant="flat"
        onPress={() => handleLanguageChange("tr")}
      >
        TR
      </Button>
    </>
  );
};
