
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uuvpaxswvlupfrkajitp.supabase.co';

// Paste your Supabase publishable key between the quotes.
const SUPABASE_PUBLISHABLE_KEY = sb_publishable_pzbCP0qBBECI1sDS1Go5nQ_OluL7ajb;

export const isConfigured =
  SUPABASE_URL.startsWith('https://') &&
  SUPABASE_PUBLISHABLE_KEY !== sb_publishable_pzbCP0qBBECI1sDS1Go5nQ_OluL7ajb &&
  SUPABASE_PUBLISHABLE_KEY.length > 0;

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
