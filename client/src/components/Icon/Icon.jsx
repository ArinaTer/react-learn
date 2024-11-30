import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagran.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkidin.svg";

const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export const Icon = ({ name}) => {
  const IconComponent = icons[name];

  return <IconComponent />;
};
