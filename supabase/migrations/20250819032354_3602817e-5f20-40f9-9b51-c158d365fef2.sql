-- Add explicit SELECT policy for newsletter_subscribers table to prevent unauthorized access
-- This ensures only server-side operations (service_role) can read subscriber emails

CREATE POLICY "Restrict newsletter subscriber access to service role only" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (auth.role() = 'service_role');

-- Add comment for clarity
COMMENT ON POLICY "Restrict newsletter subscriber access to service role only" ON public.newsletter_subscribers 
IS 'Prevents public access to subscriber emails, only allows server-side operations to read data';