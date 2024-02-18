import { internalMutation, internalQuery, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrUpdateConversation = internalMutation({
  args: { userId: v.id("users"), newMessages: v.array(v.object({ sender: v.string(), message: v.string() })) },
  handler: async (ctx, args) => {
    // Check if there is an existing conversation for the user
    const existingConversation = await ctx.db
      .query("conversations")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    if (existingConversation.length > 0) {
      // If conversation exists, update it by appending new messages
      await ctx.db
        .patch(existingConversation[0]._id, {conversation: [...existingConversation[0].conversation, ...args.newMessages]})
    } else {
      // If conversation doesn't exist, create a new one
      await ctx.db.insert("conversations", {
        userId: args.userId,
        conversation: args.newMessages,
      });
    }
  },
});

export const getConversation = internalQuery({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const conversation = await ctx.db
      .query("conversations")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
    
    return conversation.length > 0 ? conversation[0] : null;
  },
});
export const getConversations = query({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
      const conversation = await ctx.db
        .query("conversations")
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .collect();
      
      return conversation.length > 0 ? conversation[0] : null;
    },
  });