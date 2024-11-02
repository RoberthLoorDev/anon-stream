import Layout from "../layout/Layout";
import { useAuth } from "../context/useAuth";

export default function HomePage() {
     const { user, signout } = useAuth();
     return (
          <Layout>
               <>
                    <p>{`email: ${user.email}`}</p>
                    <h1>Home page</h1>
                    <button onClick={signout}>Cerrar sesión</button>
               </>
          </Layout>
     );
}
