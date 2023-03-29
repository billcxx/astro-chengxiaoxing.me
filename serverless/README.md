```sh
pnpm install
export CLOUDFLARE_AUTH_KEY=******
export CLOUDFLARE_AUTH_EMAIL=******
export CLOUDFLARE_ACCOUNT_ID=******
export CLOUDFLARE_ZONE_ID=******
serverless deploy
wrangler secret put SENDGRID_API_KEY --name chengxiaoxing-subscribe
```
