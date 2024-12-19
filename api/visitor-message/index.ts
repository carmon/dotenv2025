import { visitorTick } from "../../src/visitors";

export async function GET(_: Request) {
  return new Response(`#${await visitorTick() || 'ERROR'}`);
}