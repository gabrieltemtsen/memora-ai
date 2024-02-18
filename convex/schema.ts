import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  conversations: defineTable({
    userId: v.string(),
    conversation: v.array(v.object({
        sender: v.string(),
        message: v.string(),
    })),
}),
 
  users: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    country: v.string(),
    birthdate: v.string(),
    streetAddress: v.string(),
    city: v.string(),
    postalCode: v.string(),
    phoneNumber: v.string(),
    about: v.string(),
    visibility: v.string(),
    did: v.string(),
  }).index("by_token", ["did"]),
});