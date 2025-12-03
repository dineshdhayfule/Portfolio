# Web3Forms Setup Guide

Follow these steps to enable the contact form:

## Step 1: Get Your Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address
3. Click "Get Access Key"
4. Check your email for the access key

## Step 2: Add Access Key to Your Project

1. Create a `.env.local` file in the root directory (copy from `.env.local.example`)
2. Replace `your_access_key_here` with your actual access key:

   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key
   ```

## Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Start it again
pnpm dev
```

## Step 4: Deploy to Vercel

Add the environment variable to Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add a new variable:
   - **Name:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value:** Your Web3Forms access key
   - **Environment:** Production, Preview, Development (select all)
4. Redeploy your site: `vercel --prod`

## Features Implemented

✅ **Async form submission** - No page reload
✅ **Loading state** - Shows "Sending..." while submitting
✅ **Success message** - Confirms when email is sent
✅ **Error handling** - Shows error if submission fails
✅ **Form reset** - Clears fields after successful submission
✅ **Disabled state** - Prevents multiple submissions

## Testing

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. You should see "Sending..." then a success message
4. Check the email you registered with Web3Forms for the message

## Troubleshooting

**Form not working?**

- Check that `.env.local` file exists and has the correct key
- Restart your dev server after adding environment variables
- Verify the access key is correct (no extra spaces)

**Not receiving emails?**

- Check spam folder
- Verify the email you used to register with Web3Forms
- Test by submitting a form and checking Web3Forms dashboard

**Deployment issues?**

- Make sure environment variable is added to Vercel
- Redeploy after adding the variable
- Check Vercel deployment logs for errors
