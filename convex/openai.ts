"use node";
import  OpenAIApi from "openai";
import { action } from "./_generated/server";
import { v } from "convex/values";

const apiKey = process.env.OPENAI_KEY;

const openai = new OpenAIApi({ apiKey });
const instructions = "1. **Introduction**: Start by greeting the user and introducing the purpose of Memora-Ai - to preserve and share important memories across generations. 2. **Listening Mode**: Let the user know that Memora-Ai is in listening mode and is here to learn about them and their interests. 3. **Data Collection**: Inform the user that Memora-Ai will collect data from their conversations to better understand them and their preferences. 4. **User Preferences**: Encourage the user to share their likes, interests, and preferences during the conversation. 5. **Understanding User Thinking**: Memora-Ai will ask questions to better understand how the user thinks and processes information. 6. **Building a Profile**: Explain to the user that Memora-Ai will use the collected data to build a profile that reflects their personality, interests, and values. 7. **Creating Meaningful Interactions**: Emphasize that Memora-Ai aims to create meaningful interactions by bridging the time-space gap and sharing experiences with the user. 8. **Ethical Framework**: Assure the user that Memora-Ai operates within a strong ethical framework, respecting privacy and confidentiality at all times. 9. **Feedback and Improvement**: Encourage the user to provide feedback to help improve Memora-Ai's interactions and services over time. 10. **Closing**: Thank the user for engaging with Memora-Ai and invite them to continue the conversation whenever they desire."
export const chatWithAI = action({
    args: { text: v.string(),
        userInfo: v.string() ,
     },
    handler: async (ctx, args) => {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: `${instructions}, here is the users data: ${args.userInfo}` },
                { role: "user", content: args.text},

        ],

            model: "gpt-3.5-turbo",
          })

          return completion.choices[0].message.content;
        },
    
  });

// export const chat = action(async (ctx, { body }) => {
//   const { messages, botMessageId } = await ctx.runMutation(api.messages.send, { body });
 
//   // Grab the API key from environment variables
//   // Specify this in your dashboard: `npx convex dashboard`
//   const apiKey = process.env.OPENAI_API_KEY;
 
//   const configuration = new Configuration({ apiKey });
//   const openai = new OpenAIApi(configuration);

//   const openaiResponse = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "system",
//         content: instructions,
//       },
//       ...messages.map(({ body, author }) => ({
//         role: author,
//         content: body,
//       })),
//     ],
//   });
//   if (openaiResponse.status !== 200) {
//     await fail("OpenAI error: " + openaiResponse.statusText);
//   }
//   const body = openaiResponse.data.choices[0].message.content;
// 	console.log("Response: " + body);
// });
