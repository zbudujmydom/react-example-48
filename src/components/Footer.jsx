import CompanyInfo from "./CompanyInfo";

function Footer(props) {
  return (
    <footer>
      <CompanyInfo />
      <p>Hello {props.user}</p>
    </footer>
  );
}

export default Footer;
