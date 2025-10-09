import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../_/nitro.mjs';
import { s as supabase } from '../../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@supabase/supabase-js';

const _id__patch = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    const body = await readBody(event);
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D"
      });
    }
    const allowedFields = ["name", "secondname", "avatar_url"];
    const updateData = {};
    allowedFields.forEach((field) => {
      if (body[field] !== void 0) {
        updateData[field] = body[field];
      }
    });
    if (Object.keys(updateData).length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"
      });
    }
    const { data: user, error } = await supabase.from("users").update(updateData).eq("id", id).select().single();
    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message
      });
    }
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
      });
    }
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (error) {
    console.error("Update user error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
    });
  }
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
