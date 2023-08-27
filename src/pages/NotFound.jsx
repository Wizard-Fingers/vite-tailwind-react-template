import { usePageTitleAndMeta } from "../components/PageTitleAndMeta";
export default function NotFound() {
  usePageTitleAndMeta("Duck Digital: Not Found", "Page not found.");
  return <div>NotFound</div>;
}
