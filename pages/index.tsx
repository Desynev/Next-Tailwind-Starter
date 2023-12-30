import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <Link href="/Product">
        <Button>Go to Product Page</Button>
      </Link>
    </div>
  );
}
