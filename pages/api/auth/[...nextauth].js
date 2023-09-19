import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  theme: {
    // Customize the look and feel of NextAuth
    logo: "https://img.icons8.com/color/240/twitter--v1.png", // URL to an image to use as the logo
    brandColor: "#00ADED", // Color of the top bar
    colorScheme: "light", // Color scheme for the top bar
  },
})
