import Link from "next/link";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-lg px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Pagina niet gevonden</h1>
      <p className="mt-3 text-muted-foreground">
        Deze pagina bestaat niet of is verplaatst.
      </p>
      <div className="mt-8">
        <Button href="/">Naar home</Button>
      </div>
      <p className="mt-4">
        <Link
          href="/#werk"
          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          Bekijk werk
        </Link>
      </p>
    </main>
  );
}
