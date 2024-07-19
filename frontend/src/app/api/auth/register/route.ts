export default async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
  } catch (e) {
    console.log({ e });
  }
}
