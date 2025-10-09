import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../../_/nitro.mjs';
import { s as supabase } from '../../../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@supabase/supabase-js';

const password_patch = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    const body = await readBody(event);
    const { currentPassword, newPassword } = body;
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D"
      });
    }
    if (!currentPassword || !newPassword) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0438 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B"
      });
    }
    if (newPassword.length < 6) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
      });
    }
    const { data: user, error: fetchError } = await supabase.from("users").select("*").eq("id", id).single();
    if (fetchError || !user) {
      throw createError({
        statusCode: 404,
        statusMessage: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
      });
    }
    const currentHashedPassword = Buffer.from(currentPassword).toString("base64");
    if (user.password !== currentHashedPassword) {
      throw createError({
        statusCode: 401,
        statusMessage: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
      });
    }
    const newHashedPassword = Buffer.from(newPassword).toString("base64");
    const { data: updatedUser, error: updateError } = await supabase.from("users").update({ password: newHashedPassword }).eq("id", id).select().single();
    if (updateError) {
      throw createError({
        statusCode: 500,
        statusMessage: updateError.message
      });
    }
    return { success: true, message: "\u041F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D" };
  } catch (error) {
    console.error("Change password error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u043F\u0430\u0440\u043E\u043B\u044F"
    });
  }
});

export { password_patch as default };
//# sourceMappingURL=password.patch.mjs.map
