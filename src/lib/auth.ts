import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import { account, session, subscription, user, verification } from "./auth-schema";
import { stripe } from "@better-auth/stripe"
import Stripe from "stripe"

export const auth = betterAuth({
  plugins: [
    stripe({
        stripeClient: new Stripe(process.env.STRIPE_SECRET_KEY!, {
          apiVersion: "2025-02-24.acacia",
        }),
        stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
        createCustomerOnSignUp: true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onCustomerCreate: async ({ customer, stripeCustomer, user }, request) => {
          // Do something with the newly created customer
          console.log(`Customer ${customer.id} created for user ${user.id}`);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getCustomerCreateParams: async ({ user, session }, request) => {
          // Customize the Stripe customer creation parameters
          return {
              metadata: {
                  referralSource: user.email
              }
          };
      },
      subscription: {
        enabled: true,
        plans: [
            {
                name: "basic", // the name of the plan, it'll be automatically lower cased when stored in the database
                priceId: process.env.STRIPE_PRICE_ID_BASIC, // the price id from stripe
                limits: {
                    projects: 5,
                    storage: 10
                }
            },
            {
                name: "pro",
                priceId: process.env.STRIPE_PRICE_ID_PRO,
                limits: {
                    projects: 20,
                    storage: 50
                },
                freeTrial: {
                    days: 14,
                }
            }
        ]
    }
    })
  ],
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification,
      subscription: subscription
    }
  }),
  socialProviders: {
      google: {
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          redirectURI: "http://localhost:3000/api/auth/callback/google",
      }
  },
});