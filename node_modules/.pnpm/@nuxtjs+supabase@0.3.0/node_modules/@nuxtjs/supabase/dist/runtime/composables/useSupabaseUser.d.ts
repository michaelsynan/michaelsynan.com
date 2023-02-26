import type { Ref } from 'vue';
import { User } from '@supabase/supabase-js';
export declare const useSupabaseUser: () => Ref<User | null>;
