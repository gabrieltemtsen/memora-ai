import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Insert or update the user in a Convex table then return the document's ID.
 *
 * The `did` string is provided from the front-end as the unique identifier for the user.
 */
interface UserInfo {
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    birthdate: string;
    address: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
    about: string;
    visibility: string;
    did: string;
}

export const store = mutation({
  args: { userInfo: v.object({
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    about: v.string(),
    country: v.string(),
    birthdate: v.string(),
    streetAddress: v.string(),
    city: v.string(),
    visibility: v.string(),
    postalCode: v.string(),
    phoneNumber: v.string(),
    did: v.string()
  })},
  handler: async (ctx, { userInfo }) => {
    // Check if the user with the provided DID already exists.
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("did"), userInfo.did))
      .unique();

    if (existingUser) {
        console.log('helloNN', existingUser._id)
      return existingUser._id;
    } else {
        console.log('YesYes')
      // If it's a new user, create a new entry.
      const newUserId = await ctx.db.insert("users", {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        country: userInfo.country,
        did: userInfo.did,
        visibility: userInfo.visibility,
        about: userInfo.about,
        birthdate: userInfo.birthdate,
        phoneNumber: userInfo.phoneNumber,
        streetAddress: userInfo.streetAddress,
        city: userInfo.city,
        postalCode: userInfo.postalCode,
      });
      return newUserId;
    }
  }
});
export const getUser = query({
    args: { did: v.optional(v.string()) },
    handler: async (ctx, args) => {
     if(args.did){
        const user = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("did"), args.did))
        .unique();
        return user;
     } else {
         return null;
     }
    

    },
  });
