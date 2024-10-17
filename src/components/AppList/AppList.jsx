import AppleIcon from "../AppleIcon";
import GoogleIcons from "../GoogleIcons";
import styles from "./AppList.module.css";
import TwitterIcon from "../TwitterIcon";
export default function AppList() {
  const componentsIcon = [
    <AppleIcon key={1} />,
    <GoogleIcons key={2} />,
    <TwitterIcon key={3} />,
  ];

  return (
    <div className={styles.container}>
      {componentsIcon.map((component) => component)}
    </div>
  );
}
