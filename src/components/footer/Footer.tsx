import { getStableId } from "@/helpers/getStableId";
import {
  FooterContainer,
  FooterContent,
  SocialLinks,
  SocialIcon,
  CopyRight,
} from "./styles";
import { useAppContext } from "@/context/AppContext";

const Footer = () => {
  const {
    homeData: { footer: footerData },
  } = useAppContext();
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          {footerData.socialLinks.map((socialItem, i) => {
            return (
              <SocialIcon
                href={socialItem.url}
                target="_blank"
                aria-label={socialItem.platform}
                key={getStableId(socialItem, "footersocial")}
              >
                <socialItem.Icon />
              </SocialIcon>
            );
          })}
        </SocialLinks>

        <CopyRight>{footerData.copyrightText}</CopyRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
