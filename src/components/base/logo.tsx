import { logo } from "../../assets/images";

export default function Logo(): JSX.Element {
  return (
    <div>
      <img src={logo} alt="Logo do back coins" />
      <p>Bank Coins</p>
    </div>
  );
}
