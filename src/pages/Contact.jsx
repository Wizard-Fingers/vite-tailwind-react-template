import { usePageTitleAndMeta } from "../components/PageTitleAndMeta";
import Navbar from "../components/Navbar";
export default function Contact() {
  usePageTitleAndMeta(
    "Duck Digital: Contact",
    "Contact us for more information."
  );
  return (
    <>
      <Navbar />
      <div>Contact</div>
    </>
  );
}
