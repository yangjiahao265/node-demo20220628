import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req: Request): Response {

    fetch()

    return new Response("Hello, World");
}

serve(handler);
