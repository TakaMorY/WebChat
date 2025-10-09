import { d as defineEventHandler, r as readBody, c as createError } from '../../../_/nitro.mjs';
import { s as supabase } from '../../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@supabase/supabase-js';

const login_post = defineEventHandler(async (event) => {
  console.log("\u{1F511} Login API called");
  try {
    const body = await readBody(event);
    const { email, password } = body;
    console.log("\u{1F4E7} Login attempt for:", email);
    if (!email || !password) {
      console.log("\u274C Missing email or password");
      throw createError({
        statusCode: 400,
        statusMessage: "Email \u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B"
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("\u274C Invalid email format:", email);
      throw createError({
        statusCode: 400,
        statusMessage: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 email"
      });
    }
    const hashedPassword = Buffer.from(password).toString("base64");
    console.log("\u{1F511} Password hashed for comparison");
    console.log("\u{1F50D} Searching user in Supabase...");
    const { data: user, error } = await supabase.from("users").select("*").eq("email", email).single();
    console.log("\u{1F4CA} Supabase response:", {
      userFound: !!user,
      error: error == null ? void 0 : error.message,
      userEmail: user == null ? void 0 : user.email
    });
    if (error) {
      console.log("\u274C Supabase search error:", error);
      if (error.code === "PGRST116") {
        throw createError({
          statusCode: 401,
          statusMessage: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 email \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
        });
      }
      throw createError({
        statusCode: 500,
        statusMessage: `\u041E\u0448\u0438\u0431\u043A\u0430 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445: ${error.message}`
      });
    }
    if (!user) {
      console.log("\u274C User not found for email:", email);
      throw createError({
        statusCode: 401,
        statusMessage: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 email \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
      });
    }
    console.log("\u{1F511} Comparing passwords...");
    console.log("   Stored hash:", user.password);
    console.log("   Input hash:", hashedPassword);
    if (user.password !== hashedPassword) {
      console.log("\u274C Password mismatch");
      throw createError({
        statusCode: 401,
        statusMessage: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 email \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
      });
    }
    const { password: _, ...userWithoutPassword } = user;
    console.log("\u2705 Login successful for:", user.email);
    return userWithoutPassword;
  } catch (error) {
    console.error("\u{1F4A5} Login error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
