'use server';
import { auth } from "@Clerk/nextjs/server";
import { createSupabaseClient } from "@/ib/supabase";

export const createCompanion = (formData: CreateCompanion) => {
    const { userId: author} = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
    .from(relation: 'companion').insert({...formData, author})
    .select();

    if (error || !data) throw new Error(error.message || "Failed to create companion");
    return data[0];
}