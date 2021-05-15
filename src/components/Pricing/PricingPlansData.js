import fingerprint from "../../assets/icons/fingerprint.png";
import otp from "../../assets/icons/otp.png";
import owner from "../../assets/icons/owner.png";
import scan from "../../assets/icons/scan.png";
import securityConfig from "../../assets/icons/securityConfig.png";

const data = [
  {
    type: "Popular",
    url: securityConfig,
    title: "Enterprise",
    text: "Verify customer identiy with as little as theri phone number",
    features: ["Identity", "KYC", "OTP Verification"],
    btnName: "Get Started",
  },
  {
    type: "Hot",
    url: owner,
    title: "Big Businesses",
    text: "Verify customer identiy with as little as theri phone number",
    features: ["Identity", "OTP Verification"],
    btnName: "Try Now",
  },
  {
    type: "New",
    url: fingerprint,
    title: "Small",
    text: "Verify customer identiy with as little as theri phone number",
    features: ["Identity", "KYC", "OTP Verification"],
    btnName: "Contact",
  },
  {
    type: "New",
    url: otp,
    title: "Small",
    text: "Verify customer identiy with as little as theri phone number",
    features: ["OTP Verification"],
    btnName: "Contact",
  },
  {
    type: "New",
    url: scan,
    title: "Small",
    text: "Verify customer identiy with as little as theri phone number",
    features: ["KYC Verification"],
    btnName: "Know More",
  },
];

export default data;
