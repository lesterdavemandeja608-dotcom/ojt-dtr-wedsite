
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const isConfigured = Boolean(
  SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY
);

export const supabase = createClient(
  SUPABASE_URL || 'https://uuvpaxswvlupfrkajitp.supabase.co',
  SUPABASE_PUBLISHABLE_KEY || 'missing-publishable-key'
);
