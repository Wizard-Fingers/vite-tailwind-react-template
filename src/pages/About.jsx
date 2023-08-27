import { usePageTitleAndMeta } from "../components/PageTitleAndMeta";
import Navbar from "../components/Navbar";
export default function About() {
  usePageTitleAndMeta(
    "Duck Digital: About",
    "Learn more about our company and mission."
  );
  return (
    <>
      <Navbar />
      <div>About</div>
    </>
  );
}
