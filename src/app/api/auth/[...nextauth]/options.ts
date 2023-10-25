import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

// Utilizamos github como proveedor de autenticación
// Adicionalmente agregamos un proveedor de credenciales con un usuario hardcodeado por las dudas
// La libreria genera un token de sesión que se almacena en una cookie
export const options: NextAuthOptions = {
  // Next-auth genera el boton de Sign In con GitHub y el formulario de Sign In con Credenciales
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'Enter your username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        // Aca es donde abria que configurar la logica de autenticacion
        // en el caso de que se quiera usar usuarios que tengamos almacenados en una base de datos
        const user = { id: '1', name: 'user1', password: 'user1' };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
