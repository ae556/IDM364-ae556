import { json } from '@sveltejs/kit'
import { createClient } from '@supabase/supabase-js'

import {SUPABASE_URL, API_KEY} from "$env/static/private"

const supabaseUrl = SUPABASE_URL
const supabaseKey = API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

//need to set up route handlers for server
export const GET = async () => {
    console.log("running on the server")
    const albums_info = await supabase.from("album").select()
    return new json({sucess: true, data:albums_info})
}
//javascript function^
export const POST = async ({request}) => {
    const body = await request.json() 
    console.log("running on the server", body)
    const new_album = await supabase.from("album").insert(body)
    return new json({sucess:true, data:new_album})
}

export const DELETE = async ({request}) => {
    const deleted_albums = await supabase.from("album").delete().neq("id","-1")
    return new json({sucess:true, data:deleted_albums})
}