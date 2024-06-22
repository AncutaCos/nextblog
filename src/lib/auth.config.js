export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      
      // SOLO GLI UTENTI AMMINISTRATORI POSSONO ACCEDERE ALL'ADMIN PANEL
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // TUTTI GLI UTENTI, AUTENTICATI O NO, POSSONO ACCEDERE ALLA PAGINA BLOG
      return true;
    },
  },
};
