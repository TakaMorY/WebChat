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

const registration_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password, name, secondname } = body;
    if (!email || !password || !name || !secondname) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u0412\u0441\u0435 \u043F\u043E\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 email"
      });
    }
    if (password.length < 6) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
      });
    }
    const hashedPassword = Buffer.from(password).toString("base64");
    const { data: user, error } = await supabase.from("users").insert([
      {
        email,
        password: hashedPassword,
        name,
        secondname
      }
    ]).select().single();
    if (error) {
      if (error.code === "23505") {
        throw createError({
          statusCode: 400,
          statusMessage: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0442\u0430\u043A\u0438\u043C email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"
        });
      }
      throw createError({
        statusCode: 500,
        statusMessage: error.message
      });
    }
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (error) {
    console.error("Registration error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"
    });
  }
});

export { registration_post as default };
//# sourceMappingURL=registration.post.mjs.map
