
import { Link } from 'react-router-dom';


export function Navigation() {
  return (
    <nav className="flex items-center gap-4 px-5 text-sm border-b mb-5">
      <section className="logo flex-none">
        <Link href="/"><h1 className="text-lg font-bold">Pokémon database</h1></Link>
      </section>
      {/*TODO: the next section is supposed to be shrinking and pushing the links into a dropdown button [...]*/}
      <section className="routes-main flex-1 flex flex-row gap-5">
        <Link className="py-5" href="/">Search</Link>
        <Link className="py-5" href="/results">Results</Link>
      </section>
      <section className="routes-utility flex-none flex flex-row gap-5">
        <Link className="py-5" href="/about">About</Link>
        <Link className="py-5" href="/contact">Contact</Link>
        <Link className="py-5" href="/imprint">Imprint</Link>
        <Link className="py-5" href="/login">Login</Link>
        <Link className="py-5" href="/register">Register</Link>
        <Link className="py-5" href="/settings">Settings</Link>
        <Link className="py-5" href="/terms">Terms</Link>
        <Link className="py-5" href="/privacy">Privacy</Link>
      </section>
    </nav>
  );
}

export default Navigation;
