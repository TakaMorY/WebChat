import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const supabase = createClient(
        config.supabaseUrl,
        config.supabaseKey,
        {
            auth: {
                persistSession: false,
                autoRefreshToken: false
            },
            global: {
                headers: { 'x-application-name': 'webchat' }
            }
        }
    )

    return {
        provide: {
            supabase
        }
    }
})