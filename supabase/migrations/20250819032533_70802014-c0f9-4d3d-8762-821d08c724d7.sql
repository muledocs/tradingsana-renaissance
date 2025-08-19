-- Add explicit SELECT policy for quote_requests table to prevent unauthorized access
-- This ensures only server-side operations (service_role) can read sensitive business data

CREATE POLICY "Restrict quote requests access to service role only" 
ON public.quote_requests 
FOR SELECT 
USING (auth.role() = 'service_role');

-- Add comment for clarity
COMMENT ON POLICY "Restrict quote requests access to service role only" ON public.quote_requests 
IS 'Prevents public access to sensitive business quotes and customer data, only allows server-side operations to read data';