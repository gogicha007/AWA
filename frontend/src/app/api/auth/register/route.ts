export default async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    // here goes validation of email and password
    console.log({ email, password });
  } catch (e) {
    console.log({ e });
  }
}
