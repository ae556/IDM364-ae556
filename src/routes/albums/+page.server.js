import { createClient } from '@supabase/supabase-js'

import {SUPABASE_URL, API_KEY} from "$env/static/private"

// "async" allows dev to performs certain actions that takes time to complete (calling database)
export const load = async ({params}) => {
    const supabaseUrl = SUPABASE_URL
    const supabaseKey = API_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)
   
//   const new_album = await supabase.from("album").insert({title: "BLACK METAL 2", artist:"Dean Blunt"})

  const albums_data = await supabase.from ("album").select()
//wait for supabase to find all of my albums and store it in var called albums_data^
 
console.log (albums_data)
    return {
        id: params.id, 
        albums: albums_data
    } 
    // access id parameter for svelte^
}

//"status" in terminal: 200 = ok, 400 = client error, 404 = not found, 500 = dev error